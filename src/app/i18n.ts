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
    capabilities: string;
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
  capabilities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: TitleDesc[];
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
      "Арсенал про Групп — поставки вооружения и военной техники для государственных органов полного цикла: оружие, боеприпасы, бронетехника, экипировка и сервис. Астана, Казахстан.",
  },
  brand: { suffix: "ТОО" },
  nav: {
    about: "О компании",
    capabilities: "Направления",
    categories: "Что поставляем",
    contacts: "Контакты",
    cta: "Связаться",
  },
  hero: {
    eyebrow: "Обеспечение государственных органов",
    title1: "Надёжный партнёр в сфере",
    title2: "вооружения и военной техники",
    subtitle:
      "Разработка, производство, ремонт и сервис — полный цикл решений для обеспечения обороноспособности. Работаем только с проверенными поставщиками.",
    ctaPrimary: "Связаться с нами",
    ctaSecondary: "Наши направления",
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
        title: "Полный цикл",
        desc: "От разработки и производства до сервиса и модернизации.",
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
    p1: "ТОО «Арсенал про Групп» — предприятие, специализирующееся на полном цикле работ в сфере вооружения и военной техники: от разработки и производства до ремонта и сервисного обслуживания.",
    p2: "Компания осуществляет деятельность на территории Республики Казахстан и является надёжным партнёром в обеспечении обороноспособности страны, работая только с проверенными и надёжными поставщиками.",
    detailsTitle: "Реквизиты",
    binLabel: "БИН",
    directorLabel: "Директор",
    directorValue: "Бегайдаров Кайрат Рамазанович",
    addressLabel: "Адрес",
    addressValue: "010000, г. Астана, Проспект Тұран, дом №89/3, 1",
  },
  capabilities: {
    eyebrow: "Чем мы занимаемся",
    title: "Направления деятельности",
    subtitle: "Полный спектр решений по всей цепочке оборонных поставок.",
    cards: [
      {
        title: "Разработка и производство",
        desc: "Боеприпасы, вооружение, военная техника, запасные части, комплектующие изделия и приборы.",
      },
      {
        title: "Стрелковое оружие и пулемёты",
        desc: "Современные образцы стрелкового вооружения и пулемётов для силовых структур.",
      },
      {
        title: "Бронетехника и боевые машины",
        desc: "Танки, бронемашины и боевая техника, их поставка и обслуживание.",
      },
      {
        title: "Тактическая экипировка",
        desc: "Средства индивидуальной защиты и снаряжение специальных подразделений.",
      },
      {
        title: "Служебные собаки (K9)",
        desc: "Подготовленные служебные и караульные собаки для силовых структур.",
      },
      {
        title: "Оптика и приборы",
        desc: "Прицелы, приборы ночного видения и комплектующие изделия.",
      },
      {
        title: "Ремонт и модернизация",
        desc: "Ремонт, модернизация и наладка вооружения и военной техники.",
      },
      {
        title: "Специальные материалы",
        desc: "Поставка специальных материалов и оборудования для производства.",
      },
      {
        title: "Комплексные решения",
        desc: "Полный цикл — от проектирования до ввода в эксплуатацию.",
      },
    ],
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
        title: "Бронетехника и танки",
        desc: "Бронемашины, боевые машины и танки.",
      },
      {
        title: "Тактическая экипировка и бронезащита",
        desc: "Экипировка, бронежилеты и средства индивидуальной защиты.",
      },
      {
        title: "Служебные собаки (K9)",
        desc: "Служебные и караульные собаки для силовых структур.",
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
        title: "Полный цикл",
        desc: "От проектирования до ввода в эксплуатацию и сервиса.",
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
      "Арсенал про Групп — мемлекеттік органдар үшін қару-жарақ пен әскери техниканың толық циклді жеткізілімі: қару, оқ-дәрі, бронетехника, жарақтама және сервис. Астана, Қазақстан.",
  },
  brand: { suffix: "ЖШС" },
  nav: {
    about: "Компания туралы",
    capabilities: "Бағыттар",
    categories: "Не жеткіземіз",
    contacts: "Байланыс",
    cta: "Хабарласу",
  },
  hero: {
    eyebrow: "Мемлекеттік органдарды қамтамасыз ету",
    title1: "Қару-жарақ және әскери техника саласындағы",
    title2: "сенімді серіктес",
    subtitle:
      "Әзірлеу, өндіру, жөндеу және сервис — қорғаныс қабілетін қамтамасыз етудің толық циклі. Тек тексерілген жеткізушілермен жұмыс істейміз.",
    ctaPrimary: "Бізбен байланысу",
    ctaSecondary: "Біздің бағыттар",
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
        title: "Толық цикл",
        desc: "Әзірлеу мен өндіруден бастап сервис пен жаңғыртуға дейін.",
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
    p1: "«Арсенал про Групп» ЖШС — қару-жарақ пен әскери техника саласында жұмыстардың толық циклін жүргізуге маманданған кәсіпорын: әзірлеу мен өндіруден бастап жөндеу мен сервистік қызмет көрсетуге дейін.",
    p2: "Компания Қазақстан Республикасы аумағында қызметін жүзеге асырады және тек тексерілген әрі сенімді жеткізушілермен жұмыс істей отырып, елдің қорғаныс қабілетін қамтамасыз етудегі сенімді серіктес болып табылады.",
    detailsTitle: "Деректемелер",
    binLabel: "БСН",
    directorLabel: "Директор",
    directorValue: "Бегайдаров Қайрат Рамазанұлы",
    addressLabel: "Мекенжай",
    addressValue: "010000, Астана қ., Тұран даңғылы, №89/3 үй, 1",
  },
  capabilities: {
    eyebrow: "Немен айналысамыз",
    title: "Қызмет бағыттары",
    subtitle: "Қорғаныс жеткізілім тізбегі бойынша шешімдердің толық спектрі.",
    cards: [
      {
        title: "Әзірлеу және өндіру",
        desc: "Оқ-дәрілер, қару-жарақ, әскери техника, қосалқы бөлшектер, жинақтаушы бұйымдар мен аспаптар.",
      },
      {
        title: "Атыс қаруы және пулемёттер",
        desc: "Күштік құрылымдарға арналған заманауи атыс қаруы мен пулемёттер.",
      },
      {
        title: "Бронетехника және жауынгерлік машиналар",
        desc: "Танктер, броньды машиналар мен жауынгерлік техника, оларды жеткізу және қызмет көрсету.",
      },
      {
        title: "Тактикалық жарақтама",
        desc: "Жеке қорғаныс құралдары және арнайы бөлімшелердің жарақтамасы.",
      },
      {
        title: "Қызметтік иттер (K9)",
        desc: "Күштік құрылымдарға арналған дайындалған қызметтік және күзет иттері.",
      },
      {
        title: "Оптика және аспаптар",
        desc: "Оптикалық көздеуіштер, түнгі көру аспаптары және жинақтаушылар.",
      },
      {
        title: "Жөндеу және жаңғырту",
        desc: "Қару-жарақ пен әскери техниканы жөндеу, жаңғырту және баптау.",
      },
      {
        title: "Арнайы материалдар",
        desc: "Өндіріске арналған арнайы материалдар мен жабдықтарды жеткізу.",
      },
      {
        title: "Кешенді шешімдер",
        desc: "Жобалаудан бастап пайдалануға беруге дейін — толық цикл.",
      },
    ],
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
        title: "Бронетехника және танктер",
        desc: "Броньды машиналар, жауынгерлік машиналар және танктер.",
      },
      {
        title: "Тактикалық жарақтама және броньқорғаныс",
        desc: "Жарақтама, бронежилеттер және жеке қорғаныс құралдары.",
      },
      {
        title: "Қызметтік иттер (K9)",
        desc: "Күштік құрылымдарға арналған қызметтік және күзет иттері.",
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
        title: "Толық цикл",
        desc: "Жобалаудан пайдалануға беру мен сервиске дейін.",
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
      "Arsenal Pro Group LLP — a full-cycle supplier of armaments and military equipment for government agencies: weapons, ammunition, armored vehicles, tactical gear and service. Astana, Kazakhstan.",
  },
  brand: { suffix: "LLP" },
  nav: {
    about: "About",
    capabilities: "Capabilities",
    categories: "Solutions",
    contacts: "Contacts",
    cta: "Get in touch",
  },
  hero: {
    eyebrow: "Defense supply for government agencies",
    title1: "Reliable partner in",
    title2: "armaments & military equipment",
    subtitle:
      "Development, manufacturing, repair and service — a full cycle of solutions to strengthen national defense. We work only with verified suppliers.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Our capabilities",
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
        title: "Full cycle",
        desc: "From development and production to service and modernization.",
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
    p1: "Arsenal Pro Group LLP is an enterprise specializing in the full cycle of operations in the field of armaments and military equipment: from development and manufacturing to repair and maintenance.",
    p2: "The company operates across the Republic of Kazakhstan and is a reliable partner in ensuring the country's defense capability, working only with verified and trusted suppliers.",
    detailsTitle: "Company details",
    binLabel: "BIN",
    directorLabel: "Director",
    directorValue: "Begaidarov Kairat Ramazanovich",
    addressLabel: "Address",
    addressValue: "010000, Astana, Turan Avenue, building 89/3, 1",
  },
  capabilities: {
    eyebrow: "What we do",
    title: "Areas of activity",
    subtitle: "A complete range of solutions across the defense supply chain.",
    cards: [
      {
        title: "Development & manufacturing",
        desc: "Ammunition, armaments, military equipment, spare parts, components and instruments.",
      },
      {
        title: "Small arms & machine guns",
        desc: "Modern small arms and machine guns for state security structures.",
      },
      {
        title: "Armored & combat vehicles",
        desc: "Tanks, armored vehicles and combat machinery — supply and service.",
      },
      {
        title: "Tactical equipment",
        desc: "Personal protective equipment and gear for special units.",
      },
      {
        title: "Working dogs (K9)",
        desc: "Trained service and guard dogs for security structures.",
      },
      {
        title: "Optics & instruments",
        desc: "Sights, night-vision devices and components.",
      },
      {
        title: "Repair & modernization",
        desc: "Repair, modernization and adjustment of armaments and equipment.",
      },
      {
        title: "Special materials",
        desc: "Supply of special materials and equipment for manufacturing.",
      },
      {
        title: "Integrated solutions",
        desc: "Full cycle — from design to commissioning.",
      },
    ],
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
        title: "Armored vehicles & tanks",
        desc: "Armored vehicles, combat machinery and tanks.",
      },
      {
        title: "Tactical gear & body armor",
        desc: "Gear, body armor and personal protective equipment.",
      },
      {
        title: "Working dogs (K9)",
        desc: "Service and guard dogs for security structures.",
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
        title: "Full cycle",
        desc: "From design to commissioning and service.",
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
      "Arsenal Pro Group LLP — devlet kurumları için tam döngü silah ve askeri teçhizat tedarikçisi: silahlar, mühimmat, zırhlı araçlar, taktik teçhizat ve servis. Astana, Kazakistan.",
  },
  brand: { suffix: "LLP" },
  nav: {
    about: "Hakkımızda",
    capabilities: "Faaliyetler",
    categories: "Tedarik",
    contacts: "İletişim",
    cta: "İletişime geçin",
  },
  hero: {
    eyebrow: "Devlet kurumlarına tedarik",
    title1: "Silah ve askeri teçhizat alanında",
    title2: "güvenilir ortağınız",
    subtitle:
      "Geliştirme, üretim, onarım ve servis — savunma gücünü desteklemek için tam döngü çözümler. Yalnızca doğrulanmış tedarikçilerle çalışıyoruz.",
    ctaPrimary: "İletişime geçin",
    ctaSecondary: "Faaliyetlerimiz",
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
        title: "Tam döngü",
        desc: "Geliştirme ve üretimden servis ve modernizasyona kadar.",
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
    p1: "Arsenal Pro Group LLP, silah ve askeri teçhizat alanında tam döngü faaliyetlerde uzmanlaşmış bir kuruluştur: geliştirme ve üretimden onarım ve bakıma kadar.",
    p2: "Şirket, Kazakistan Cumhuriyeti genelinde faaliyet göstermekte olup, yalnızca doğrulanmış ve güvenilir tedarikçilerle çalışarak ülkenin savunma gücünün sağlanmasında güvenilir bir ortaktır.",
    detailsTitle: "Şirket bilgileri",
    binLabel: "BIN",
    directorLabel: "Direktör",
    directorValue: "Begaidarov Kairat Ramazanovich",
    addressLabel: "Adres",
    addressValue: "010000, Astana, Turan Caddesi, bina 89/3, 1",
  },
  capabilities: {
    eyebrow: "Ne yapıyoruz",
    title: "Faaliyet alanları",
    subtitle: "Savunma tedarik zinciri boyunca eksiksiz bir çözüm yelpazesi.",
    cards: [
      {
        title: "Geliştirme ve üretim",
        desc: "Mühimmat, silah, askeri teçhizat, yedek parça, bileşen ve cihazlar.",
      },
      {
        title: "Hafif silahlar ve makineli tüfekler",
        desc: "Güvenlik yapıları için modern hafif silahlar ve makineli tüfekler.",
      },
      {
        title: "Zırhlı ve muharebe araçları",
        desc: "Tanklar, zırhlı araçlar ve muharebe teçhizatı — tedarik ve servis.",
      },
      {
        title: "Taktik teçhizat",
        desc: "Kişisel koruyucu ekipman ve özel birlik teçhizatı.",
      },
      {
        title: "Hizmet köpekleri (K9)",
        desc: "Güvenlik yapıları için eğitimli hizmet ve nöbetçi köpekleri.",
      },
      {
        title: "Optik ve cihazlar",
        desc: "Nişangahlar, gece görüş cihazları ve bileşenler.",
      },
      {
        title: "Onarım ve modernizasyon",
        desc: "Silah ve askeri teçhizatın onarımı, modernizasyonu ve ayarı.",
      },
      {
        title: "Özel malzemeler",
        desc: "Üretim için özel malzeme ve ekipman tedariki.",
      },
      {
        title: "Entegre çözümler",
        desc: "Tam döngü — tasarımdan devreye almaya kadar.",
      },
    ],
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
        title: "Zırhlı araçlar ve tanklar",
        desc: "Zırhlı araçlar, muharebe araçları ve tanklar.",
      },
      {
        title: "Taktik teçhizat ve zırh",
        desc: "Teçhizat, çelik yelek ve kişisel koruyucu ekipman.",
      },
      {
        title: "Hizmet köpekleri (K9)",
        desc: "Güvenlik yapıları için hizmet ve nöbetçi köpekleri.",
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
        title: "Tam döngü",
        desc: "Tasarımdan devreye alma ve servise kadar.",
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
      "Arsenal Pro Group LLP——为政府机构提供全周期武器与军事装备供应：武器、弹药、装甲车辆、战术装备与服务。哈萨克斯坦阿斯塔纳。",
  },
  brand: { suffix: "有限责任公司" },
  nav: {
    about: "关于我们",
    capabilities: "业务方向",
    categories: "供应范围",
    contacts: "联系我们",
    cta: "联系我们",
  },
  hero: {
    eyebrow: "面向政府机构的国防供应",
    title1: "武器与军事装备领域的",
    title2: "可靠合作伙伴",
    subtitle:
      "研发、生产、维修与服务——为增强国防实力提供全周期解决方案。我们只与经过核验的供应商合作。",
    ctaPrimary: "联系我们",
    ctaSecondary: "业务方向",
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
        title: "全周期",
        desc: "从研发、生产到服务与现代化改造。",
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
    p1: "Arsenal Pro Group LLP 是一家专注于武器与军事装备领域全周期业务的企业：从研发、生产到维修与服务保障。",
    p2: "公司在哈萨克斯坦共和国境内开展业务，只与经过核验的可靠供应商合作，是保障国家国防能力的可靠合作伙伴。",
    detailsTitle: "公司信息",
    binLabel: "商业识别号 (BIN)",
    directorLabel: "总经理",
    directorValue: "Begaidarov Kairat Ramazanovich",
    addressLabel: "地址",
    addressValue: "010000, 阿斯塔纳市, 图兰大街 89/3 号楼, 1",
  },
  capabilities: {
    eyebrow: "我们的业务",
    title: "业务方向",
    subtitle: "覆盖国防供应链的完整解决方案。",
    cards: [
      {
        title: "研发与生产",
        desc: "弹药、武器、军事装备、备件、零部件与仪器。",
      },
      {
        title: "轻武器与机枪",
        desc: "为安全机构提供的现代轻武器与机枪。",
      },
      {
        title: "装甲与战斗车辆",
        desc: "坦克、装甲车辆与战斗装备的供应与维护。",
      },
      {
        title: "战术装备",
        desc: "个人防护装备与特种部队装具。",
      },
      {
        title: "工作犬 (K9)",
        desc: "为安全机构提供的受训服务犬与警卫犬。",
      },
      {
        title: "光学与仪器",
        desc: "瞄准镜、夜视设备与零部件。",
      },
      {
        title: "维修与现代化改造",
        desc: "武器与军事装备的维修、现代化改造与调试。",
      },
      {
        title: "特种材料",
        desc: "为生产提供特种材料与设备。",
      },
      {
        title: "一体化解决方案",
        desc: "全周期——从设计到交付投用。",
      },
    ],
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
        title: "装甲车辆与坦克",
        desc: "装甲车辆、战斗车辆与坦克。",
      },
      {
        title: "战术装备与防弹护具",
        desc: "装具、防弹衣与个人防护装备。",
      },
      {
        title: "工作犬 (K9)",
        desc: "为安全机构提供的服务犬与警卫犬。",
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
        title: "全周期",
        desc: "从设计到交付投用与服务。",
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
