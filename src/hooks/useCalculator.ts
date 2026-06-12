import { useState, useCallback, useMemo } from 'react';
import { WEAPONS, RARITIES, rarityDmg, rarityMagDmg } from '../data/weapons';
import { SPELLS, BUFFS, ENEMY_TYPES } from '../data/spells';
import type { AttackerState, TargetState, SwingResult, CalcMeta, Buff, Spell } from '../types';

function scaleTime(base: number, actionSpeed: number): number {
  const s = 1 + actionSpeed / 100;
  if (s <= 0) return 0;
  return base / s;
}

interface DamageParams {
  basePhys: number;
  baseMag: number;
  comboMult: number;
  addPhys: number;
  addMag: number;
  physPct: number;
  magPct: number;
  hitMult: number;
  perkPct: number;
  PDR: number;
  MDR: number;
  flatReduce: number;
  block: number;
}

function calcHitDmg(params: DamageParams) {
  const { basePhys, baseMag, comboMult, addPhys, addMag, physPct, magPct, hitMult, perkPct, PDR, MDR, flatReduce, block } = params;

  const physRaw = (basePhys * comboMult / 100 + addPhys) * (1 + physPct / 100) * (1 + perkPct / 100);
  const magRaw = (baseMag + addMag) * (1 + magPct / 100);

  const physFinal = Math.max(0, physRaw * hitMult * (1 - PDR / 100) * (1 - block / 100) - flatReduce);
  const magFinal = Math.max(0, magRaw * hitMult * (1 - MDR / 100));

  return { phys: physFinal, mag: magFinal, total: physFinal + magFinal };
}

