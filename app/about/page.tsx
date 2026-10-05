import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { values, differentiators, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ECOMBYRD LLC — founded by Marjorie Byrd. A founder-led growth partner scaling eCommerce brands with AI-powered, profit-first systems.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">About Us</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-6xl">
              Operators first. <span className="text-volt">Agency second.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {site.legalName} is a new, founder-led growth partner for eCommerce
              brands, founded in Tyrone, Georgia in 2026. Small by design — so the
              person who audits your account is the one who runs it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-line bg-card p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-14">
            <div className="flex flex-col items-start gap-5">
              <div
                className="glass flex h-40 w-40 items-center justify-center rounded-2xl sm:h-52 sm:w-52"
                role="img"
                aria-label={`${site.founder}, Founder & CEO of ${site.legalName}`}
              >
                <span className="font-display text-5xl font-bold tracking-tight text-volt sm:text-6xl">
                  MB
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-cream">
                  {site.founder}
                </h2>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-volt">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Marjorie Byrd founded {site.legalName} in 2026 on a simple frustration:
                agencies that report numbers no one can find in the P&amp;L. Ecom Byrd is
                built to be the opposite — margin first, written reporting, and no
                long-term contracts.
              </p>
              <p>
                We&apos;re new, and we say so. Instead of a wall of borrowed logos, we
                offer a free audit with written findings, month-to-month terms, and the
                founder personally on every account. Our first case studies will be
                written with our founding partner brands — with their permission and
                their real numbers.
              </p>
              <p>
                That operator mindset is paired with a proprietary AI layer that
                watches every client account around the clock. The philosophy hasn&apos;t
                changed: <span className="text-cream">profit is the only metric that
                can&apos;t be faked.</span>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Differentiators */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
              Why Brands Choose Us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Five things you won&apos;t get anywhere else.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 90}>
                <div className="card-hover h-full rounded-2xl border border-line bg-card p-7">
                  <span className="font-mono text-xs text-volt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-cream">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
              Operating Principles
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Six things we do not compromise on.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 90}>
                <div className="card-hover h-full rounded-2xl border border-line bg-card p-7">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-volt/25 bg-volt/[0.07] font-mono text-xs text-volt">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-cream">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-line">
        <CTASection />
      </div>
    </>
  );
}
