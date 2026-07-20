export type Locale = "ru" | "kz" | "en" | "tr" | "zh";

export const locales: Locale[] = ["ru", "kz", "en", "tr", "zh"];
export const defaultLocale: Locale = "ru";

// Short labels shown in the language switcher.
export const localeNames: Record<Locale, string> = {
  ru: "Рус",
  kz: "Қаз",
  en: "Eng",
  tr: "Türk",
  zh: "中文",
};

// BCP-47 tags for <html lang> and hreflang alternates.
export const localeToBcp47: Record<Locale, string> = {
  ru: "ru",
  kz: "kk",
  en: "en",
  tr: "tr",
  zh: "zh",
};

interface TitleDesc {
  title: string;
  desc: string;
}

interface Stat {
  value: string;
  label: string;
}

export interface Translations {
  meta: { title: string; description: string };
  brand: { suffix: string };
  nav: {
    about: string;
    categories: string;
    contacts: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    items: TitleDesc[];
    stats: Stat[];
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    detailsTitle: string;
    binLabel: string;
    directorLabel: string;
    directorValue: string;
    addressLabel: string;
    addressValue: string;
  };
  categories: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tag: string;
    items: TitleDesc[];
    note: string;
  };
  whyus: {
    eyebrow: string;
    title: string;
    items: TitleDesc[];
  };
  audience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  contacts: {
    eyebrow: string;
    title: string;
    subtitle: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    directorLabel: string;
    mapTitle: string;
    cta: string;
  };
  footer: {
    tagline: string;
    rights: string;
    city: string;
    disclaimer: string;
  };
}

