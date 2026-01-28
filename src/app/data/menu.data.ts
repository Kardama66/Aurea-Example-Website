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

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'przystawki',
    title: 'Przystawki',
    items: [
      {
        name: 'Tatar wołowy',
        description: 'Klasyczny tatar, kapary, pikle, majonez dymny.',
        price: '38 zł'
      },
      {
        name: 'Burrata',
        description: 'Kremowa burrata, pomidory heirloom, pesto bazyliowe.',
        price: '34 zł',
        vegetarian: true
      }
    ]
  },
  {
    id: 'dania',
    title: 'Dania główne',
    items: [
      {
        name: 'Pierś kaczki',
        description: 'Z sosem z wiśni, puree selerowym i jarmużem.',
        price: '62 zł'
      },
      {
        name: 'Risotto',
        description: 'Risotto z pieczonym burakiem, kozim serem i rukolą.',
        price: '48 zł',
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
        price: '26 zł'
      },
      {
        name: 'Sernik',
        description: 'Sernik baskijski z malinami i miętą.',
        price: '24 zł'
      }
    ]
  }
];
