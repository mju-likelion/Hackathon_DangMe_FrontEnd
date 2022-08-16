import arrow from '../img/arrow_prev.png';
import userInfobar from '../img/userInfobar.png';
import { useNavigate } from 'react-router-dom';
import {
  SigninStyled,
  TopWrap,
  SigninUserTitle,
  SigninBar,
  SigninUserInfoBox,
  EmailCheckBtn,
  SigninUserInfo,
  SigninUserInfoInput,
  SigninNextBtn,
  PrevArrowImg,
  BarDiv,
} from '../styles/SigninStyle';
import { userInfo } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useForm } from 'react-hook-form';
const Signin = () => {
  const [userinfo, setUserInfo] = useRecoilState(userInfo);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const handleChange = () => {
    console.log(getValues('phoneNum'));
  };
  const navigate = useNavigate();
  const toDogInfo = () => {
    navigate('/signin/doginfo');
  };
  const goPrev = () => {
    navigate(-1);
  };
  //이메일 형식 체크
  const email_check = (email) => {
    var reg =
      //eslint-disable-next-line
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
  };
  //비밀번호 형식 체크
  function pw_check(pw) {
    //eslint-disable-next-line
    const num = pw.search(/[0-9]/g); //숫자 여부
    //eslint-disable-next-line
    const eng = pw.search(/[a-z]/gi); //영문자 여부
    //eslint-disable-next-line
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi); //특수문자 여부
    //eslint-disable-next-line
    if (pw.search(/\s/) !== -1) {
      //공백 체크
      return false;
    } else if (num < 0 || eng < 0 || spe < 0) {
      return false;
    } else {
      return true;
    }
  }
  const onSubmit = (data) => {
    setUserInfo({
      userName: data.userName,
      password: data.password,
      email: data.email,
      phoneNum: data.phoneNum,
    });
    toDogInfo();
  };
  //중복확인 버튼 눌렀을 때 이벤트 관리
  const confirmEmailDup = (e) => {
    e.preventDefault();
    const Email = getValues('email');
    if (!email_check(Email)) alert('올바른 이메일 형식으로 입력해주세요');
    else {
      const response = axios.post('/auth/emailsame', {
        email: Email,
      });
      response
        .then(() => {
          alert('사용 가능한 이메일입니다.');
        })
        .catch((e) => {
          alert(e);
        });
    }
  };
  const errorStyled = {
    position: 'absolute',
    color: 'red',
    fontSize: '14px',
  };
  return (
    <div>
      <TopWrap>
        <PrevArrowImg src={arrow} alt='arrow_prev' onClick={goPrev} />
        <SigninUserTitle>회원가입</SigninUserTitle>
      </TopWrap>
      <BarDiv>
        <SigninBar src={userInfobar} alt='userInfobar' />
      </BarDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SigninStyled>
          <SigninUserInfo>아이디(이메일)</SigninUserInfo>
          <SigninUserInfoInput
            placeholder='이메일 주소'
            required
            onInvalid={(e) => {
              e.target.setCustomValidity('이메일은 필수 입력입니다!');
            }}
            onInput={(e) => {
              e.target.setCustomValidity('');
            }}
            {...register('email', {
              pattern: {
                value:
                  //eslint-disable-next-line
                  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식에 맞게 입력해주세요',
              },
            })}
          />
          <EmailCheckBtn
            onClick={confirmEmailDup}
            value='중복확인'
            type='button'
          />
          {errors.email && <p style={errorStyled}>{errors.email.message}</p>}
          <SigninUserInfoBox></SigninUserInfoBox>
          <SigninUserInfoBox>
            <SigninUserInfo>비밀번호</SigninUserInfo>
            <SigninUserInfoInput
              type='password'
              placeholder='6자 이상~14자 이하'
              minLength={6}
              maxLength={14}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity('비밀번호는 필수 입력입니다!');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              {...register('password', {
                validate: pw_check,
                maxLength: 14,
                minLength: 6,
              })}
            />
            {errors.password && (
              <p style={errorStyled}>영문, 숫자, 특수문자를 포함해주세요</p>
            )}
          </SigninUserInfoBox>
          <SigninUserInfoBox>
            <SigninUserInfo>비밀번호 확인</SigninUserInfo>
            <SigninUserInfoInput
              type='password'
              placeholder='비밀번호 확인'
              minLength={6}
              maxLength={14}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity('비밀번호를 확인해주세요!');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              {...register('confirmPassword', {
                validate: (value) => value === getValues('password'),
              })}
            />
            {errors.confirmPassword && (
              <p style={errorStyled}>같은 비밀번호를 입력해주세요</p>
            )}
          </SigninUserInfoBox>
          <SigninUserInfoBox>
            <SigninUserInfo>이름</SigninUserInfo>
            <SigninUserInfoInput
              placeholder='이름'
              required
              onInvalid={(e) => {
                e.target.setCustomValidity('이름은 필수 입력입니다!');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              {...register('userName')}
            />
          </SigninUserInfoBox>
          <SigninUserInfoBox>
            <SigninUserInfo>핸드폰 번호</SigninUserInfo>
            <SigninUserInfoInput
              onChange={handleChange}
              placeholder="핸드폰 번호 ('-'를 제외하고 입력해주세요.)"
              maxLength={11}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity('이름은 필수 입력입니다!');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              {...register('phoneNum', {
                pattern: {
                  //eslint-disable-next-line
                  value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
                  message: "'-'를 제외한 숫자만 입력해주세요",
                },
              })}
            />
            {errors.phoneNum && (
              <p style={errorStyled}>{errors.phoneNum.message}</p>
            )}
          </SigninUserInfoBox>
        </SigninStyled>
        <SigninNextBtn type='submit' disabled={isSubmitting}>
          다음
        </SigninNextBtn>
      </form>
    </div>
  );
};

export default Signin;