const ru: Translations = {
  meta: {
    title: "ТОО «Арсенал про Групп» — вооружение и военная техника | Астана",
    description:
      "Арсенал про Групп — поставки вооружения и военной техники для государственных органов: стрелковое оружие, боеприпасы, тактическая экипировка и оптика. Работаем только с проверенными поставщиками. Астана, Казахстан.",
  },
  brand: { suffix: "ТОО" },
  nav: {
    about: "О компании",
    categories: "Что поставляем",
    contacts: "Контакты",
    cta: "Связаться",
  },
  hero: {
    eyebrow: "Обеспечение государственных органов",
    title1: "Надёжный партнёр в сфере",
    title2: "вооружения и военной техники",
    subtitle:
      "Поставки вооружения, военной техники и снаряжения для государственных органов. Работаем только с проверенными поставщиками и обеспечиваем поставки «под ключ».",
    ctaPrimary: "Связаться с нами",
    ctaSecondary: "Что поставляем",
    scroll: "Листайте",
  },
  trust: {
    eyebrow: "Почему нам доверяют",
    title: "Партнёр, на которого полагаются госорганы",
    items: [
      {
        title: "Только проверенные поставщики",
        desc: "Работаем исключительно с сертифицированными и проверенными производителями.",
      },
      {
        title: "Доверие государственных органов",
        desc: "Обеспечиваем силовые структуры и государственные органы страны.",
      },
      {
        title: "Комплексное снабжение",
        desc: "Организуем поставку, логистику и сопровождение под конкретную задачу.",
      },
      {
        title: "Конфиденциальность",
        desc: "Строгий режим и конфиденциальность каждой поставки.",
      },
    ],
    stats: [
      { value: "100%", label: "Проверенные поставщики" },
      { value: "24/7", label: "Логистика и сопровождение" },
      { value: "A–Z", label: "Поставки «под ключ»" },
    ],
  },
  about: {
    eyebrow: "О компании",
    title: "Арсенал про Групп",
    p1: "ТОО «Арсенал про Групп» — специализированный поставщик вооружения, военной техники и снаряжения для государственных органов и силовых структур.",
    p2: "Компания осуществляет деятельность на территории Республики Казахстан и является надёжным партнёром в обеспечении обороноспособности страны, работая только с проверенными и надёжными поставщиками.",
    detailsTitle: "Реквизиты",
    binLabel: "БИН",
    directorLabel: "Директор",
    directorValue: "Бегайдаров Кайрат Рамазанович",
    addressLabel: "Адрес",
    addressValue: "010000, г. Астана, Проспект Тұран, дом №89/3, 1",
  },
  categories: {
    eyebrow: "Что поставляем",
    title: "Категории поставок",
    subtitle:
      "Современная техника и снаряжение по каждому направлению. Характеристики и детали — по запросу.",
    tag: "По запросу",
    items: [
      {
        title: "Стрелковое оружие и пулемёты",
        desc: "Современное стрелковое вооружение и пулемёты.",
      },
      {
        title: "Боеприпасы",
        desc: "Боеприпасы различного назначения и калибров.",
      },
      {
        title: "Тактическая экипировка и бронезащита",
        desc: "Экипировка, бронежилеты и средства индивидуальной защиты.",
      },
      {
        title: "Оптика и ночное видение",
        desc: "Прицелы, приборы наблюдения и ночного видения.",
      },
    ],
    note: "Номенклатура и технические характеристики предоставляются по запросу для уполномоченных государственных заказчиков.",
  },
  whyus: {
    eyebrow: "Гарантии",
    title: "Почему «Арсенал про Групп»",
    items: [
      {
        title: "Проверенные поставщики",
        desc: "Только сертифицированные и проверенные производители.",
      },
      {
        title: "Лицензии и соответствие",
        desc: "Работа в правовом поле и в рамках государственного оборонного заказа.",
      },
      {
        title: "Конфиденциальность",
        desc: "Защита данных и строгое соблюдение режима.",
      },
      {
        title: "Логистика",
        desc: "Организация доставки, хранения и сопровождения поставок.",
      },
      {
        title: "Широкая номенклатура",
        desc: "Подбор и поставка оборудования под конкретные требования.",
      },
      {
        title: "Опыт с госорганами",
        desc: "Понимание процедур государственных закупок.",
      },
    ],
  },
  audience: {
    eyebrow: "Для кого мы работаем",
    title: "Для государственных силовых структур",
    subtitle:
      "Обеспечиваем органы, отвечающие за обороноспособность и общественную безопасность.",
    items: [
      "Вооружённые силы",
      "Национальная гвардия",
      "Органы внутренних дел",
      "Специальные подразделения",
      "Пограничная служба",
      "Государственные силовые структуры",
    ],
  },
  contacts: {
    eyebrow: "Контакты",
    title: "Свяжитесь с нами",
    subtitle: "Обсудим поставки и сотрудничество с «Арсенал про Групп».",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    addressLabel: "Адрес",
    directorLabel: "Директор",
    mapTitle: "Расположение офиса на карте",
    cta: "Написать нам",
  },
  footer: {
    tagline: "Надёжный партнёр в сфере вооружения и военной техники.",
    rights: "© 2026 ТОО «Арсенал про Групп». Все права защищены.",
    city: "г. Астана, Республика Казахстан",
    disclaimer:
      "Поставки осуществляются в соответствии с законодательством Республики Казахстан.",
  },
};

