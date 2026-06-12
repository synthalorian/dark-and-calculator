import Header from './components/Header';
import AttackerPanel from './components/AttackerPanel';
import TargetPanel from './components/TargetPanel';
import ResultsPanel from './components/ResultsPanel';
import BuffsPanel from './components/BuffsPanel';
import { useCalculator } from './hooks/useCalculator';

function App() {
  const {
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
  } = useCalculator();

  return (
    <div className="min-h-screen scanline">
      <div className="max-w-[1100px] mx-auto px-4 pb-16">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <AttackerPanel attacker={attacker} onUpdate={updateAttacker} />
          <TargetPanel
            target={target}
            selectedEnemy={selectedEnemy}
            onUpdate={updateTarget}
            onApplyEnemy={applyEnemy}
          />
        </div>

        <div className="mt-4">
          <BuffsPanel
            activeBuffs={activeBuffs}
            activeSpells={activeSpells}
            onToggleBuff={toggleBuff}
            onToggleSpell={toggleSpell}
          />
        </div>

        <div className="mt-4">
          <ResultsPanel results={results} />
        </div>

        <div className="mt-4 p-4 bg-bg-input/50 border border-border-dim rounded-lg text-xs text-text-dim leading-relaxed">
          <strong className="text-text-secondary">Formula:</strong>{' '}
          Final damage = ((Base Weapon Dmg × Combo%) + Phys Bonus) × (1 + Phys%/100) × HitMult × (1 − PDR/100) × (1 − Block/100) − FlatReduction.{' '}
          Magic damage uses MDR instead of PDR and is added separately.{' '}
          Timing phases scale as <code className="text-neon-cyan">base / (1 + ActionSpeed/100)</code>.{' '}
          Combo % per hit defaults to the weapon data sequence; override with the comma-separated field.{' '}
          This calculator uses approximate damage values and timing data from the wiki (Patch 6.11).{' '}
          Always verify against in-game results.{' '}
          <strong className="text-text-secondary">Hitstop is not included in cycle time</strong> as it only triggers on a valid hit.
        </div>
      </div>
    </div>
  );
}

export default App;
