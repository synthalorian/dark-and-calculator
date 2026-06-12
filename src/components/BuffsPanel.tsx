import { BUFFS, SPELLS } from '../data/spells';
import type { Buff, Spell } from '../types';

interface Props {
  activeBuffs: Buff[];
  activeSpells: Spell[];
  onToggleBuff: (buff: Buff) => void;
  onToggleSpell: (spell: Spell) => void;
}

export default function BuffsPanel({ activeBuffs, activeSpells, onToggleBuff, onToggleSpell }: Props) {
  return (
    <div className="panel-glow rounded-lg p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
        <span className="font-display text-xs tracking-[0.2em] text-neon-amber">SPELLS & BUFFS</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
      </div>

      <div className="mb-4">
        <label className="block text-xs text-text-secondary mb-2 tracking-wider">ACTIVE SPELLS</label>
        <div className="grid grid-cols-2 gap-2">
          {SPELLS.map(spell => {
            const isActive = activeSpells.some(s => s.id === spell.id);
            return (
              <button
                key={spell.id}
                onClick={() => onToggleSpell(spell)}
                title={spell.description}
                className={`text-left px-3 py-2 rounded border text-xs transition-all ${
                  isActive
                    ? 'bg-neon-purple/20 border-neon-purple/60 text-text-bright shadow-[0_0_10px_#b026ff33]'
                    : 'bg-bg-input border-border-dim text-text-secondary hover:border-neon-purple/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{spell.icon}</span>
                  <div>
                    <div className="font-semibold">{spell.name}</div>
                    <div className="text-text-dim text-[0.7rem]">{spell.school} · {spell.manaCost} MP</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="h-px bg-border-dim my-4" />

      <div>
        <label className="block text-xs text-text-secondary mb-2 tracking-wider">STATUS EFFECTS</label>
        <div className="flex flex-wrap gap-2">
          {BUFFS.map(buff => {
            const isActive = activeBuffs.some(b => b.id === buff.id);
            return (
              <button
                key={buff.id}
                onClick={() => onToggleBuff(buff)}
                title={`${buff.name}: ${buff.value}${buff.isPercent ? '%' : ''} ${buff.type} for ${buff.duration}s`}
                className={`px-3 py-1.5 rounded border text-xs transition-all ${
                  isActive
                    ? 'bg-neon-amber/20 border-neon-amber/60 text-text-bright shadow-[0_0_10px_#ff9f1c33]'
                    : 'bg-bg-input border-border-dim text-text-secondary hover:border-neon-amber/40'
                }`}
              >
                <span className="mr-1">{buff.icon}</span>
                {buff.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
