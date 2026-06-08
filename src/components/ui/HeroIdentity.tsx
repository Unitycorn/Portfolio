function HeroIdentity() {
  return (
    <div>
      <div className="min-w-0">
        <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white/75 px-4 py-2 shadow-insetGlow backdrop-blur">
          <span className="h-2.5 w-2.5 rounded-full bg-moss" />
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-moss">
            Engineering Snapshot
          </span>
        </div>
        <p className="mt-4 text-sm uppercase tracking-[0.28em] text-ink/55">
          Open Source Contributor
          <br />
          Compass Repository Analyzer
        </p>
        <p className="mt-6">
          <b>Focus Areas:</b>
        </p>
        <ul>
          <li>API Design</li>
          <li>Testing</li>
          <li>Fullstack Applications</li>
          <li>CI/CD</li>
        </ul>
        <p className="mt-6">
          <b>Current Learning</b>
        </p>
        <ul>
          <li>Angular</li>
          <li>Clean Architecture</li>
          <li>TDD</li>
        </ul>
      </div>
    </div>
  );
}

export default HeroIdentity;
