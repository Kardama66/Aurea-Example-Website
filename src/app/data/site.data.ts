import { Language } from './i18n.data';

export interface SiteNavItem {
  label: string;
  href: string;
}

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  note: string;
  imageAlt: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

export interface AboutSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  imageAlt: string;
}

export interface MenuSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
  downloadLabel: string;
  downloadAria: string;
  vegetarianLabel: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface ReviewsSection {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface ReservationSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
  labels: {
    date: string;
    time: string;
    guests: string;
    contact: string;
  };
  errors: {
    date: string;
    time: string;
    guests: string;
    contact: string;
  };
  contactPlaceholder: string;
  submitLabel: string;
  successMessage: string;
}

export interface ContactHours {
  label: string;
  value: string;
}

export interface ContactSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  addressLabel: string;
  hoursLabel: string;
  phoneLabel: string;
  mapTitle: string;
  mapEmbedUrl: string;
  address: string;
  phone: string;
  email: string;
  hours: ContactHours[];
}

export interface FooterSection {
  tagline: string;
  socialLabel: string;
  credit: string;
}

export type SocialIcon = 'instagram' | 'facebook' | 'tiktok';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface HeaderSection {
  openMenuLabel: string;
  closeMenuLabel: string;
  menuLabel: string;
  preferencesLabel: string;
  themeLabel: string;
  themeLight: string;
  themeDark: string;
  themeToLight: string;
  themeToDark: string;
  languageLabel: string;
  languageEnglishShort: string;
  languagePolishShort: string;
  languageToEnglish: string;
  languageToPolish: string;
}

export interface SiteData {
  name: string;
  metaTitle: string;
  hero: HeroSection;
  about: AboutSection;
  menu: MenuSection;
  features: FeaturesSection;
  reviews: ReviewsSection;
  reservation: ReservationSection;
  contact: ContactSection;
  footer: FooterSection;
  header: HeaderSection;
  socials: SocialLink[];
}

