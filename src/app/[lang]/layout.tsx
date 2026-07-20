import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "../globals.css";
import {
  type Locale,
  locales,
  defaultLocale,
  localeToBcp47,
  getTranslations,
} from "../i18n";
import { company } from "../company";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

function resolveLocale(lang: string): Locale {
  return (locales as string[]).includes(lang) ? (lang as Locale) : defaultLocale;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getTranslations(locale);

  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeToBcp47[l]] = `/${l}`;
  languages["x-default"] = `/${defaultLocale}`;

  return {
    metadataBase: new URL(company.domain),
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: `/${locale}`, languages },
    openGraph: {
      type: "website",
      siteName: "Arsenal Pro Group",
      title: t.meta.title,
      description: t.meta.description,
      url: `/${locale}`,
      locale: localeToBcp47[locale],
      images: [
        { url: "/logo.jpeg", width: 1200, height: 630, alt: "Arsenal Pro Group" },
      ],
    },
    icons: { icon: "/favicon.ico" },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getTranslations(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arsenal Pro Group",
    alternateName: "ТОО «Арсенал про Групп»",
    url: company.domain,
    telephone: "+77055981414",
    email: company.email,
    description: t.meta.description,
    areaServed: "KZ",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Проспект Тұран, 89/3, 1",
      addressLocality: "Астана",
      postalCode: "010000",
      addressCountry: "KZ",
    },
  };

  return (
    <html
      lang={localeToBcp47[locale]}
      className={`${oswald.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen">
        <div className="field-backdrop" aria-hidden="true" />
        <SiteHeader locale={locale} />
        <main>{children}</main>
        <SiteFooter locale={locale} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
