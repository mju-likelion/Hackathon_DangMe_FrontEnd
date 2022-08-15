import { atom } from 'recoil';

export const isPetClicked = atom({
  key: 'isPetClicked',
  default: {
    isClicked: false, //이거 배열 접근 ㄴㄴ 헿
  },
});