export const SITE_NAV: Record<Language, SiteNavItem[]> = {
  en: [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Reservations', href: '#reservation' },
    { label: 'Contact', href: '#contact' }
  ],
  pl: [
    { label: 'O nas', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Opinie', href: '#reviews' },
    { label: 'Rezerwacja', href: '#reservation' },
    { label: 'Kontakt', href: '#contact' }
  ]
};

export const SITE: Record<Language, SiteData> = {
  en: {
    name: 'AUREA',
    metaTitle: 'AUREA - Restaurant in central Warsaw',
    hero: {
      title: 'Modern local cuisine in the heart of the city',
      subtitle: 'Seasonal menus, signature dishes, and an intimate atmosphere.',
      note: 'Open the menu and reserve a table below',
      imageAlt: 'Elegant AUREA dining room',
      primaryCta: { label: 'Reserve a table', href: '#reservation' },
      secondaryCta: { label: 'View the menu', href: '#menu' }
    },
    about: {
      eyebrow: 'About the restaurant',
      title: 'AUREA is contemporary local cuisine',
      subtitle: 'Cuisine that celebrates the rhythm of the city.',
      paragraphs: [
        'We build menus around seasonal ingredients sourced from trusted local suppliers. Every plate is refined to highlight natural flavors.',
        'Our signature compositions blend classic foundations with a modern twist. At AUREA we celebrate the rhythm of the seasons and unforgettable moments at the table.',
        'An intimate interior, soft light, and attentive service make every visit a small celebration.'
      ],
      imageAlt: 'Plating detail at AUREA'
    },
    menu: {
      eyebrow: 'Menu',
      title: 'Seasonal selection at AUREA',
      subtitle: 'A short selection of dishes built around fresh ingredients and signature pairings.',
      note: 'The full menu includes seasonal specials and a curated wine list.',
      downloadLabel: 'Download full menu (PDF)',
      downloadAria: 'Download the full menu as PDF',
      vegetarianLabel: 'Vegetarian'
    },
    features: {
      eyebrow: 'Why AUREA',
      title: 'A place where every detail works together',
      subtitle: 'We care about every detail, from ingredients and service to the atmosphere.',
      items: [
        {
          title: 'Seasonal ingredients',
          description: 'The menu changes with the seasons and the availability of fresh produce.'
        },
        {
          title: 'Signature menu',
          description: 'Modern interpretations of classic flavors with local inspiration.'
        },
        {
          title: 'City center',
          description: 'In the heart of Warsaw, minutes from the city\'s most important spots.'
        },
        {
          title: 'Intimate atmosphere',
          description: 'Calm, elegant interiors ideal for a dinner for two.'
        }
      ]
    },
    reviews: {
      eyebrow: 'Reviews',
      title: 'Guests love the AUREA atmosphere',
      subtitle: 'A few words from our regulars.'
    },
    reservation: {
      eyebrow: 'Reservations',
      title: 'Reserve a table online',
      subtitle: 'Fill out the form and we\'ll confirm by phone or email.',
      note: 'Prefer to talk? Call us at +48 123 456 789.',
      labels: {
        date: 'Date',
        time: 'Time',
        guests: 'Guests',
        contact: 'Phone or email'
      },
      errors: {
        date: 'Please choose a date.',
        time: 'Please choose a time.',
        guests: 'Enter the number of guests (1-12).',
        contact: 'Enter a valid phone number or email address.'
      },
      contactPlaceholder: 'e.g. anna@email.com',
      submitLabel: 'Send reservation',
      successMessage: 'Thank you! We\'ll confirm your reservation shortly.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Visit us in central Warsaw',
      subtitle: 'We accept reservations daily. We\'d love to host you at AUREA.',
      addressLabel: 'Address',
      hoursLabel: 'Hours',
      phoneLabel: 'Phone / Email',
      mapTitle: 'Map to AUREA',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Nowomiejska%2012%20Warsaw&t=&z=15&ie=UTF8&iwloc=&output=embed',
      address: '12 Nowomiejska St., Warsaw',
      phone: '+48 123 456 789',
      email: 'hello@aurea.pl',
      hours: [
        { label: 'Mon-Fri', value: '12:00-22:00' },
        { label: 'Sat-Sun', value: '13:00-23:00' }
      ]
    },
    footer: {
      tagline: 'Reserve a table and enjoy an evening of signature cuisine in the heart of Warsaw.',
      socialLabel: 'Social',
      credit: 'Site by Your Name'
    },
    header: {
      openMenuLabel: 'Open menu',
      closeMenuLabel: 'Close menu',
      menuLabel: 'Menu',
      preferencesLabel: 'Preferences',
      themeLabel: 'Theme',
      themeLight: 'Light',
      themeDark: 'Dark',
      themeToLight: 'Switch to light theme',
      themeToDark: 'Switch to dark theme',
      languageLabel: 'Language',
      languageEnglishShort: 'EN',
      languagePolishShort: 'PL',
      languageToEnglish: 'Switch to English',
      languageToPolish: 'Switch to Polish'
    },
    socials: [
      { label: 'Instagram', href: '#', icon: 'instagram' },
      { label: 'Facebook', href: '#', icon: 'facebook' },
      { label: 'TikTok', href: '#', icon: 'tiktok' }
    ]
  },
  pl: {
    name: 'AUREA',
    metaTitle: 'AUREA - Restauracja w centrum Warszawy',
    hero: {
      title: 'Nowoczesna kuchnia lokalna w sercu miasta',
      subtitle: 'Sezonowe menu, autorskie dania i kameralna atmosfera.',
      note: 'Otw\u00f3rz menu i zarezerwuj stolik poni\u017cej',
      imageAlt: 'Elegancka sala restauracji AUREA',
      primaryCta: { label: 'Zarezerwuj stolik', href: '#reservation' },
      secondaryCta: { label: 'Zobacz menu', href: '#menu' }
    },
    about: {
      eyebrow: 'O restauracji',
      title: 'AUREA to wsp\u00f3\u0142czesna kuchnia lokalna',
      subtitle: 'Kuchnia, kt\u00f3ra celebruje rytm miasta.',
      paragraphs: [
        'Tworzymy menu oparte o sezonowe sk\u0142adniki od lokalnych dostawc\u00f3w. Ka\u017cdy talerz jest dopracowany w detalach i podkre\u015bla naturalny smak produkt\u00f3w.',
        'Nasze autorskie kompozycje \u0142\u0105cz\u0105 klasyk\u0119 z nowoczesnym twistem. W AUREA celebrujemy rytm p\u00f3r roku i wyj\u0105tkowe momenty przy stole.',
        'Kameralne wn\u0119trza, mi\u0119kkie \u015bwiat\u0142o i uwa\u017cna obs\u0142uga sprawiaj\u0105, \u017ce ka\u017cda wizyta jest ma\u0142\u0105 celebracj\u0105.'
      ],
      imageAlt: 'Detal podania w restauracji AUREA'
    },
    menu: {
      eyebrow: 'Menu',
      title: 'Sezonowa selekcja AUREA',
      subtitle: 'Nasz kr\u00f3tki wyb\u00f3r da\u0144 oparty o \u015bwie\u017ce sk\u0142adniki i autorskie po\u0142\u0105czenia.',
      note: 'Pe\u0142ne menu zawiera dodatkowe propozycje sezonowe i kart\u0119 win.',
      downloadLabel: 'Pobierz pe\u0142ne menu (PDF)',
      downloadAria: 'Pobierz pe\u0142ne menu w formacie PDF',
      vegetarianLabel: 'Wegetaria\u0144skie'
    },
    features: {
      eyebrow: 'Dlaczego AUREA',
      title: 'Miejsce, w kt\u00f3rym wszystko gra',
      subtitle: 'Dbamy o ka\u017cdy detal - od sk\u0142adnik\u00f3w, przez obs\u0142ug\u0119, po atmosfer\u0119.',
      items: [
        {
          title: 'Sezonowe sk\u0142adniki',
          description: 'Menu zmienia si\u0119 wraz z porami roku i dost\u0119pno\u015bci\u0105 \u015bwie\u017cych produkt\u00f3w.'
        },
        {
          title: 'Autorskie menu',
          description: 'Nowoczesne interpretacje klasycznych smak\u00f3w i lokalne inspiracje.'
        },
        {
          title: 'Centrum miasta',
          description: 'W samym sercu Warszawy, kilka minut od najwa\u017cniejszych punkt\u00f3w.'
        },
        {
          title: 'Kameralna atmosfera',
          description: 'Spokojne, eleganckie wn\u0119trza idealne na wiecz\u00f3r we dwoje.'
        }
      ]
    },
    reviews: {
      eyebrow: 'Opinie',
      title: 'Go\u015bcie kochaj\u0105 atmosfer\u0119 AUREA',
      subtitle: 'Kilka s\u0142\u00f3w od naszych sta\u0142ych bywalc\u00f3w.'
    },
    reservation: {
      eyebrow: 'Rezerwacja',
      title: 'Zarezerwuj stolik online',
      subtitle: 'Wype\u0142nij formularz, a my potwierdzimy rezerwacj\u0119 telefonicznie lub mailowo.',
      note: 'Preferujesz rozmow\u0119? Zadzwo\u0144 pod numer +48 123 456 789.',
      labels: {
        date: 'Data',
        time: 'Godzina',
        guests: 'Liczba os\u00f3b',
        contact: 'Telefon lub email'
      },
      errors: {
        date: 'Wybierz dat\u0119.',
        time: 'Wybierz godzin\u0119.',
        guests: 'Podaj liczb\u0119 os\u00f3b (1-12).',
        contact: 'Podaj poprawny numer telefonu lub adres email.'
      },
      contactPlaceholder: 'np. anna@email.pl',
      submitLabel: 'Wy\u015blij rezerwacj\u0119',
      successMessage: 'Dzi\u0119kujemy! Wkr\u00f3tce potwierdzimy Twoj\u0105 rezerwacj\u0119.'
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Odwied\u017a nas w centrum Warszawy',
      subtitle: 'Rezerwacje przyjmujemy codziennie. Zapraszamy do AUREA.',
      addressLabel: 'Adres',
      hoursLabel: 'Godziny',
      phoneLabel: 'Telefon / Email',
      mapTitle: 'Mapa dojazdu do AUREA',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Nowomiejska%2012%20Warszawa&t=&z=15&ie=UTF8&iwloc=&output=embed',
      address: 'ul. Nowomiejska 12, Warszawa',
      phone: '+48 123 456 789',
      email: 'kontakt@aurea.pl',
      hours: [
        { label: 'Pn-Pt', value: '12:00-22:00' },
        { label: 'Sb-Nd', value: '13:00-23:00' }
      ]
    },
    footer: {
      tagline: 'Zarezerwuj stolik i prze\u017cyj wiecz\u00f3r z autorsk\u0105 kuchni\u0105 w centrum Warszawy.',
      socialLabel: 'Social media',
      credit: 'Strona wykonana przez Twoje Imi\u0119'
    },
    header: {
      openMenuLabel: 'Otw\u00f3rz menu',
      closeMenuLabel: 'Zamknij menu',
      menuLabel: 'Menu',
      preferencesLabel: 'Ustawienia',
      themeLabel: 'Motyw',
      themeLight: 'Jasny',
      themeDark: 'Ciemny',
      themeToLight: 'Prze\u0142\u0105cz na jasny motyw',
      themeToDark: 'Prze\u0142\u0105cz na ciemny motyw',
      languageLabel: 'J\u0119zyk',
      languageEnglishShort: 'EN',
      languagePolishShort: 'PL',
      languageToEnglish: 'Prze\u0142\u0105cz na angielski',
      languageToPolish: 'Prze\u0142\u0105cz na polski'
    },
    socials: [
      { label: 'Instagram', href: '#', icon: 'instagram' },
      { label: 'Facebook', href: '#', icon: 'facebook' },
      { label: 'TikTok', href: '#', icon: 'tiktok' }
    ]
  }
};
