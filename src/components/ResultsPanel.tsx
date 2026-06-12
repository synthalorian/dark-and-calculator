import type { SwingResult, CalcMeta } from '../types';

interface Props {
  results: { swings: SwingResult[]; meta: CalcMeta } | null;
}

function fmt(n: number | null, d = 3): string {
  return n != null ? n.toFixed(d) : '—';
}

export default function ResultsPanel({ results }: Props) {
  if (!results) {
    return (
      <div className="panel-glow rounded-lg p-5 col-span-full">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
          <span className="font-display text-xs tracking-[0.2em] text-neon-cyan">RESULTS</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
        </div>
        <div className="text-center py-12 text-text-dim italic">
          <div className="text-4xl mb-3 opacity-40">⚔</div>
          <div>Select a weapon and configure your stats to see calculations.</div>
        </div>
      </div>
    );
  }

  const { swings, meta } = results;
  const { killSwing, killTime, w, rarIdx, basePhys, baseMag, targetHP, currentHP } = meta;
  const singleDmg = swings[0]?.dmg?.total || 0;
  const dps = killTime ? currentHP / killTime : 0;

  return (
    <div className="panel-glow rounded-lg p-5 col-span-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
        <span className="font-display text-xs tracking-[0.2em] text-neon-cyan">RESULTS</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
      </div>

      {/* TTK Cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3 mb-5">
        <div className="bg-bg-input border border-neon-purple/40 rounded-md p-3 text-center shadow-[0_0_20px_#b026ff22]">
          <div className="text-[0.7rem] text-text-secondary tracking-wider mb-1">BASE WEAPON DMG</div>
          <div className="font-display text-xl text-neon-purple">
            {basePhys}{baseMag ? '+' + baseMag + 'M' : ''}
          </div>
          <div className="text-[0.75rem] text-text-dim">
            {['Poor','Common','Uncommon','Rare','Epic','Legendary','Unique'][rarIdx]} {w.cat}
          </div>
        </div>

        <div className="bg-bg-input border border-border-dim rounded-md p-3 text-center">
          <div className="text-[0.7rem] text-text-secondary tracking-wider mb-1">DMG / HIT (A1)</div>
          <div className="font-display text-xl text-neon-cyan">{singleDmg.toFixed(1)}</div>
          <div className="text-[0.75rem] text-text-dim">after reductions</div>
        </div>

        {killSwing ? (
          <>
            <div className="bg-bg-input border border-neon-pink/60 rounded-md p-3 text-center shadow-[0_0_20px_#ff2a6d22]">
              <div className="text-[0.7rem] text-text-secondary tracking-wider mb-1">HITS TO KILL</div>
              <div className="font-display text-xl text-neon-pink">{killSwing}</div>
              <div className="text-[0.75rem] text-text-dim">of {targetHP} HP</div>
            </div>
            <div className="bg-bg-input border border-neon-pink/60 rounded-md p-3 text-center shadow-[0_0_20px_#ff2a6d22]">
              <div className="text-[0.7rem] text-text-secondary tracking-wider mb-1">TTK</div>
              <div className="font-display text-xl text-neon-pink">{killTime?.toFixed(3)}s</div>
              <div className="text-[0.75rem] text-text-dim">≈{dps.toFixed(1)} DPS</div>
            </div>
          </>
        ) : (
          <div className="bg-bg-input border border-border-dim rounded-md p-3 text-center">
            <div className="text-[0.7rem] text-text-secondary tracking-wider mb-1">HITS TO KILL</div>
            <div className="font-display text-xl text-text-dim">—</div>
            <div className="text-[0.75rem] text-text-dim">not in range</div>
          </div>
        )}

        <div className="bg-bg-input border border-border-dim rounded-md p-3 text-center">
          <div className="text-[0.7rem] text-text-secondary tracking-wider mb-1">A1 WINDUP</div>
          <div className="font-display text-xl text-neon-amber">{swings[0]?.windup.toFixed(3)}s</div>
          <div className="text-[0.75rem] text-text-dim">scaled by AS</div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[0.65rem] tracking-[0.12em] text-neon-purple/60 border-b border-border-glow/50">
              <th className="text-left py-2 px-2 bg-bg-input/50">#</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">ATTACK</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">COMBO×</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">DMG/HIT</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">CUM. DMG</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">TARGET HP</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">WINDUP</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">HIT</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">↩ RECOVER</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">⇄ ALT RCVR</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">✓ FINISH</th>
              <th className="text-left py-2 px-2 bg-bg-input/50">ELAPSED</th>
            </tr>
          </thead>
          <tbody>
            {swings.map(s => {
              const barW = 100 - s.hpPct;
              return (
                <tr
                  key={s.swingNum}
                  className={`border-b border-border-dim/50 hover:bg-bg-input/30 transition-colors ${
                    s.isKill ? '!bg-neon-pink/10 border-l-2 border-l-neon-pink' : ''
                  }`}
                >
                  <td className="py-2 px-2">
                    <span className="font-display text-neon-purple text-xs">#{s.swingNum}</span>
                  </td>
                  <td className="py-2 px-2 text-xs text-text-secondary whitespace-nowrap">
                    {s.label}
                    {s.isKill && (
                      <span className="inline-block ml-1 px-1.5 py-0.5 rounded bg-neon-pink text-white font-display text-[0.6rem] tracking-wider">
                        KILL
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-2 font-mono text-xs text-text-secondary">
                    ×{(s.comboMult / 100).toFixed(2)}
                  </td>
                  <td className="py-2 px-2">
                    <span className="font-semibold text-text-bright">{s.dmg.total.toFixed(1)}</span>
                    {s.dmg.mag > 0.05 && (
                      <span className="text-xs text-neon-cyan ml-1">(+{s.dmg.mag.toFixed(1)}M)</span>
                    )}
                  </td>
                  <td className="py-2 px-2">
                    <span className="font-semibold text-neon-amber">{s.cumulativeDmg.toFixed(1)}</span>
                  </td>
                  <td className="py-2 px-2">
                    <span className={`text-xs ${s.hpAfter <= 0 ? 'text-neon-pink' : 'text-text-secondary'}`}>
                      {s.hpAfter.toFixed(0)} HP
                    </span>
                    <div className="h-1.5 rounded-full bg-border-dim mt-1 overflow-hidden min-w-[60px]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon-pink to-neon-amber transition-all"
                        style={{ width: `${barW}%` }}
                      />
                    </div>
                  </td>
                  <td className="py-2 px-2 font-mono text-xs text-text-secondary">{fmt(s.windup)}s</td>
                  <td className="py-2 px-2 font-mono text-xs text-text-secondary">{fmt(s.hit)}s</td>
                  <td className="py-2 px-2 font-mono text-xs text-text-secondary">{s.recover != null ? fmt(s.recover) + 's' : '—'}</td>
                  <td className="py-2 px-2 font-mono text-xs text-text-secondary">{s.altRecover != null ? fmt(s.altRecover) + 's' : '—'}</td>
                  <td className="py-2 px-2 font-mono text-xs text-text-secondary">{s.finish != null ? fmt(s.finish) + 's' : '—'}</td>
                  <td className="py-2 px-2 font-mono text-xs text-neon-cyan">{fmt(s.cumulativeTime)}s</td>
                </tr>
              );
            })}
            {!killSwing && (
              <tr>
                <td colSpan={12} className="py-4 px-2 text-text-dim italic text-center">
                  Target not killed within {meta.maxSwings} swings — increase swings or check your stats.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
