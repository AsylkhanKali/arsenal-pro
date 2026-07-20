import {
  type Locale,
  locales,
  defaultLocale,
  getTranslations,
} from "../i18n";
import { company } from "../company";
import Reveal from "../../components/reveal";
import {
  IconFactory,
  IconRifle,
  IconTank,
  IconHelmet,
  IconPaw,
  IconScope,
  IconWrench,
  IconFlask,
  IconLayers,
  IconAmmo,
  IconShieldCheck,
  IconBadge,
  IconLock,
  IconTruck,
  IconRefresh,
  IconUsers,
  IconPhone,
  IconMail,
  IconPin,
  IconUser,
  IconArrow,
  IconChevronDown,
} from "../../components/icons";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const capIcons = [
  IconFactory,
  IconRifle,
  IconTank,
  IconHelmet,
  IconPaw,
  IconScope,
  IconWrench,
  IconFlask,
  IconLayers,
];

const categoryMeta = [
  { img: "/images/cat-arms.jpg", Icon: IconRifle },
  { img: "/images/cat-ammo.jpg", Icon: IconAmmo },
  { img: "/images/cat-armor.jpg", Icon: IconTank },
  { img: "/images/cat-gear.jpg", Icon: IconHelmet },
  { img: "/images/cat-k9.jpg", Icon: IconPaw },
  { img: "/images/cat-optics.jpg", Icon: IconScope },
];

