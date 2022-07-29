import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import kakao from "../img/kakao.png";
import naver from "../img/naver.png";
import arrow from "../img/arrow_next.png";
import {
  LoginStyled,
  FormStyled,
  LogoStyled,
  InputStyled,
  ForgotPassword,
  LoginBtn,
  SignInEmail,
  HrStyled,
  SimpleLoginKaKao,
  SimpleLoginNaver,
  GoToHome,
  ArrowStyled,
} from "../styles/LoginStlye";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [user,setUserId]=useState({email:null,password:null});
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  const gotoSignIn = () => {
    navigate("/signin");
  };
  const putInfo=(e,type)=>{
    setUserId(
  {
          ...user,
        [type]:e.target.value,
  }
    )
    
  }
  const handleLogin=(e)=>{
    const response=axios.post('/auth/login', user)
    response.then(response => {
      const { token } = response.data;
      axios.defaults.headers.common['Authorization'] = `${token}`;
      goToHome();
  }).catch((error)=>alert(error));
}

  return (
    <LoginStyled>
      <LogoStyled>
        <img alt="logo" src={logo} />
      </LogoStyled>
      <FormStyled>
        <InputStyled onBlur={(e)=>{putInfo(e,'email')}} type="text" placeholder="이메일" />
        <InputStyled onBlur={(e)=>{putInfo(e,'password')}} type="password" placeholder="비밀번호" maxLength={14} />

        <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
      </FormStyled>

      <SignInEmail onClick={gotoSignIn}>이메일로 회원가입</SignInEmail>

      <HrStyled>or</HrStyled>
      <SimpleLoginKaKao alt="kakao" src={kakao} />
      <SimpleLoginNaver alt="naver" src={naver} />

      <GoToHome onClick={goToHome}>
        <span>어플 둘러보기</span>
        <ArrowStyled alt="arrow" src={arrow} />
      </GoToHome>
    </LoginStyled>
  );
};
export default Login;