export function useCalculator() {
  const [attacker, setAttacker] = useState<AttackerState>({
    weapon: '',
    rarity: 0,
    baseWeaponDmg: '',
    addPhysDmg: 0,
    addMagDmg: 0,
    physPct: 0,
    magPct: 0,
    actionSpeed: 0,
    hitMult: 1.0,
    customMult: 1.0,
    comboMults: '',
    perkBonus: 0,
  });

  const [target, setTarget] = useState<TargetState>({
    targetHP: 100,
    targetCurrentHP: 100,
    targetPDR: 0,
    targetMDR: 0,
    targetAR: 0,
    targetFlatReduce: 0,
    targetBlock: 0,
    maxSwings: 10,
    comboLoop: true,
  });

  const [activeBuffs, setActiveBuffs] = useState<Buff[]>([]);
  const [activeSpells, setActiveSpells] = useState<Spell[]>([]);
  const [selectedEnemy, setSelectedEnemy] = useState<string>('');

  const updateAttacker = useCallback((updates: Partial<AttackerState>) => {
    setAttacker(prev => ({ ...prev, ...updates }));
  }, []);

  const updateTarget = useCallback((updates: Partial<TargetState>) => {
    setTarget(prev => ({ ...prev, ...updates }));
  }, []);

  const toggleBuff = useCallback((buff: Buff) => {
    setActiveBuffs(prev => {
      const exists = prev.find(b => b.id === buff.id);
      if (exists) return prev.filter(b => b.id !== buff.id);
      return [...prev, buff];
    });
  }, []);

  const toggleSpell = useCallback((spell: Spell) => {
    setActiveSpells(prev => {
      const exists = prev.find(s => s.id === spell.id);
      if (exists) return prev.filter(s => s.id !== spell.id);
      return [...prev, spell];
    });
  }, []);

  const applyEnemy = useCallback((enemyId: string) => {
    const enemy = ENEMY_TYPES.find(e => e.id === enemyId);
    if (!enemy) return;
    setSelectedEnemy(enemyId);
    setTarget(prev => ({
      ...prev,
      targetHP: enemy.baseHP,
      targetCurrentHP: enemy.baseHP,
      targetPDR: enemy.basePDR,
      targetMDR: enemy.baseMDR,
    }));
  }, []);

  const results = useMemo(() => {
    if (!attacker.weapon) return null;
    const w = WEAPONS.find(x => x.name === attacker.weapon);
    if (!w) return null;

    const rarIdx = attacker.rarity;
    const basePhysOverride = parseFloat(attacker.baseWeaponDmg);
    const basePhys = isNaN(basePhysOverride) || basePhysOverride === 0
      ? rarityDmg(w, rarIdx) : basePhysOverride;
    const baseMag = rarityMagDmg(w, rarIdx);

    // Apply buffs
    let physPct = attacker.physPct;
    let magPct = attacker.magPct;
    let actionSpeed = attacker.actionSpeed;
    let PDR = target.targetPDR;
    let MDR = target.targetMDR;
    let flatReduce = target.targetFlatReduce;
    let block = target.targetBlock;

    activeBuffs.forEach(buff => {
      if (buff.type === 'phys_dmg' && buff.isPercent) physPct += buff.value;
      if (buff.type === 'mag_dmg' && buff.isPercent) magPct += buff.value;
      if (buff.type === 'action_speed' && buff.isPercent) actionSpeed += buff.value;
      if (buff.type === 'pdr' && buff.isPercent) PDR = Math.min(100, PDR + buff.value);
      if (buff.type === 'mdr' && buff.isPercent) MDR = Math.min(100, MDR + buff.value);
      if (buff.type === 'flat_reduce') flatReduce += buff.value;
      if (buff.type === 'block' && buff.isPercent) block = Math.min(100, block + buff.value);
    });

    const addPhys = attacker.addPhysDmg;
    const addMag = attacker.addMagDmg;
    const perkPct = attacker.perkBonus;
    const hitMult = attacker.hitMult;

    const comboLoops = target.comboLoop;
    const maxSwings = Math.min(40, Math.max(2, target.maxSwings));

    const comboRaw = attacker.comboMults.trim();
    let comboArr = comboRaw ? comboRaw.split(',').map(x => parseFloat(x.trim()) || 100) : w.comboMult;
    if (!comboArr.length) comboArr = [100];

    const targetHP = target.targetHP;
    const currentHP = Math.min(target.targetCurrentHP, targetHP);

    const attacks = w.attacks;
    const numAtkPhases = attacks.length;

    const swings: SwingResult[] = [];
    let cumulativeTime = 0;
    let cumulativeDmg = 0;
    let killSwing: number | null = null;
    let killTime: number | null = null;

    for (let i = 0; i < maxSwings; i++) {
      let phaseIdx;
      if (comboLoops) {
        phaseIdx = i % numAtkPhases;
      } else {
        phaseIdx = Math.min(i, numAtkPhases - 1);
      }
      const atk = attacks[phaseIdx];

      const comboMult = comboArr[i % comboArr.length];

      const windup = scaleTime(atk.windup || 0, actionSpeed);
      const hit = scaleTime(atk.hit || 0, actionSpeed);
      const recover = atk.recover != null ? scaleTime(atk.recover, actionSpeed) : null;
      const finish = atk.finish != null ? scaleTime(atk.finish, actionSpeed) : null;

      const cycleTime = windup + hit + (recover !== null ? recover : (finish || 0));
      cumulativeTime += windup + hit;

      const dmg = calcHitDmg({
        basePhys, baseMag, comboMult, addPhys, addMag, physPct, magPct,
        hitMult, perkPct, PDR, MDR, flatReduce, block
      });
      cumulativeDmg += dmg.total;

      const hpAfter = Math.max(0, currentHP - cumulativeDmg);
      const isKill = cumulativeDmg >= currentHP && killSwing === null;
      if (isKill) { killSwing = i + 1; killTime = cumulativeTime; }

      swings.push({
        swingNum: i + 1,
        label: atk.label,
        windup,
        hit,
        recover,
        altRecover: atk.altRecover != null ? scaleTime(atk.altRecover, actionSpeed) : null,
        finish,
        cycleTime,
        cumulativeTime,
        dmg,
        cumulativeDmg,
        hpAfter,
        hpPct: Math.max(0, (hpAfter / targetHP) * 100),
        isKill,
        comboMult,
      });

      cumulativeTime += recover !== null ? recover : (finish || 0);

      if (isKill) break;
    }

    const meta: CalcMeta = {
      killSwing,
      killTime,
      w,
      rarIdx,
      basePhys,
      baseMag,
      targetHP,
      currentHP,
      maxSwings,
    };

    return { swings, meta };
  }, [attacker, target, activeBuffs]);

  return {
    attacker,
    target,
    activeBuffs,
    activeSpells,
    selectedEnemy,
    results,
    updateAttacker,
    updateTarget,
    toggleBuff,
    toggleSpell,
    applyEnemy,
  };
}
