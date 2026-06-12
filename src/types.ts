export interface AttackPhase {
  label: string;
  windup: number;
  hit: number;
  hitstop?: number;
  recover?: number;
  altRecover?: number;
  finish?: number;
}

export interface Weapon {
  name: string;
  cat: string;
  slot: string;
  hand: 'one' | 'two';
  dmgMin: number;
  dmgMax: number;
  dmgType: 'Physical' | 'Magical' | 'Phys+Magic';
  movespd: number;
  dmgMagMin?: number;
  dmgMagMax?: number;
  comboMult: number[];
  attacks: AttackPhase[];
}

export interface DamageResult {
  phys: number;
  mag: number;
  total: number;
}

export interface SwingResult {
  swingNum: number;
  label: string;
  windup: number;
  hit: number;
  recover: number | null;
  altRecover: number | null;
  finish: number | null;
  cycleTime: number;
  cumulativeTime: number;
  dmg: DamageResult;
  cumulativeDmg: number;
  hpAfter: number;
  hpPct: number;
  isKill: boolean;
  comboMult: number;
}

export interface CalcMeta {
  killSwing: number | null;
  killTime: number | null;
  w: Weapon;
  rarIdx: number;
  basePhys: number;
  baseMag: number;
  targetHP: number;
  currentHP: number;
  maxSwings: number;
}

export interface AttackerState {
  weapon: string;
  rarity: number;
  baseWeaponDmg: string;
  addPhysDmg: number;
  addMagDmg: number;
  physPct: number;
  magPct: number;
  actionSpeed: number;
  hitMult: number;
  customMult: number;
  comboMults: string;
  perkBonus: number;
}

export interface TargetState {
  targetHP: number;
  targetCurrentHP: number;
  targetPDR: number;
  targetMDR: number;
  targetAR: number;
  targetFlatReduce: number;
  targetBlock: number;
  maxSwings: number;
  comboLoop: boolean;
}

export interface Buff {
  id: string;
  name: string;
  type: 'phys_dmg' | 'mag_dmg' | 'action_speed' | 'pdr' | 'mdr' | 'flat_reduce' | 'block' | 'hp_regen' | 'dot';
  value: number;
  duration: number;
  isPercent: boolean;
  icon: string;
}

export interface Spell {
  id: string;
  name: string;
  school: 'Arcane' | 'Divine' | 'Nature' | 'Shadow';
  manaCost: number;
  castTime: number;
  cooldown: number;
  dmgType: 'Physical' | 'Magical' | 'Phys+Magic' | 'Buff' | 'Heal';
  baseDmg: number;
  scalingStat: 'Will' | 'Knowledge' | 'Strength' | 'Agility';
  scalingPct: number;
  description: string;
  icon: string;
}

export interface EnemyType {
  id: string;
  name: string;
  category: 'Undead' | 'Demon' | 'Beast' | 'Humanoid' | 'Elemental' | 'Construct';
  baseHP: number;
  basePDR: number;
  baseMDR: number;
  weaknesses: string[];
  resistances: string[];
  icon: string;
}
