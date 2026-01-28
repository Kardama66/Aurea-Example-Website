export interface Review {
  name: string;
  rating: number;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: 'Agnieszka',
    rating: 5,
    text: 'Najlepsza kaczka w mieście, dopracowane smaki i świetna obsługa.'
  },
  {
    name: 'Michał',
    rating: 5,
    text: 'Kameralna atmosfera i piękne podanie. Idealne miejsce na randkę.'
  },
  {
    name: 'Julia',
    rating: 4,
    text: 'Sezonowe menu robi wrażenie, risotto to sztos. Wrócimy!'
  },
  {
    name: 'Tomasz',
    rating: 5,
    text: 'Świetne wina, szybka obsługa i perfekcyjny fondant.'
  }
];
