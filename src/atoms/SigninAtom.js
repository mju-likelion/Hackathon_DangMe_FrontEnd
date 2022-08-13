import { atom } from 'recoil';

export const userInfo = atom({
  key: 'userinfo',
  default: [
    {
      userName: null,
      password: null,
      phoneNum: null,
      email: null,
      petName: null,
      age: null,
      weight: null,
      dogBreed: null,
      note: null,
      petimg: null,
    },
  ],
});

export const userLocation = atom({
  key: 'userLocation',
  default: [
    {
      address: '경기 용인시 처인구 명지로 116',
      coordinateX: 37.22299976877114,
      coordinateY: 127.18817232603816,
    },
  ],
});

export const shopList = atom({
  key: 'shopList',
  default: [],
});
