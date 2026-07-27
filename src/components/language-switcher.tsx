import { locales, localeNames, type Locale } from "../app/i18n";

/** Renders a link per locale, swapping only the /[lang] path segment. */
export default function LanguageSwitcher({
  locale,
  className = "",
  compact = false,
}: {
  locale: Locale;
  className?: string;
  /** Tighter metrics for the phone header bar, where all five have to sit
   *  alongside the logo and the menu button. */
  compact?: boolean;
}) {
  // Compact trades font size for a taller hit area: five targets sitting side
  // by side under a thumb need the height more than they need the type.
  const size = compact ? "px-2 py-2.5 text-[11px]" : "px-2 py-1 text-xs";

  return (
    <div
      className={`flex items-center ${compact ? "gap-1" : "gap-0.5"} ${className}`}
    >
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}`}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded font-medium tracking-wide transition-colors ${size} ${
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