const kz: Translations = {
  meta: {
    title: "«Арсенал про Групп» ЖШС — қару-жарақ және әскери техника | Астана",
    description:
      "Арсенал про Групп — мемлекеттік органдар үшін қару-жарақ пен әскери техниканы жеткізу: атыс қаруы, оқ-дәрі, тактикалық жарақтама және оптика. Тек тексерілген жеткізушілермен жұмыс істейміз. Астана, Қазақстан.",
  },
  brand: { suffix: "ЖШС" },
  nav: {
    about: "Компания туралы",
    categories: "Не жеткіземіз",
    contacts: "Байланыс",
    cta: "Хабарласу",
  },
  hero: {
    eyebrow: "Мемлекеттік органдарды қамтамасыз ету",
    title1: "Қару-жарақ және әскери техника саласындағы",
    title2: "сенімді серіктес",
    subtitle:
      "Мемлекеттік органдар үшін қару-жарақ, әскери техника және жарақтаманы жеткіземіз. Тек тексерілген жеткізушілермен жұмыс істеп, «кілтпен» жеткізуді қамтамасыз етеміз.",
    ctaPrimary: "Бізбен байланысу",
    ctaSecondary: "Не жеткіземіз",
    scroll: "Төмен",
  },
  trust: {
    eyebrow: "Бізге неге сенеді",
    title: "Мемлекеттік органдар сенетін серіктес",
    items: [
      {
        title: "Тек тексерілген жеткізушілер",
        desc: "Тек сертификатталған және тексерілген өндірушілермен ғана жұмыс істейміз.",
      },
      {
        title: "Мемлекеттік органдардың сенімі",
        desc: "Елдің күштік құрылымдары мен мемлекеттік органдарын қамтамасыз етеміз.",
      },
      {
        title: "Кешенді жабдықтау",
        desc: "Тапсырысқа сай жеткізу, логистика және сүйемелдеуді ұйымдастырамыз.",
      },
      {
        title: "Құпиялылық",
        desc: "Әрбір жеткізілімнің қатаң режимі мен құпиялылығы.",
      },
    ],
    stats: [
      { value: "100%", label: "Тексерілген жеткізушілер" },
      { value: "24/7", label: "Логистика және сүйемелдеу" },
      { value: "A–Z", label: "«Кілтпен» жеткізу" },
    ],
  },
  about: {
    eyebrow: "Компания туралы",
    title: "Арсенал про Групп",
    p1: "«Арсенал про Групп» ЖШС — мемлекеттік органдар мен күштік құрылымдар үшін қару-жарақ, әскери техника және жарақтаманы жеткізуге маманданған кәсіпорын.",
    p2: "Компания Қазақстан Республикасы аумағында қызметін жүзеге асырады және тек тексерілген әрі сенімді жеткізушілермен жұмыс істей отырып, елдің қорғаныс қабілетін қамтамасыз етудегі сенімді серіктес болып табылады.",
    detailsTitle: "Деректемелер",
    binLabel: "БСН",
    directorLabel: "Директор",
    directorValue: "Бегайдаров Қайрат Рамазанұлы",
    addressLabel: "Мекенжай",
    addressValue: "010000, Астана қ., Тұран даңғылы, №89/3 үй, 1",
  },
  categories: {
    eyebrow: "Не жеткіземіз",
    title: "Жеткізілім санаттары",
    subtitle:
      "Әр бағыт бойынша заманауи техника мен жарақтама. Сипаттамалар мен толық ақпарат — сұраныс бойынша.",
    tag: "Сұраныс бойынша",
    items: [
      {
        title: "Атыс қаруы және пулемёттер",
        desc: "Заманауи атыс қаруы мен пулемёттер.",
      },
      {
        title: "Оқ-дәрілер",
        desc: "Әртүрлі мақсаттағы және калибрлі оқ-дәрілер.",
      },
      {
        title: "Тактикалық жарақтама және броньқорғаныс",
        desc: "Жарақтама, бронежилеттер және жеке қорғаныс құралдары.",
      },
      {
        title: "Оптика және түнгі көру",
        desc: "Көздеуіштер, бақылау және түнгі көру аспаптары.",
      },
    ],
    note: "Номенклатура мен техникалық сипаттамалар уәкілетті мемлекеттік тапсырыс берушілерге сұраныс бойынша ұсынылады.",
  },
  whyus: {
    eyebrow: "Кепілдіктер",
    title: "Неге «Арсенал про Групп»",
    items: [
      {
        title: "Тексерілген жеткізушілер",
        desc: "Тек сертификатталған және тексерілген өндірушілер.",
      },
      {
        title: "Лицензиялар және сәйкестік",
        desc: "Құқықтық аяда және мемлекеттік қорғаныс тапсырысы шеңберінде жұмыс.",
      },
      {
        title: "Құпиялылық",
        desc: "Деректерді қорғау және режимді қатаң сақтау.",
      },
      {
        title: "Логистика",
        desc: "Жеткізу, сақтау және сүйемелдеуді ұйымдастыру.",
      },
      {
        title: "Кең номенклатура",
        desc: "Нақты талаптарға сай жабдықты іріктеу және жеткізу.",
      },
      {
        title: "Мемлекеттік органдармен тәжірибе",
        desc: "Мемлекеттік сатып алу рәсімдерін түсіну.",
      },
    ],
  },
  audience: {
    eyebrow: "Біз кім үшін жұмыс істейміз",
    title: "Мемлекеттік күштік құрылымдар үшін",
    subtitle:
      "Қорғаныс қабілеті мен қоғамдық қауіпсіздікке жауапты органдарды қамтамасыз етеміз.",
    items: [
      "Қарулы күштер",
      "Ұлттық ұлан",
      "Ішкі істер органдары",
      "Арнайы бөлімшелер",
      "Шекара қызметі",
      "Мемлекеттік күштік құрылымдар",
    ],
  },
  contacts: {
    eyebrow: "Байланыс",
    title: "Бізбен байланысыңыз",
    subtitle:
      "«Арсенал про Групп» компаниясымен жеткізілім мен ынтымақтастықты талқылаймыз.",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    addressLabel: "Мекенжай",
    directorLabel: "Директор",
    mapTitle: "Кеңсенің картадағы орны",
    cta: "Бізге жазу",
  },
  footer: {
    tagline: "Қару-жарақ және әскери техника саласындағы сенімді серіктес.",
    rights: "© 2026 «Арсенал про Групп» ЖШС. Барлық құқықтар қорғалған.",
    city: "Астана қ., Қазақстан Республикасы",
    disclaimer:
      "Жеткізілімдер Қазақстан Республикасының заңнамасына сәйкес жүзеге асырылады.",
  },
};

