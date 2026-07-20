import { type Locale, getTranslations } from "../app/i18n";
import { company } from "../app/company";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const brandName =
    locale === "ru" || locale === "kz"
      ? "Арсенал про Групп"
      : "Arsenal Pro Group";

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#categories", label: t.nav.categories },
    { href: "#contacts", label: t.nav.contacts },
  ];

  return (
    <footer className="border-t border-hairline bg-field-950">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-nobg.png" alt={brandName} className="h-9 w-auto" />
              <span className="font-display text-base font-semibold uppercase tracking-wide text-paper">
                {brandName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="eyebrow mb-1">{t.nav.about}</span>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow mb-1">{t.contacts.eyebrow}</span>
            <a
              href={company.phoneHref}
              className="text-sm text-muted transition-colors hover:text-paper"
            >
              {company.phoneDisplay}
            </a>
            <a
              href={company.emailHref}
              className="text-sm text-muted transition-colors hover:text-paper"
            >
              {company.email}
            </a>
            <p className="text-sm leading-relaxed text-muted">
              {t.about.addressValue}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <p>{t.footer.city}</p>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-faint/80">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
