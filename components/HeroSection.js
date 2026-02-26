function HeroSection() {
  const token = (typeof getToken === "function") ? getToken() : "";
  const primaryHref = token ? "jobs.html" : "login.html";

  return (
    <section className="mx-auto max-w-5xl px-4 pt-10 pb-6">
      <div className="rounded-3xl border border-white/10 bg-surface shadow-soft overflow-hidden">
        <div className="p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-textMuted">
            <span className="i-lucide-dog" aria-hidden="true" />
            <span>Find a trusted walker · Fast booking</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Dog walking, made simple.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-textMuted max-w-2xl">
            Post a walk in minutes, get matched with walkers nearby, and keep everything in one place: bids, chat, and job status.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 font-medium text-black hover:opacity-95"
            >
              {token ? "Go to jobs" : "Sign in"}
            </a>
            <a
              href="chat.html"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/20 px-5 py-2.5 font-medium text-textMain hover:bg-black/30"
            >
              Open chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
