import { WEAPONS, RARITIES } from '../data/weapons';
import type { AttackerState } from '../types';

interface Props {
  attacker: AttackerState;
  onUpdate: (updates: Partial<AttackerState>) => void;
}

const RARITY_COLORS: Record<string, string> = {
  Poor: 'bg-gray-600 text-gray-300',
  Common: 'bg-gray-500 text-gray-200',
  Uncommon: 'bg-green-800 text-green-300',
  Rare: 'bg-blue-800 text-blue-300',
  Epic: 'bg-purple-800 text-purple-300',
  Legendary: 'bg-amber-800 text-amber-300',
  Unique: 'bg-red-900 text-red-300',
};

export default function AttackerPanel({ attacker, onUpdate }: Props) {
  const cats = [...new Set(WEAPONS.map(w => w.cat))];

  const handleWeaponChange = (name: string) => {
    onUpdate({ weapon: name });
    const w = WEAPONS.find(x => x.name === name);
    if (w) {
      onUpdate({ comboMults: w.comboMult.join(',') });
    }
  };

  return (
    <div className="panel-glow rounded-lg p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
        <span className="font-display text-xs tracking-[0.2em] text-neon-purple">ATTACKER</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
      </div>

      <div className="mb-4">
        <label className="block text-xs text-text-secondary mb-1 tracking-wider">WEAPON</label>
        <select
          value={attacker.weapon}
          onChange={e => handleWeaponChange(e.target.value)}
          className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
        >
          <option value="">— select weapon —</option>
          {cats.map(cat => (
            <optgroup key={cat} label={cat + 's'}>
              {WEAPONS.filter(w => w.cat === cat).map(w => (
                <option key={w.name} value={w.name}>{w.name} ({w.slot})</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-xs text-text-secondary mb-2 tracking-wider">RARITY</label>
        <div className="flex flex-wrap gap-1.5">
          {RARITIES.map((r, i) => (
            <button
              key={r}
              onClick={() => onUpdate({ rarity: i })}
              className={`px-2.5 py-1 rounded text-xs font-body transition-all border border-border-dim ${
                attacker.rarity === i
                  ? `${RARITY_COLORS[r]} border-transparent shadow-lg`
                  : 'bg-bg-input text-text-dim hover:border-neon-purple/50 hover:text-text-secondary'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs text-text-secondary mb-1 tracking-wider">
          BASE WEAPON DAMAGE
        </label>
        <input
          type="number"
          value={attacker.baseWeaponDmg}
          onChange={e => onUpdate({ baseWeaponDmg: e.target.value })}
          placeholder="Auto from rarity"
          min={0}
          step={1}
          className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
        />
      </div>

      <div className="h-px bg-border-dim my-4" />

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Flat bonus added to every hit">
            + PHYS DMG
          </label>
          <input
            type="number"
            value={attacker.addPhysDmg}
            onChange={e => onUpdate({ addPhysDmg: parseFloat(e.target.value) || 0 })}
            min={0}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Flat bonus added to every hit">
            + MAG DMG
          </label>
          <input
            type="number"
            value={attacker.addMagDmg}
            onChange={e => onUpdate({ addMagDmg: parseFloat(e.target.value) || 0 })}
            min={0}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="% bonus to physical damage (e.g. from Strength)">
            PHYS DMG %
          </label>
          <input
            type="number"
            value={attacker.physPct}
            onChange={e => onUpdate({ physPct: parseFloat(e.target.value) || 0 })}
            min={-100}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="% bonus to magical damage (e.g. from Will/Knowledge)">
            MAGIC POWER %
          </label>
          <input
            type="number"
            value={attacker.magPct}
            onChange={e => onUpdate({ magPct: parseFloat(e.target.value) || 0 })}
            min={-100}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Action Speed % (positive = faster). Scales all timing phases.">
            ACTION SPEED %
          </label>
          <input
            type="number"
            value={attacker.actionSpeed}
            onChange={e => onUpdate({ actionSpeed: parseFloat(e.target.value) || 0 })}
            min={-100}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Headshot / limb / special hit — combo multiplier applied to final damage">
            HIT MULTIPLIER
          </label>
          <select
            value={attacker.hitMult}
            onChange={e => onUpdate({ hitMult: parseFloat(e.target.value) })}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
          >
            <option value={1.0}>Body — ×1.00</option>
            <option value={1.5}>Headshot — ×1.50</option>
            <option value={0.75}>Limb — ×0.75</option>
            <option value={0.9}>Impact Mid — ×0.90</option>
            <option value={0.7}>Impact Haft — ×0.70</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Combo multiplier for each attack (e.g. 100%/105%/110%). Read from weapon data.">
            COMBO % (A1,A2,A3…)
          </label>
          <input
            type="text"
            value={attacker.comboMults}
            onChange={e => onUpdate({ comboMults: e.target.value })}
            placeholder="e.g. 100,105,110"
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Weapon-specific damage bonus perks (e.g. Smash, True Strike)">
            PERK BONUS %
          </label>
          <input
            type="number"
            value={attacker.perkBonus}
            onChange={e => onUpdate({ perkBonus: parseFloat(e.target.value) || 0 })}
            min={0}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-purple focus:shadow-[0_0_10px_#b026ff33] outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
}
