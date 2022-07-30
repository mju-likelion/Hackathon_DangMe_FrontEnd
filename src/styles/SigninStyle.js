import styled from "styled-components";

export const SigninStyled = styled.div`
  margin-left: 26px;
`;

export const TopWrap = styled.div`
  margin-top: 30px;
`;

export const SigninUserTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  margin-left: 135px;
`;

export const SigninBar = styled.img`
  display: block;
  margin: 40px 182px 45px 156px;
`;

export const SigninUserInfoBox = styled.div`
  margin-bottom: 34px;
`;

export const SigninUserInfo = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #848484;
  margin-bottom: 19px;
`;

export const EmailCheckBtn = styled.input`
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

export const SigninUserInfoInput = styled.input`
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

export const SigninBottomBtn = styled.button`
  width: 360px;
  height: 60px;
  background-color: #3385ff;
  border-radius: 30px;
  font-size: 24px;
  color: #ffffff;
  border: none;
  margin-top: 90px;

  &:active {
    background-color: #b1d0ff;
  }
`;

export const SigninPetTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  margin-left: 105px;
`;

export const SigninPetimgTxt = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #848484;
  margin-bottom: 20px;
`;

export const PetimgPrevBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #848484;
  margin-left: 143px;
  margin-bottom: 5px;
`;

export const PetImgPrev = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const SigninPetimgInput = styled.input`
  display: none;
`;

export const SigninPetimgBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #ffffff;
  color: #848484;
  border: none;
  text-align: center;
  display: block;
  font-size: 14px;
  margin-left: 143px;
  margin-bottom: 40px;
`;

export const NextSigninPetBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: #848484;
  font-size: 18px;
  position: absolute;
`;
