import { atom } from 'recoil';

export const activeNavAtom = atom({
  key: 'activeNavAtom',
  default: {
    isNavActive: 0,
  },
});
