import { spells, damageTypeColors } from '../data/spells';
import type { Spell } from '../data/spells';

interface Props {
  activeSpells: Spell[];
  onToggleSpell: (spell: Spell) => void;
}

export default function BuffsPanel({ activeSpells, onToggleSpell }: Props) {
  const spellsByClass = spells.reduce((acc, spell) => {
    if (!acc[spell.class]) acc[spell.class] = [];
    acc[spell.class].push(spell);
    return acc;
  }, {} as Record<string, Spell[]>);

  return (
    <div className="panel-glow rounded-lg p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
        <span className="font-display text-xs tracking-[0.2em] text-neon-amber">SPELLS</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
      </div>

      {Object.entries(spellsByClass).map(([className, classSpells]) => (
        <div key={className} className="mb-4">
          <label className="block text-xs text-text-secondary mb-2 tracking-wider">{className.toUpperCase()}</label>
          <div className="grid grid-cols-2 gap-2">
            {classSpells.map(spell => {
              const isActive = activeSpells.some(s => s.id === spell.id);
              const color = spell.damageType ? damageTypeColors[spell.damageType] : '#888';
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
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
                    />
                    <div className="min-w-0">
                      <div className="font-semibold truncate">{spell.name}</div>
                      <div className="text-text-dim text-[0.7rem]">
                        {spell.damageType || 'Utility'}
                        {spell.baseDamage ? ` · ${spell.baseDamage} dmg` : ''}
                        {spell.castTime ? ` · ${spell.castTime}` : ''}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
