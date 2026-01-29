import { Language } from './i18n.data';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  vegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: Record<Language, MenuCategory[]> = {
  en: [
    {
      id: 'starters',
      title: 'Starters',
      items: [
        {
          name: 'Beef tartare',
          description: 'Classic tartare with capers, pickles, and smoked mayo.',
          price: 'PLN 38'
        },
        {
          name: 'Burrata',
          description: 'Creamy burrata, heirloom tomatoes, basil pesto.',
          price: 'PLN 34',
          vegetarian: true
        }
      ]
    },
    {
      id: 'mains',
      title: 'Mains',
      items: [
        {
          name: 'Duck breast',
          description: 'With cherry sauce, celeriac puree, and kale.',
          price: 'PLN 62'
        },
        {
          name: 'Beet risotto',
          description: 'Roasted beet risotto with goat cheese and arugula.',
          price: 'PLN 48',
          vegetarian: true
        }
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        {
          name: 'Chocolate fondant',
          description: 'Chocolate fondant with vanilla ice cream.',
          price: 'PLN 26'
        },
        {
          name: 'Basque cheesecake',
          description: 'Basque-style cheesecake with raspberries and mint.',
          price: 'PLN 24'
        }
      ]
    }
  ],
  pl: [
    {
      id: 'przystawki',
      title: 'Przystawki',
      items: [
        {
          name: 'Tatar wo\u0142owy',
          description: 'Klasyczny tatar, kapary, pikle, majonez dymny.',
          price: '38 z\u0142'
        },
        {
          name: 'Burrata',
          description: 'Kremowa burrata, pomidory heirloom, pesto bazyliowe.',
          price: '34 z\u0142',
          vegetarian: true
        }
      ]
    },
    {
      id: 'dania',
      title: 'Dania g\u0142\u00f3wne',
      items: [
        {
          name: 'Pier\u015b kaczki',
          description: 'Z sosem z wi\u015bni, puree selerowym i jarmu\u017cem.',
          price: '62 z\u0142'
        },
        {
          name: 'Risotto',
          description: 'Risotto z pieczonym burakiem, kozim serem i rukol\u0105.',
          price: '48 z\u0142',
          vegetarian: true
        }
      ]
    },
    {
      id: 'desery',
      title: 'Desery',
      items: [
        {
          name: 'Fondant',
          description: 'Czekoladowy fondant z lodami waniliowymi.',
          price: '26 z\u0142'
        },
        {
          name: 'Sernik',
          description: 'Sernik baskijski z malinami i mi\u0119t\u0105.',
          price: '24 z\u0142'
        }
      ]
    }
  ]
};
