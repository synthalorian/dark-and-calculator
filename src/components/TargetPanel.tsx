import { ENEMY_TYPES } from '../data/spells';
import type { TargetState } from '../types';

interface Props {
  target: TargetState;
  selectedEnemy: string;
  onUpdate: (updates: Partial<TargetState>) => void;
  onApplyEnemy: (enemyId: string) => void;
}

export default function TargetPanel({ target, selectedEnemy, onUpdate, onApplyEnemy }: Props) {
  const handleARChange = (ar: number) => {
    onUpdate({ targetAR: ar });
    const est = ar > 0 ? (ar / (ar + 100) * 100) : 0;
    onUpdate({ targetPDR: parseFloat(est.toFixed(1)) });
  };

  return (
    <div className="panel-glow rounded-lg p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
        <span className="font-display text-xs tracking-[0.2em] text-neon-pink">TARGET</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
      </div>

      <div className="mb-4">
        <label className="block text-xs text-text-secondary mb-1 tracking-wider">ENEMY PRESET</label>
        <select
          value={selectedEnemy}
          onChange={e => onApplyEnemy(e.target.value)}
          className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
        >
          <option value="">— custom target —</option>
          {['Undead', 'Demon', 'Beast', 'Humanoid', 'Elemental', 'Construct'].map(cat => (
            <optgroup key={cat} label={cat}>
              {ENEMY_TYPES.filter(e => e.category === cat).map(e => (
                <option key={e.id} value={e.id}>{e.icon} {e.name}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Target's maximum HP">
            TARGET HP
          </label>
          <input
            type="number"
            value={target.targetHP}
            onChange={e => onUpdate({ targetHP: parseFloat(e.target.value) || 1 })}
            min={1}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Current HP if target is already damaged">
            CURRENT HP
          </label>
          <input
            type="number"
            value={target.targetCurrentHP}
            onChange={e => onUpdate({ targetCurrentHP: parseFloat(e.target.value) || 1 })}
            min={1}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Physical Damage Reduction % (from armor rating)">
            PDR % (ARMOR)
          </label>
          <input
            type="number"
            value={target.targetPDR}
            onChange={e => onUpdate({ targetPDR: parseFloat(e.target.value) || 0 })}
            min={0}
            max={100}
            step={0.1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Magical Damage Reduction %">
            MDR %
          </label>
          <input
            type="number"
            value={target.targetMDR}
            onChange={e => onUpdate({ targetMDR: parseFloat(e.target.value) || 0 })}
            min={0}
            max={100}
            step={0.1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Armor Rating value from gear">
            ARMOR RATING
          </label>
          <input
            type="number"
            value={target.targetAR}
            onChange={e => handleARChange(parseFloat(e.target.value) || 0)}
            min={0}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Estimated PDR from Armor Rating">
            AR → PDR EST.
          </label>
          <input
            type="number"
            value={target.targetAR > 0 ? (target.targetAR / (target.targetAR + 100) * 100).toFixed(1) : '0'}
            readOnly
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-dim outline-none"
          />
        </div>
      </div>

      <div className="h-px bg-border-dim my-4" />

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Flat damage reduction (some abilities/buffs)">
            FLAT DMG REDUCTION
          </label>
          <input
            type="number"
            value={target.targetFlatReduce}
            onChange={e => onUpdate({ targetFlatReduce: parseFloat(e.target.value) || 0 })}
            min={0}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Damage reduction from shield block or active defense">
            BLOCK / SHIELD %
          </label>
          <input
            type="number"
            value={target.targetBlock}
            onChange={e => onUpdate({ targetBlock: parseFloat(e.target.value) || 0 })}
            min={0}
            max={100}
            step={1}
            className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
          />
        </div>
      </div>

      <div className="h-px bg-border-dim my-4" />

      <div className="mb-4">
        <label className="block text-xs text-text-secondary mb-1 tracking-wider">
          SHOW UP TO N SWINGS
        </label>
        <input
          type="number"
          value={target.maxSwings}
          onChange={e => onUpdate({ maxSwings: parseFloat(e.target.value) || 10 })}
          min={2}
          max={40}
          step={1}
          className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
        />
      </div>

      <div className="mb-4">
        <label className="block text-xs text-text-secondary mb-1 tracking-wider" title="Whether to loop the attack combo or stop at the last attack">
          COMBO LOOPS?
        </label>
        <select
          value={target.comboLoop ? '1' : '0'}
          onChange={e => onUpdate({ comboLoop: e.target.value === '1' })}
          className="w-full bg-bg-input border border-border-dim rounded px-3 py-2 text-sm text-text-primary focus:border-neon-pink focus:shadow-[0_0_10px_#ff2a6d33] outline-none transition-all"
        >
          <option value="1">Yes — loop combo</option>
          <option value="0">No — hold last attack</option>
        </select>
      </div>
    </div>
  );
}
