import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import CTASection from "@/components/CTASection";
import LeadMagnet from "@/components/LeadMagnet";
import HeroShowcase from "@/components/HeroShowcase";
import GhostType from "@/components/GhostType";
import {
  heroStats,
  foundingPerks,
  niches,
  painPoints,
  services,
  aiFeatures,
  processSteps,
  comparison,
  marginMath,
} from "@/lib/data";

function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {sub && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-40">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/60 px-4 py-2 backdrop-blur">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-volt" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted sm:text-xs">
                AI-Powered Growth · Human-Led Strategy
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-7 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-[3.6rem] lg:leading-[1.04] xl:text-[4rem]">
              Growth engineered by AI.{" "}
              <span className="text-volt">Proven in profit.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Ecom Byrd pairs senior media buyers with proprietary AI systems to
              scale 6, 7 &amp; 8-figure eCommerce brands past their ceiling — on
              contribution margin, not vanity ROAS. You run the business. We run
              the machine that grows it.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-volt px-8 py-4 text-center text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_36px_rgba(201,247,58,0.45)]"
              >
                Book a Free Growth Audit
              </Link>
              <Link
                href="/#process"
                className="rounded-full border border-line px-8 py-4 text-center text-sm font-semibold text-cream transition-colors duration-300 hover:border-volt/50 hover:text-volt"
              >
                How We Work →
              </Link>
            </div>
              </Reveal>
            </div>

            <Reveal delay={250} className="lg:justify-self-end lg:w-full">
              <HeroShowcase />
            </Reveal>
          </div>

          {/* Stats band */}
          <Reveal delay={400}>
            <div className="glass mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:mt-20 lg:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-white/[0.03] p-6 sm:p-8">
                  <div className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= NICHES MARQUEE ================= */}
      <section className="border-y border-line bg-surface/50 py-10">
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted/70">
          Verticals we scale
        </p>
        <Marquee items={niches} />
      </section>

      {/* ================= PAIN POINTS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="The Plateau"
          title="You're running a real business on numbers you can't trust."
          sub="If any of these sound familiar, the problem isn't your product — it's the system reporting on it."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, i) => (
            <Reveal key={point.title} delay={(i % 3) * 90}>
              <div className="card-hover h-full rounded-2xl border border-line bg-card p-7">
                <span className="font-mono text-xs text-volt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-cream">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What We Do"
              title="Six disciplines. One profit engine."
              sub="Every channel rebuilt around the number that actually matters: contribution margin."
            />
            <Reveal delay={150}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-volt transition-opacity hover:opacity-70"
              >
                All services →
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/services#${service.slug}`}
                  className="card-hover sheen group flex h-full flex-col rounded-2xl border border-line bg-card p-7"
                >
                  <span className="w-fit rounded-full border border-volt/25 bg-volt/[0.07] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-volt">
                    {service.tag}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-6 font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-volt">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI EDGE ================= */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(120,90,255,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="The AI Edge"
                title="Human strategy. Machine precision."
                sub="Most agencies check your account twice a week. Our systems never stop watching it — and a senior strategist acts on what they find."
              />
              <Reveal delay={200}>
                <div className="mt-9 rounded-2xl border border-line bg-card p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    The rule we never break
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cream">
                    AI surfaces the signal. Humans make the call. Your account is
                    never on autopilot — it&apos;s on{" "}
                    <span className="text-volt">instruments</span>.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {aiFeatures.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 90}>
                  <div className="card-hover h-full rounded-2xl border border-line bg-card p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-volt/25 bg-volt/[0.07] font-mono text-sm text-volt">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-cream">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{feature.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDING PARTNERS ================= */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionHeading
            eyebrow="Founding Partners"
            title="New agency. No borrowed results."
            sub="Ecom Byrd launched in 2026. We're taking on a small group of founding partner brands — and earning our case studies with you, not inventing them."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {foundingPerks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 100}>
                <div className="card-hover h-full rounded-2xl border border-line bg-card p-7">
                  <span className="font-mono text-xs text-volt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-cream">
                    {perk.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{perk.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionHeading
            eyebrow="How We Work"
            title="Diagnose. Blueprint. Build. Compound."
            center
            sub="No mystery, no black box. A fixed sequence that puts measurement before money — every single time."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="card-hover relative h-full rounded-2xl border border-line bg-card p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-bold text-line">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-volt/25 bg-volt/[0.07] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-volt">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-10 text-center font-mono text-xs uppercase tracking-widest text-muted/70">
              We work best with brands doing $20k+ per month in revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= MARGIN MATH ================= */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="bg-grid-flat pointer-events-none absolute inset-0" />
        <GhostType lines={["Profit", "Margin"]} />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
                {marginMath.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {marginMath.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {marginMath.body}
              </p>
              <div className="mt-9 flex items-end gap-4">
                <span className="font-display text-6xl font-bold leading-none tracking-tight text-volt sm:text-7xl">
                  <Counter value={Number(marginMath.spotlight.value)} decimals={1} />
                  {marginMath.spotlight.suffix}
                </span>
                <span className="max-w-[11rem] pb-2 text-sm leading-snug text-muted">
                  {marginMath.spotlight.label}
                </span>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="glass-deep rounded-2xl p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
                  Where the money actually goes
                </p>
                <dl className="mt-6 space-y-0">
                  {marginMath.ladder.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
                    >
                      <dt className="text-sm text-muted">{row.label}</dt>
                      <dd className="font-mono text-sm tabular-nums text-cream/90">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between gap-4 pt-5">
                    <dt className="font-display text-base font-semibold text-cream">
                      {marginMath.result.label}
                    </dt>
                    <dd className="font-mono text-xl font-semibold tabular-nums text-volt">
                      {marginMath.result.value}
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-xs leading-relaxed text-muted/70">
                  {marginMath.note}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionHeading
            eyebrow="The Difference"
            title="Not every agency is built the same."
            center
          />
          <Reveal delay={150}>
            <div className="mt-14 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-card">
                    <th className="p-5 font-mono text-[11px] font-medium uppercase tracking-widest text-muted">
                      &nbsp;
                    </th>
                    <th className="p-5 font-mono text-[11px] font-medium uppercase tracking-widest text-muted">
                      Typical Agency
                    </th>
                    <th className="bg-volt/[0.06] p-5 font-mono text-[11px] font-medium uppercase tracking-widest text-volt">
                      Ecom Byrd
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row) => (
                    <tr key={row.label} className="border-b border-line last:border-0">
                      <td className="p-5 font-medium text-cream">{row.label}</td>
                      <td className="p-5 text-muted">{row.typical}</td>
                      <td className="bg-volt/[0.04] p-5 font-medium text-cream">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= LEAD MAGNET ================= */}
      <LeadMagnet />

      {/* ================= CTA ================= */}
      <div className="border-t border-line">
        <CTASection />
      </div>
    </>
  );
}
