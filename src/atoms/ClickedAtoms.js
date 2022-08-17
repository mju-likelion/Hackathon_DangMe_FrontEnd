import { atom } from 'recoil';

export const isPetAtoms = atom({
  key: 'isPetAtoms',
  default: {
    isPetClicked: false, //이거 배열 접근 ㄴㄴ 헿
  },
});

export const isServiceAtoms = atom({
  key: 'isServiceAtoms',
  default: {
    isServiceClicked: false,
  },
});

export const isTimeAtoms = atom({
  key: 'isTimeAtoms',
  default: {
    isTimeClicked: false,
  },
});
