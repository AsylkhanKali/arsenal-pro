import { type Locale, getTranslations } from "../app/i18n";
import LanguageSwitcher from "./language-switcher";
import MobileNav from "./mobile-nav";
import { IconArrow } from "./icons";

export default function SiteHeader({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const brandName =
    locale === "ru" || locale === "kz"
      ? "Арсенал про Групп"
      : "Arsenal Pro Group";

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#categories", label: t.nav.categories },
    { href: "#contacts", label: t.nav.contacts },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-field-950/72 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
        <a href={`/${locale}`} className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-nobg.png"
            alt={brandName}
            className="h-9 w-auto sm:h-10"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold uppercase tracking-wide text-paper">
              {brandName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-sand-dim">
              {t.brand.suffix} · Astana
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher locale={locale} />
          <a
            href="#contacts"
            className="group inline-flex items-center gap-2 rounded bg-signal px-4 py-2 text-sm font-medium text-[#140f08] transition-colors hover:bg-signal-bright"
          >
            {t.nav.cta}
            <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <MobileNav
          links={links}
          ctaLabel={t.nav.cta}
          switcher={<LanguageSwitcher locale={locale} />}
        />
      </div>
    </header>
  );
}
