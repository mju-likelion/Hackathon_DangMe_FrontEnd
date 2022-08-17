import styled from 'styled-components';

export const SignupStyled = styled.div`
  margin-left: 26px;
`;

export const TopWrap = styled.div`
  margin-top: 30px;
`;

export const PrevArrowImg = styled.img`
  position: absolute;
  margin-top: 2px;
  left: 31px;
  width: 18px;
  height: 18px;
`;

export const SignupUserTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const SignupBar = styled.img`
  margin-top: 40px;
  margin-bottom: 45px;
  width: 64px;
`;

export const BarDiv = styled.div`
  text-align: center;
`;

export const SignupUserInfoBox = styled.div`
  margin-bottom: 34px;
`;

export const SignupUserInfo = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #848484;
  margin-bottom: 19px;
`;

export const EmailCheckBtn = styled.input`
  text-align: center;
  position: absolute;
  margin-left: -85px;
  width: 86px;
  height: 34px;
  font-size: 15px;
  border-radius: 30px;
  border: 1px solid #ffa724;
  background-color: #ffffff;
  color: #ffa724;
  top: 168px;
  &:active {
    color: #dddddd;
    border: 1px solid #dddddd;
  }
`;

export const SignupUserInfoInput = styled.input`
  width: 90%;
  height: 31px;
  border: 0;
  border-bottom: 1px solid #dddddd;
  font-size: 18px;
  &::placeholder {
    color: #dddddd;
  }
  &:focus {
    color: #000000;
    outline: none;
    border-bottom: 1px solid #ffa724;
  }
`;

export const SignupNextBtn = styled.button`
  display: block;
  width: 360px;
  height: 60px;
  background-color: #3385ff;
  border-radius: 30px;
  font-size: 24px;
  color: #ffffff;
  border: none;
  margin: auto;
  margin-top: 111px;

  &:active {
    background-color: #b1d0ff;
  }
`;
//중복되는 스타일 코드 -> 중복 최소화하게끔 수정하기 한 코드 내에서 margin값 따로 줄 수 있게 작성해보기

export const SignupCompleteBtn = styled.button`
  display: block;
  width: 360px;
  height: 60px;
  background-color: #3385ff;
  border-radius: 30px;
  font-size: 24px;
  color: #ffffff;
  border: none;
  margin: auto;
  margin-top: 11px;
  &:active {
    background-color: #b1d0ff;
  }
`;

export const SignupPetTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const SignupPetimgTxt = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #848484;
  margin-bottom: 25px;
  text-align: center;
`;

export const PetimgPrevBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: none;
  margin: auto;
  margin-bottom: 20px;
`;

export const PetImgPrev = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const SignupPetimgInput = styled.input`
  display: none;
`;

export const SignupPetimgBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #ffffff;
  color: #848484;
  border: none;
  text-align: center;
  display: block;
  font-size: 16px;
  margin: auto;
  margin-bottom: 20px;
`;

/* export const NextSignupPetBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: #848484;
  font-size: 18px;
  position: absolute;
`; */