const en: Translations = {
  meta: {
    title: "Arsenal Pro Group — Armaments & Military Equipment | Astana",
    description:
      "Arsenal Pro Group LLP — a supplier of armaments and military equipment for government agencies: small arms, ammunition, tactical gear and optics. We work only with verified suppliers. Astana, Kazakhstan.",
  },
  brand: { suffix: "LLP" },
  nav: {
    about: "About",
    categories: "Solutions",
    contacts: "Contacts",
    cta: "Get in touch",
  },
  hero: {
    eyebrow: "Defense supply for government agencies",
    title1: "Reliable partner in",
    title2: "armaments & military equipment",
    subtitle:
      "Supplying armaments, military equipment and gear to government agencies — working only with verified suppliers, with turnkey logistics and delivery.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "What we supply",
    scroll: "Scroll",
  },
  trust: {
    eyebrow: "Why they trust us",
    title: "A partner government agencies rely on",
    items: [
      {
        title: "Verified suppliers only",
        desc: "We work exclusively with certified, vetted manufacturers.",
      },
      {
        title: "Trusted by government agencies",
        desc: "We supply the armed forces and state security structures.",
      },
      {
        title: "End-to-end supply",
        desc: "Sourcing, logistics and support organized around each requirement.",
      },
      {
        title: "Confidentiality",
        desc: "Strict security regime and confidentiality of every delivery.",
      },
    ],
    stats: [
      { value: "100%", label: "Verified suppliers" },
      { value: "24/7", label: "Logistics & support" },
      { value: "A–Z", label: "Turnkey supply" },
    ],
  },
  about: {
    eyebrow: "About the company",
    title: "Arsenal Pro Group",
    p1: "Arsenal Pro Group LLP is a specialized supplier of armaments, military equipment and gear for government agencies and security structures.",
    p2: "The company operates across the Republic of Kazakhstan and is a reliable partner in ensuring the country's defense capability, working only with verified and trusted suppliers.",
    detailsTitle: "Company details",
    binLabel: "BIN",
    directorLabel: "Director",
    directorValue: "Begaidarov Kairat Ramazanovich",
    addressLabel: "Address",
    addressValue: "010000, Astana, Turan Avenue, building 89/3, 1",
  },
  categories: {
    eyebrow: "Solutions",
    title: "What we supply",
    subtitle:
      "Modern equipment across every category. Specifications and details on request.",
    tag: "On request",
    items: [
      {
        title: "Small arms & machine guns",
        desc: "Modern small arms and machine guns.",
      },
      {
        title: "Ammunition",
        desc: "Ammunition of various purposes and calibers.",
      },
      {
        title: "Tactical gear & body armor",
        desc: "Gear, body armor and personal protective equipment.",
      },
      {
        title: "Optics & night vision",
        desc: "Sights, observation and night-vision devices.",
      },
    ],
    note: "Product range and technical specifications are provided on request to authorized government customers.",
  },
  whyus: {
    eyebrow: "Guarantees",
    title: "Why Arsenal Pro Group",
    items: [
      {
        title: "Verified suppliers",
        desc: "Only certified and vetted manufacturers.",
      },
      {
        title: "Licensing & compliance",
        desc: "Operating within the law and the state defense order framework.",
      },
      {
        title: "Confidentiality",
        desc: "Data protection and a strict security regime.",
      },
      {
        title: "Logistics",
        desc: "Delivery, storage and end-to-end supply support.",
      },
      {
        title: "Broad product range",
        desc: "Sourcing and delivery matched to each requirement.",
      },
      {
        title: "Experience with agencies",
        desc: "A clear understanding of government procurement procedures.",
      },
    ],
  },
  audience: {
    eyebrow: "Who we serve",
    title: "Built for state security structures",
    subtitle:
      "We support the agencies responsible for national defense and public safety.",
    items: [
      "Armed forces",
      "National guard",
      "Internal affairs bodies",
      "Special units",
      "Border service",
      "State security structures",
    ],
  },
  contacts: {
    eyebrow: "Contacts",
    title: "Get in touch",
    subtitle: "Discuss supply and cooperation with Arsenal Pro Group.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    directorLabel: "Director",
    mapTitle: "Office location on map",
    cta: "Write to us",
  },
  footer: {
    tagline: "Reliable partner in armaments and military equipment.",
    rights: "© 2026 Arsenal Pro Group LLP. All rights reserved.",
    city: "Astana, Republic of Kazakhstan",
    disclaimer:
      "Supplies are carried out in accordance with the legislation of the Republic of Kazakhstan.",
  },
};

