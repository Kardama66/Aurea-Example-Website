import { Language } from './i18n.data';

export interface Review {
  name: string;
  rating: number;
  text: string;
}

export const REVIEWS: Record<Language, Review[]> = {
  en: [
    {
      name: 'Agnieszka',
      rating: 5,
      text: 'The best duck in town, refined flavors, and wonderful service.'
    },
    {
      name: 'Michal',
      rating: 5,
      text: 'Intimate atmosphere and beautiful presentation. Perfect for a date night.'
    },
    {
      name: 'Julia',
      rating: 4,
      text: 'The seasonal menu is impressive, and the risotto is a standout. We\'ll be back!'
    },
    {
      name: 'Tomasz',
      rating: 5,
      text: 'Great wines, quick service, and a perfect fondant.'
    }
  ],
  pl: [
    {
      name: 'Agnieszka',
      rating: 5,
      text: 'Najlepsza kaczka w mie\u015bcie, dopracowane smaki i \u015bwietna obs\u0142uga.'
    },
    {
      name: 'Micha\u0142',
      rating: 5,
      text: 'Kameralna atmosfera i pi\u0119kne podanie. Idealne miejsce na randk\u0119.'
    },
    {
      name: 'Julia',
      rating: 4,
      text: 'Sezonowe menu robi wra\u017cenie, risotto to sztos. Wr\u00f3cimy!'
    },
    {
      name: 'Tomasz',
      rating: 5,
      text: '\u015awietne wina, szybka obs\u0142uga i perfekcyjny fondant.'
    }
  ]
};
