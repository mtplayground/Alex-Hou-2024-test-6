export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_45%),linear-gradient(180deg,_#f8fafc_0%,_#e2e8f0_100%)] px-6 py-16 text-slate-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="w-fit rounded-full border border-slate-300 bg-white/70 px-3 py-1 text-sm font-medium uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur">
            Issue #1 Bootstrap
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                ZeroClaw Messages is ready for feature work.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                This Next.js 14 App Router project is configured with
                TypeScript, ESLint, and Tailwind CSS. The message flow,
                database integration, and self-hosting features will land in
                the next issues.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-slate-950 px-4 py-3 text-sm text-slate-100 shadow-lg">
              <p>Runtime target</p>
              <p className="mt-1 font-mono text-sky-300">0.0.0.0:8080</p>
            </div>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">App Router</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              The root layout and home page live under <code>app/</code> and
              are ready for server-rendered message pages.
            </p>
          </article>
          <article className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">TypeScript</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Strict typing and path aliases are enabled for application code
              and shared modules.
            </p>
          </article>
          <article className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Tailwind CSS</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Tailwind utilities are wired into the global stylesheet for fast
              iteration on future UI work.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