const tr: Translations = {
  meta: {
    title: "Arsenal Pro Group — Silah ve Askeri Teçhizat | Astana",
    description:
      "Arsenal Pro Group LLP — devlet kurumları için silah ve askeri teçhizat tedarikçisi: hafif silahlar, mühimmat, taktik teçhizat ve optik. Yalnızca doğrulanmış tedarikçilerle çalışıyoruz. Astana, Kazakistan.",
  },
  brand: { suffix: "LLP" },
  nav: {
    about: "Hakkımızda",
    categories: "Tedarik",
    contacts: "İletişim",
    cta: "İletişime geçin",
  },
  hero: {
    eyebrow: "Devlet kurumlarına tedarik",
    title1: "Silah ve askeri teçhizat alanında",
    title2: "güvenilir ortağınız",
    subtitle:
      "Devlet kurumları için silah, askeri teçhizat ve donanım tedariki. Yalnızca doğrulanmış tedarikçilerle çalışıyor, anahtar teslim lojistik ve teslimat sağlıyoruz.",
    ctaPrimary: "İletişime geçin",
    ctaSecondary: "Ne tedarik ediyoruz",
    scroll: "Kaydırın",
  },
  trust: {
    eyebrow: "Neden bize güveniyorlar",
    title: "Devlet kurumlarının güvendiği ortak",
    items: [
      {
        title: "Yalnızca doğrulanmış tedarikçiler",
        desc: "Sadece sertifikalı ve doğrulanmış üreticilerle çalışıyoruz.",
      },
      {
        title: "Devlet kurumlarının güveni",
        desc: "Silahlı kuvvetleri ve devlet güvenlik yapılarını tedarik ediyoruz.",
      },
      {
        title: "Uçtan uca tedarik",
        desc: "Her talebe göre kaynak bulma, lojistik ve destek.",
      },
      {
        title: "Gizlilik",
        desc: "Her teslimatta sıkı güvenlik ve gizlilik.",
      },
    ],
    stats: [
      { value: "100%", label: "Doğrulanmış tedarikçiler" },
      { value: "24/7", label: "Lojistik ve destek" },
      { value: "A–Z", label: "Anahtar teslim tedarik" },
    ],
  },
  about: {
    eyebrow: "Hakkımızda",
    title: "Arsenal Pro Group",
    p1: "Arsenal Pro Group LLP, devlet kurumları ve güvenlik yapıları için silah, askeri teçhizat ve donanım tedarikinde uzmanlaşmış bir kuruluştur.",
    p2: "Şirket, Kazakistan Cumhuriyeti genelinde faaliyet göstermekte olup, yalnızca doğrulanmış ve güvenilir tedarikçilerle çalışarak ülkenin savunma gücünün sağlanmasında güvenilir bir ortaktır.",
    detailsTitle: "Şirket bilgileri",
    binLabel: "BIN",
    directorLabel: "Direktör",
    directorValue: "Begaidarov Kairat Ramazanovich",
    addressLabel: "Adres",
    addressValue: "010000, Astana, Turan Caddesi, bina 89/3, 1",
  },
  categories: {
    eyebrow: "Tedarik",
    title: "Ne tedarik ediyoruz",
    subtitle:
      "Her kategoride modern teçhizat. Teknik özellikler ve ayrıntılar talep üzerine.",
    tag: "Talep üzerine",
    items: [
      {
        title: "Hafif silahlar ve makineli tüfekler",
        desc: "Modern hafif silahlar ve makineli tüfekler.",
      },
      {
        title: "Mühimmat",
        desc: "Çeşitli amaç ve kalibrelerde mühimmat.",
      },
      {
        title: "Taktik teçhizat ve zırh",
        desc: "Teçhizat, çelik yelek ve kişisel koruyucu ekipman.",
      },
      {
        title: "Optik ve gece görüş",
        desc: "Nişangahlar, gözlem ve gece görüş cihazları.",
      },
    ],
    note: "Ürün yelpazesi ve teknik özellikler, yetkili devlet müşterilerine talep üzerine sunulur.",
  },
  whyus: {
    eyebrow: "Garantiler",
    title: "Neden Arsenal Pro Group",
    items: [
      {
        title: "Doğrulanmış tedarikçiler",
        desc: "Yalnızca sertifikalı ve doğrulanmış üreticiler.",
      },
      {
        title: "Lisans ve uyum",
        desc: "Yasal çerçevede ve devlet savunma siparişi kapsamında çalışma.",
      },
      {
        title: "Gizlilik",
        desc: "Veri koruma ve sıkı güvenlik rejimi.",
      },
      {
        title: "Lojistik",
        desc: "Teslimat, depolama ve uçtan uca tedarik desteği.",
      },
      {
        title: "Geniş ürün yelpazesi",
        desc: "Her talebe göre tedarik ve teslimat.",
      },
      {
        title: "Kurumlarla deneyim",
        desc: "Kamu ihale prosedürlerine dair net bir anlayış.",
      },
    ],
  },
  audience: {
    eyebrow: "Kimlere hizmet veriyoruz",
    title: "Devlet güvenlik yapıları için",
    subtitle:
      "Ulusal savunma ve kamu güvenliğinden sorumlu kurumları destekliyoruz.",
    items: [
      "Silahlı kuvvetler",
      "Ulusal muhafızlar",
      "İçişleri birimleri",
      "Özel birlikler",
      "Sınır muhafaza",
      "Devlet güvenlik yapıları",
    ],
  },
  contacts: {
    eyebrow: "İletişim",
    title: "İletişime geçin",
    subtitle: "Arsenal Pro Group ile tedarik ve iş birliğini görüşelim.",
    phoneLabel: "Telefon",
    emailLabel: "E-posta",
    addressLabel: "Adres",
    directorLabel: "Direktör",
    mapTitle: "Ofis konumu haritada",
    cta: "Bize yazın",
  },
  footer: {
    tagline: "Silah ve askeri teçhizat alanında güvenilir ortak.",
    rights: "© 2026 Arsenal Pro Group LLP. Tüm hakları saklıdır.",
    city: "Astana, Kazakistan Cumhuriyeti",
    disclaimer:
      "Tedarikler Kazakistan Cumhuriyeti mevzuatına uygun olarak gerçekleştirilir.",
  },
};

