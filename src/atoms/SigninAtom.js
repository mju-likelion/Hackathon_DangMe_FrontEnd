import { atom } from "recoil";

export const userInfo = atom({
  key: "userinfo",
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
      petImg:null
    },
  ],
});
