import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import arrow from '../img/arrow_next.png';
import {
  LoginStyled,
  FormStyled,
  LogoStyled,
  InputStyled,
  LoginBtn,
  SignInEmail,
  GoToHome,
  ArrowStyled,
} from '../styles/LoginStlye';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
const Login = () => {
  const [user, setUserId] = useState({ email: null, password: null });
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm();
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      setUserId((previnfo) => {
        return {
          ...previnfo,
          [name]: value[name],
        };
      });
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/home');
  };
  const gotoSignIn = () => {
    navigate('/signin');
  };
  const onSubmit = (data) => {
    setUserId({
      email: data.email,
      password: data.password,
    });
    const response = axios.post('/auth/login', user);
    response
      .then((response) => {
        const { token } = response.data;
        axios.defaults.headers.common['Authorization'] = `${token}`;
        alert('로그인에 성공하였습니다.');
        goToHome();
      })
      .catch((error) => alert(error));
  };
  return (
    <LoginStyled>
      <LogoStyled alt='logo' src={logo} />
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled {...register('email')} type='email' placeholder='이메일' />
        <InputStyled
          {...register('password')}
          type='password'
          placeholder='비밀번호'
          maxLength={14}
        />
        <LoginBtn disabled={isSubmitting}>로그인</LoginBtn>
      </FormStyled>
      <SignInEmail onClick={gotoSignIn}>이메일로 회원가입</SignInEmail>
      <GoToHome onClick={goToHome}>
        <span>어플 둘러보기</span>
        <ArrowStyled alt='arrow' src={arrow} />
      </GoToHome>
    </LoginStyled>
  );
};
export default Login;