const zh: Translations = {
  meta: {
    title: "Arsenal Pro Group — 武器与军事装备 | 阿斯塔纳",
    description:
      "Arsenal Pro Group LLP——为政府机构供应武器与军事装备：轻武器、弹药、战术装备与光学设备。我们只与经过核验的供应商合作。哈萨克斯坦阿斯塔纳。",
  },
  brand: { suffix: "有限责任公司" },
  nav: {
    about: "关于我们",
    categories: "供应范围",
    contacts: "联系我们",
    cta: "联系我们",
  },
  hero: {
    eyebrow: "面向政府机构的国防供应",
    title1: "武器与军事装备领域的",
    title2: "可靠合作伙伴",
    subtitle:
      "为政府机构供应武器、军事装备与装具。我们只与经过核验的供应商合作，并提供交钥匙物流与交付。",
    ctaPrimary: "联系我们",
    ctaSecondary: "供应范围",
    scroll: "向下滚动",
  },
  trust: {
    eyebrow: "为何信赖我们",
    title: "政府机构信赖的合作伙伴",
    items: [
      {
        title: "仅限核验供应商",
        desc: "我们只与经过认证和核验的制造商合作。",
      },
      {
        title: "政府机构的信任",
        desc: "为武装力量和国家安全机构提供供应。",
      },
      {
        title: "一体化供应",
        desc: "围绕每项需求组织采购、物流与保障。",
      },
      {
        title: "保密",
        desc: "对每一次供应实行严格的保密制度。",
      },
    ],
    stats: [
      { value: "100%", label: "核验供应商" },
      { value: "24/7", label: "物流与支持" },
      { value: "A–Z", label: "交钥匙供应" },
    ],
  },
  about: {
    eyebrow: "关于我们",
    title: "Arsenal Pro Group",
    p1: "Arsenal Pro Group LLP 是一家为政府机构与安全机构供应武器、军事装备与装具的专业供应商。",
    p2: "公司在哈萨克斯坦共和国境内开展业务，只与经过核验的可靠供应商合作，是保障国家国防能力的可靠合作伙伴。",
    detailsTitle: "公司信息",
    binLabel: "商业识别号 (BIN)",
    directorLabel: "总经理",
    directorValue: "Begaidarov Kairat Ramazanovich",
    addressLabel: "地址",
    addressValue: "010000, 阿斯塔纳市, 图兰大街 89/3 号楼, 1",
  },
  categories: {
    eyebrow: "供应范围",
    title: "我们供应什么",
    subtitle: "覆盖各类别的现代装备。技术参数与详情可按需提供。",
    tag: "按需提供",
    items: [
      {
        title: "轻武器与机枪",
        desc: "现代轻武器与机枪。",
      },
      {
        title: "弹药",
        desc: "各种用途与口径的弹药。",
      },
      {
        title: "战术装备与防弹护具",
        desc: "装具、防弹衣与个人防护装备。",
      },
      {
        title: "光学与夜视",
        desc: "瞄准镜、观察与夜视设备。",
      },
    ],
    note: "产品范围与技术参数按需向授权的政府客户提供。",
  },
  whyus: {
    eyebrow: "保障",
    title: "为何选择 Arsenal Pro Group",
    items: [
      {
        title: "核验供应商",
        desc: "只与经过认证和核验的制造商合作。",
      },
      {
        title: "许可与合规",
        desc: "在法律框架和国家国防订单范围内运营。",
      },
      {
        title: "保密",
        desc: "数据保护与严格的保密制度。",
      },
      {
        title: "物流",
        desc: "交付、仓储与全程供应保障。",
      },
      {
        title: "广泛的产品范围",
        desc: "根据具体需求进行采购与交付。",
      },
      {
        title: "政府机构合作经验",
        desc: "深入了解政府采购流程。",
      },
    ],
  },
  audience: {
    eyebrow: "服务对象",
    title: "为国家安全机构而建",
    subtitle: "我们为负责国防与公共安全的机构提供支持。",
    items: [
      "武装力量",
      "国民警卫队",
      "内务机关",
      "特种部队",
      "边防部队",
      "国家安全机构",
    ],
  },
  contacts: {
    eyebrow: "联系我们",
    title: "与我们联系",
    subtitle: "与 Arsenal Pro Group 洽谈供应与合作。",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    addressLabel: "地址",
    directorLabel: "总经理",
    mapTitle: "办公室地图位置",
    cta: "给我们留言",
  },
  footer: {
    tagline: "武器与军事装备领域的可靠合作伙伴。",
    rights: "© 2026 Arsenal Pro Group LLP. 版权所有。",
    city: "哈萨克斯坦共和国阿斯塔纳市",
    disclaimer: "供应业务依照哈萨克斯坦共和国法律进行。",
  },
};

const translations: Record<Locale, Translations> = { ru, kz, en, tr, zh };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.ru;
}
