import { atom } from 'recoil';

export const reservation = atom({
  key: 'reservation',
  default: [
    {
      shopName: null,
      petName: null,
      service: null,
      date: null,
      time: null,
    },
  ],
});
