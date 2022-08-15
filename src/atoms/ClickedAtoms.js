import { atom } from 'recoil';

export const isClickedAtoms = atom({
  key: 'isClickedAtoms',
  default: {
    isPetClicked: false, //이거 배열 접근 ㄴㄴ 헿
    isServiceClicked: false,
    isTimeClicked: false,
  },
});
