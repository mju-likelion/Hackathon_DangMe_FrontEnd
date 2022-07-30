import arrow from "../img/arrow_prev.png";
import petInfobar from "../img/petInfobar.png";
import { useNavigate } from "react-router-dom";
import {
  TopWrap,
  PrevArrowImg,
  SigninPetTitle,
  SigninStyled,
  SigninBar,
  SigninPetimgTxt,
  SigninPetimgInput,
  SigninPetimgBtn,
  SigninUserInfoBox,
  SigninUserInfo,
  SigninUserInfoInput,
  SigninCompleteBtn,
  NextSigninPetBtn,
  PetimgPrevBox,
} from "../styles/SigninStyle";
import axios from "axios";
import { userInfo } from "../atoms/SigninAtom";
import { useRecoilState } from "recoil";
import { useRef, useState } from "react";
import { PetImgPrev } from "./../styles/SigninStyle";
const formData = new FormData(); //이미지 서버 전달위한 FormData객체 생성
const SigninDogInfo = () => {
  const [userinfo, setUserInfo] = useRecoilState(userInfo);
  const navigate = useNavigate();
  const petImg = useRef();
  const [fileImg, setFileImg] = useState("");

  const goPrev = () => {
    navigate(-1);
  };
  const goToHome = () => {
    navigate("/home");
  };

  const onImgChange = async (event) => {
    setFileImg(URL.createObjectURL(event.target.files[0])); //이미지 미리보기
    formData.append("petimg", event.target.files[0]);
  };
  const putInfo = (event, type) => {
    setUserInfo({
      ...userinfo,
      [type]: event.target.value,
    });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    formData.append("data", JSON.stringify(userinfo));
    console.log(formData.get("data"));
    axios
      .post("/auth/register", formData)
      .then(function (response) {
        alert(response.data.data);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onImgInputBtnClick = (e) => {
    e.preventDefault();
    petImg.current.click();
  };
  return (
    <SigninStyled>
      <TopWrap>
        <PrevArrowImg src={arrow} alt="arrow_prev" onClick={goPrev} />
        <SigninPetTitle>반려견 정보 입력</SigninPetTitle>
      </TopWrap>
      <SigninBar src={petInfobar} alt="petInfobar" />
      <SigninPetimgTxt>반려견 사진 등록</SigninPetimgTxt>
      <PetimgPrevBox>
        {fileImg && <PetImgPrev alt="preview" src={fileImg} />}
      </PetimgPrevBox>
      <SigninPetimgInput
        type="file"
        accept="image/png,image/jpg,image/jpeg"
        name="petimg"
        ref={petImg}
        onChange={onImgChange}
      ></SigninPetimgInput>
      {fileImg === "" ? (
        <SigninPetimgBtn onClick={onImgInputBtnClick}>
          사진 추가하기
        </SigninPetimgBtn>
      ) : (
        <SigninPetimgBtn onClick={onImgInputBtnClick}>
          사진 변경하기
        </SigninPetimgBtn>
      )}
      <form>
        <SigninUserInfoBox>
          <SigninUserInfo>이름</SigninUserInfo>
          <SigninUserInfoInput
            placeholder="반려견 이름"
            onBlur={(e) => {
              putInfo(e, "petName");
            }}
          ></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>나이</SigninUserInfo>
          <SigninUserInfoInput
            placeholder="반려견 나이"
            onBlur={(e) => {
              putInfo(e, "age");
            }}
          ></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>품종</SigninUserInfo>
          <SigninUserInfoInput
            placeholder="반려견 품종"
            onBlur={(e) => {
              putInfo(e, "dogBreed");
            }}
          ></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>몸무게</SigninUserInfo>
          <SigninUserInfoInput
            placeholder="반려견 몸무게"
            onBlur={(e) => {
              putInfo(e, "weight");
            }}
          ></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninCompleteBtn onClick={handleSignin}>완료</SigninCompleteBtn>
      </form>
    </SigninStyled>
  );
};

export default SigninDogInfo;
