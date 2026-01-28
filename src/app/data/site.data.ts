export const SITE_NAV = [
  { label: 'O nas', href: '#onas' },
  { label: 'Menu', href: '#menu' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'Rezerwacja', href: '#rezerwacja' },
  { label: 'Kontakt', href: '#kontakt' }
];

export const SITE = {
  name: 'AUREA',
  hero: {
    title: 'Modern local cuisine in the heart of the city',
    subtitle: 'Sezonowe menu, autorskie dania i kameralna atmosfera.',
    primaryCta: { label: 'Zarezerwuj stolik', href: '#rezerwacja' },
    secondaryCta: { label: 'Zobacz menu', href: '#menu' }
  },
  about: {
    eyebrow: 'O restauracji',
    title: 'AUREA to współczesna kuchnia lokalna',
    paragraphs: [
      'Tworzymy menu oparte o sezonowe składniki od lokalnych dostawców. Każdy talerz jest dopracowany w detalach i podkreśla naturalny smak produktów.',
      'Nasze autorskie kompozycje łączą klasykę z nowoczesnym twistem. W AUREA celebrujemy rytm pór roku i wyjątkowe momenty przy stole.',
      'Kameralne wnętrza, miękkie światło i uważna obsługa sprawiają, że każda wizyta jest małą celebracją.'
    ]
  },
  features: [
    {
      title: 'Sezonowe składniki',
      description: 'Menu zmienia się wraz z porami roku i dostępnością świeżych produktów.'
    },
    {
      title: 'Autorskie menu',
      description: 'Nowoczesne interpretacje klasycznych smaków i lokalne inspiracje.'
    },
    {
      title: 'Centrum miasta',
      description: 'W samym sercu Warszawy, kilka minut od najważniejszych punktów.'
    },
    {
      title: 'Kameralna atmosfera',
      description: 'Spokojne, eleganckie wnętrza idealne na wieczór we dwoje.'
    }
  ],
  contact: {
    address: 'ul. Nowomiejska 12, Warszawa',
    phone: '+48 123 456 789',
    email: 'kontakt@aurea.pl',
    hours: [
      { label: 'Pn–Pt', value: '12:00–22:00' },
      { label: 'Sb–Nd', value: '13:00–23:00' }
    ]
  },
  socials: [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'TikTok', href: '#', icon: 'tiktok' }
  ]
};
