import arrow from "../img/arrow_prev.png";
import petInfobar from "../img/petInfobar.png";
import { useNavigate } from "react-router-dom";
import {
  TopWrap,
  SigninPetTitle,
  SigninStyled,
  SigninBar,
  SigninPetimg,
  SigninPetimgBtn,
  SigninUserInfoBox,
  SigninUserInfo,
  SigninUserInfoInput,
  SigninBottomBtn,
  NextSigninPetBtn,
} from "../styles/SigninStyle";
import axios from 'axios';
import { userInfo } from "../atoms/SigninAtom";
import { useRecoilState } from "recoil";
const SigninDogInfo = () => {
  const [userinfo,setUserInfo]=useRecoilState(userInfo);
  const navigate = useNavigate();
  const goPrev = () => {
    navigate(-1);
  };
  const goToHome = () => {
    navigate("/home");
  };
  const putInfo=(event,type)=>{
      setUserInfo(
        {
        ...userinfo,
        [type] : event.target.value
      }
      );
  }
  const handleSignin=async()=>{
    await axios.post('/auth/register',userinfo)
    .then(function (response){
      console.log("회원가입 성공!");
      alert(response.data);
      navigate('/');
    })
    .catch(function (error){
      console.log(error);
    });
    console.log(userinfo);
  }
  return (
    <SigninStyled>
      <TopWrap>
        <img src={arrow} alt="arrow_prev" onClick={goPrev} />
        <SigninPetTitle>반려견 정보 입력</SigninPetTitle>
      </TopWrap>
      <SigninBar src={petInfobar} alt="petInfobar" />
      <SigninPetimg>반려견 사진 등록</SigninPetimg>
      <SigninPetimgBtn>사진 추가하기</SigninPetimgBtn>
      <form>
        <SigninUserInfoBox>
          <SigninUserInfo>이름</SigninUserInfo>
          <SigninUserInfoInput placeholder="반려견 이름" onBlur={(e)=>{putInfo(e,'pet_name')}}></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>나이</SigninUserInfo>
          <SigninUserInfoInput placeholder="반려견 나이" onBlur={(e)=>{putInfo(e,'age')}}></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>품종</SigninUserInfo>
          <SigninUserInfoInput placeholder="반려견 품종" onBlur={(e)=>{putInfo(e,'dog_breed')}}></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>몸무게</SigninUserInfo>
          <SigninUserInfoInput placeholder="반려견 몸무게" onBlur={(e)=>{putInfo(e,'weight')}}></SigninUserInfoInput>
        </SigninUserInfoBox>
        <NextSigninPetBtn onClick={handleSignin}>다음에 입력하기</NextSigninPetBtn>
        <SigninBottomBtn onClick={handleSignin}>완료</SigninBottomBtn>
      </form>
    </SigninStyled>
  );
};

export default SigninDogInfo;
