import { locales, localeNames, type Locale } from "../app/i18n";

/** Renders a link per locale, swapping only the /[lang] path segment. */
export default function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}`}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded px-2 py-1 text-xs font-medium tracking-wide transition-colors ${
            l === locale
              ? "bg-signal/15 text-signal-bright"
              : "text-muted hover:text-paper"
          }`}
        >
          {localeNames[l]}
        </a>
      ))}
    </div>
  );
}
