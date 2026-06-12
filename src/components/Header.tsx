export default function Header() {
  return (
    <header className="text-center py-8 relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />
      <div className="font-display text-neon-purple/60 text-sm tracking-[0.4em] mb-2">
        ⚔ ⚔ ⚔
      </div>
      <h1 className="font-display text-4xl font-bold text-text-bright tracking-wider neon-text-purple">
        COMBAT CALCULATOR
      </h1>
      <div className="text-text-secondary text-base mt-2 italic font-body">
        Dark and Darker — weapon damage & time-to-kill reference
      </div>
      <div className="text-neon-cyan/60 text-xs mt-1 tracking-[0.2em] font-display">
        SYNTHWAVE '84 EDITION
      </div>
    </header>
  );
}
