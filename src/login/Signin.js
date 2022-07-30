import arrow from "../img/arrow_prev.png";
import userInfobar from "../img/userInfobar.png";
import { useNavigate } from "react-router-dom";
import {
  SigninStyled,
  TopWrap,
  PrevArrowImg,
  SigninUserTitle,
  SigninBar,
  SigninUserInfoBox,
  EmailCheckBtn,
  SigninUserInfo,
  SigninUserInfoInput,
  SigninNextBtn,
} from "../styles/SigninStyle";
import { userInfo } from "../atoms/SigninAtom";
import { useRecoilState } from "recoil";
import { useRef } from "react";
import axios from "axios";

const Signin = () => {
  const [userinfo, setUserInfo] = useRecoilState(userInfo);
  const userEmail = useRef();
  const userPw = useRef();
  const userConfirmPw = useRef();
  const userName = useRef();
  const userPhone = useRef();
  const navigate = useNavigate();
  const toDogInfo = () => {
    navigate("/signin/doginfo");
  };
  const goPrev = () => {
    navigate(-1);
  };
  //이메일 형식 체크
  const email_check = (email) => {
    var reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
  };
  //비밀번호 형식 체크
  function pw_check(pw) {
    const num = pw.search(/[0-9]/g); //숫자 여부
    const eng = pw.search(/[a-z]/gi); //영문자 여부
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi); //특수문자 여부

    if (pw.search(/\s/) !== -1) {
      //공백 체크
      return false;
    } else if (num < 0 || eng < 0 || spe < 0) {
      return false;
    } else {
      return true;
    }
  }
  //비밀번호 동일 여부
  const confirmPw_check = (confirmPw) => {
    if (userPw.current.value === confirmPw) return true;
    else return false;
  };
  //폰번호 형식 체크
  const phone_check = (phone) => {
    var reg = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    if (!reg.test(phone)) return false;
    else return true;
  };
  //입력 형식 올바르지 않을 때 경고 창
  function printEmailAlert() {
    alert("올바른 이메일 형식을 입력해주세요.");
  }
  function printEmailCheckAlert() {
    //이메일 중복 체크 버튼 안 눌렀을 때 체크 로직 추가하기
    alert("이메일 중복 체크 먼저 진행해주세요.");
  }
  function printEmailDupAlert() {
    alert("이미 가입된 회원입니다.");
  }
  function printPwAlert() {
    alert("비밀번호는 숫자+영문자+특수문자 조합으로 6자리 이상 입력해주세요.");
  }
  function printConfirmPwAlert() {
    alert("위에 적은 비밀번호와 비밀번호 확인란을 동일하게 입력해주세요.");
  }
  function printPhoneAlert() {
    alert("올바른 핸드폰 번호 형식을 입력해주세요.");
  }

  //회원가입 유저 정보란 올바르게 기입 됐는가 체크
  const confirmUserInfo = (e) => {
    e.preventDefault();
    if (!email_check(userEmail.current.value)) printEmailAlert();
    else if (!pw_check(userPw.current.value)) printPwAlert();
    else if (!confirmPw_check(userConfirmPw.current.value))
      printConfirmPwAlert();
    else if (!phone_check(userPhone.current.value)) printPhoneAlert();
    else {
      setUserInfo(() => {
        return {
          userName: userName.current.value,
          password: userPw.current.value,
          phoneNum: userPhone.current.value,
          email: userEmail.current.value,
        };
      });
      toDogInfo();
    }
  };

  //이메일 중복여부 검사
  const checkEmailDuplication = (Email) => {};

  //중복확인 버튼 눌렀을 때 이벤트 관리
  const confirmEmailDup = (e) => {
    e.preventDefault();
    const Email = userEmail.current.value;
    if (!email_check(Email)) printEmailAlert();
    else {
      const response = axios.post("/auth/emailsame", {
        email: Email,
      });
      response
        .then(() => {
          alert("사용 가능한 이메일입니다.");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <SigninStyled>
      <TopWrap>
        <PrevArrowImg src={arrow} alt="arrow_prev" onClick={goPrev} />
        <SigninUserTitle>회원가입</SigninUserTitle>
      </TopWrap>
      <SigninBar src={userInfobar} alt="userInfobar" />
      <SigninUserInfo>아이디(이메일)</SigninUserInfo>
      <SigninUserInfoInput ref={userEmail} placeholder="이메일 주소" />
      <EmailCheckBtn onClick={confirmEmailDup} type="submit" value="중복확인" />
      <form>
        <SigninUserInfoBox></SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>비밀번호</SigninUserInfo>
          <SigninUserInfoInput
            type="password"
            placeholder="6자 이상~14자 이하"
            maxLength={14}
            ref={userPw}
          ></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>비밀번호 확인</SigninUserInfo>
          <SigninUserInfoInput
            type="password"
            placeholder="비밀번호 확인"
            maxLength={14}
            ref={userConfirmPw}
          ></SigninUserInfoInput>
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>이름</SigninUserInfo>
          <SigninUserInfoInput placeholder="이름" ref={userName} />
        </SigninUserInfoBox>
        <SigninUserInfoBox>
          <SigninUserInfo>핸드폰 번호</SigninUserInfo>
          <SigninUserInfoInput
            placeholder="핸드폰 번호 ('-'를 제외하고 입력해주세요.)"
            maxLength={11}
            ref={userPhone}
          />
        </SigninUserInfoBox>
        <SigninNextBtn onClick={confirmUserInfo}>다음</SigninNextBtn>
      </form>
    </SigninStyled>
  );
};
export default Signin;