const whyIcons = [
  IconShieldCheck,
  IconBadge,
  IconLock,
  IconTruck,
  IconRefresh,
  IconUsers,
];

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales as string[]).includes(lang)
    ? (lang as Locale)
    : defaultLocale;
  const t = getTranslations(locale);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.jpg"
            alt=""
            className="h-full w-full object-cover object-center photo-tone"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-field-950/75 via-field-950/55 to-field-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-field-950/92 via-field-950/45 to-transparent" />
          <div className="hairline-grid absolute inset-0 opacity-30" />
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-6 md:pb-32 md:pt-28">
          <Reveal>
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-title mt-6 max-w-4xl text-[2.6rem] leading-[0.95] sm:text-6xl md:text-7xl">
              {t.hero.title1}{" "}
              <span className="text-signal-bright">{t.hero.title2}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {t.hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contacts"
                className="group inline-flex items-center justify-center gap-2 rounded bg-signal px-6 py-3.5 font-display text-sm uppercase tracking-wider text-[#140f08] transition-colors hover:bg-signal-bright"
              >
                {t.hero.ctaPrimary}
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 rounded border border-sand/40 px-6 py-3.5 font-display text-sm uppercase tracking-wider text-sand transition-colors hover:border-sand hover:text-paper"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none flex items-center justify-center pb-8">
          <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-faint">
            {t.hero.scroll}
            <IconChevronDown className="h-4 w-4 animate-bounce" />
          </span>
        </div>
      </section>

      {/* ── Trust band ───────────────────────────────────────── */}
      <section className="border-y border-hairline bg-field-900/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t.trust.eyebrow}</span>
            <h2 className="display-title mt-4 text-3xl sm:text-4xl">
              {t.trust.title}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="bg-field-900 p-6"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-signal/40 text-signal-bright">
                  <IconShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-display text-lg uppercase tracking-wide text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.trust.stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 70}
                className="panel flex items-center gap-4 rounded-lg p-5"
              >
                <span className="font-display text-4xl font-bold text-sand">
                  {s.value}
                </span>
                <span className="text-sm leading-tight text-muted">
                  {s.label}
                </span>
              </Reveal>
            ))}
          </div>
          {/* Owner: the stat values above are safe placeholders. Replace them
              (e.g. years on the market, contracts fulfilled, agencies served)
              with real, verified figures when available — in src/app/i18n.ts. */}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 className="display-title mt-4 text-4xl sm:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {t.about.p1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {t.about.p2}
            </p>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="corner-frame photo-tone-wrap aspect-[4/3] w-full rounded-lg border border-hairline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about.jpg"
                alt=""
                className="h-full w-full object-cover photo-tone"
              />
            </div>
            <dl className="panel mt-4 grid grid-cols-1 gap-4 rounded-lg p-6 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-faint">
                  {t.about.binLabel}
                </dt>
                <dd className="mt-1 font-display text-lg text-paper">
                  {company.bin}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-faint">
                  {t.about.directorLabel}
                </dt>
                <dd className="mt-1 text-sm text-paper">
                  {t.about.directorValue}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[11px] uppercase tracking-widest text-faint">
                  {t.about.addressLabel}
                </dt>
                <dd className="mt-1 text-sm text-paper">
                  {t.about.addressValue}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section
        id="capabilities"
        className="scroll-mt-16 border-t border-hairline bg-field-900/40"
      >
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t.capabilities.eyebrow}</span>
            <h2 className="display-title mt-4 text-4xl sm:text-5xl">
              {t.capabilities.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {t.capabilities.subtitle}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.capabilities.cards.map((card, i) => {
              const Icon = capIcons[i] ?? IconLayers;
              return (
                <Reveal
                  key={card.title}
                  delay={(i % 3) * 80}
                  className="panel group relative rounded-lg p-6 transition-colors hover:border-sand/40"
                >
                  <span className="absolute right-5 top-5 font-display text-sm text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-hairline bg-field-850 text-sand transition-colors group-hover:text-signal-bright">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg uppercase tracking-wide text-paper">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {card.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Categories showcase ──────────────────────────────── */}
      <section id="categories" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t.categories.eyebrow}</span>
            <h2 className="display-title mt-4 text-4xl sm:text-5xl">
              {t.categories.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {t.categories.subtitle}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.categories.items.map((item, i) => {
              const meta = categoryMeta[i];
              const Icon = meta?.Icon ?? IconLayers;
              return (
                <Reveal
                  key={item.title}
                  delay={(i % 3) * 80}
                  className="group corner-frame overflow-hidden rounded-lg border border-hairline"
                >
                  <div className="photo-tone-wrap relative aspect-[5/4] w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={meta?.img}
                      alt={item.title}
                      className="h-full w-full object-cover photo-tone transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-sand/30 bg-field-950/70 px-3 py-1 text-[11px] uppercase tracking-widest text-sand backdrop-blur-sm">
                      {t.categories.tag}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-sand/30 bg-field-950/70 text-signal-bright backdrop-blur-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-display text-lg uppercase leading-tight tracking-wide text-paper">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-faint">
              {t.categories.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────── */}
      <section
        id="why"
        className="scroll-mt-16 border-t border-hairline bg-field-900/40"
      >
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t.whyus.eyebrow}</span>
            <h2 className="display-title mt-4 text-4xl sm:text-5xl">
              {t.whyus.title}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.whyus.items.map((item, i) => {
              const Icon = whyIcons[i] ?? IconShieldCheck;
              return (
                <Reveal
                  key={item.title}
                  delay={(i % 3) * 80}
                  className="flex gap-4 rounded-lg border border-hairline bg-field-950/40 p-6"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-signal/10 text-signal-bright">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base uppercase tracking-wide text-paper">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Audience ─────────────────────────────────────────── */}
      <section id="audience" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t.audience.eyebrow}</span>
            <h2 className="display-title mt-4 text-4xl sm:text-5xl">
              {t.audience.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {t.audience.subtitle}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.audience.items.map((item, i) => (
              <Reveal
                key={item}
                delay={(i % 3) * 70}
                className="group flex items-center gap-4 rounded-lg border border-hairline bg-field-900/50 p-5 transition-colors hover:border-sand/40"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-sand/30 text-signal-bright">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-bright" />
                </span>
                <span className="font-display text-lg uppercase tracking-wide text-paper">
                  {item}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacts ─────────────────────────────────────────── */}
      <section
        id="contacts"
        className="scroll-mt-16 border-t border-hairline bg-field-900/40"
      >
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t.contacts.eyebrow}</span>
            <h2 className="display-title mt-4 text-4xl sm:text-5xl">
              {t.contacts.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {t.contacts.subtitle}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-5">
              <ContactRow
                icon={<IconPhone className="h-5 w-5" />}
                label={t.contacts.phoneLabel}
                value={company.phoneDisplay}
                href={company.phoneHref}
              />
              <ContactRow
                icon={<IconMail className="h-5 w-5" />}
                label={t.contacts.emailLabel}
                value={company.email}
                href={company.emailHref}
              />
              <ContactRow
                icon={<IconPin className="h-5 w-5" />}
                label={t.contacts.addressLabel}
                value={t.about.addressValue}
              />
              <ContactRow
                icon={<IconUser className="h-5 w-5" />}
                label={t.contacts.directorLabel}
                value={t.about.directorValue}
              />
              <a
                href={company.emailHref}
                className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded bg-signal px-6 py-3.5 font-display text-sm uppercase tracking-wider text-[#140f08] transition-colors hover:bg-signal-bright"
              >
                {t.contacts.cta}
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal delay={120} className="corner-frame overflow-hidden rounded-lg border border-hairline">
              <iframe
                src={company.mapEmbed}
                title={t.contacts.mapTitle}
                className="h-full min-h-[22rem] w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-hairline bg-field-950/40 p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-field-850 text-sand">
        {icon}
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-faint">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-1 block font-display text-lg text-paper transition-colors hover:text-signal-bright"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-base text-paper">{value}</p>
        )}
      </div>
    </div>
  );
}
