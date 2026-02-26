function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-surface/40">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-textMuted">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-textMain">IGO-HUB</span>
          <span className="opacity-70">·</span>
          <span className="opacity-70">Dog walking marketplace</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-textMain" href="terms.html">Terms</a>
          <a className="hover:text-textMain" href="privacy.html">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
