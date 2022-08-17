import arrow from '../img/arrow_prev.png';
import petInfobar from '../img/petInfobar.png';
import { useNavigate } from 'react-router-dom';
import {
  TopWrap,
  SignupUserTitle,
  SignupStyled,
  SignupBar,
  SignupPetimgTxt,
  SignupPetimgInput,
  SignupPetimgBtn,
  SignupUserInfoBox,
  SignupUserInfo,
  SignupUserInfoInput,
  SignupCompleteBtn,
  PetimgPrevBox,
  BarDiv,
  PrevArrowImg,
} from '../styles/SignupStyle';
import axios from 'axios';
import { userInfo } from '../atoms/SigninAtom';
import { errorSelector, useRecoilState } from 'recoil';
import { useRef, useState, useEffect } from 'react';
import { PetImgPrev } from '../styles/SignupStyle';
import { useForm } from 'react-hook-form';
import nonePetImg from '../img/nonePetImg.png';

const formData = new FormData(); //이미지 서버 전달위한 FormData객체 생성
const SignupDogInfo = () => {
  const [userinfo, setUserInfo] = useRecoilState(userInfo);
  const navigate = useNavigate();
  const petImg = useRef();
  const [fileImg, setFileImg] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      setUserInfo((previnfo) => {
        return {
          ...previnfo,
          [name]: value[name],
        };
      });
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  const goPrev = () => {
    navigate(-1);
  };
  const onSubmit = (data) => {
    handleSignin();
  };
  const onImgChange = (event) => {
    setFileImg(URL.createObjectURL(event.target.files[0])); //이미지 미리보기
    formData.append('petimg', event.target.files[0]);
  };
  const handleSignin = () => {
    for (let [key, value] of Object.entries(userinfo)) {
      formData.append(key, value);
    }
    axios
      .post('auth/register', formData)
      .then(function (response) {
        alert(response.data.data);
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onImgInputBtnClick = (e) => {
    e.preventDefault();
    petImg.current.click();
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
        <SignupUserTitle>반려견 정보 입력</SignupUserTitle>
      </TopWrap>
      <BarDiv>
        <SignupBar src={petInfobar} alt='petInfobar' />
      </BarDiv>
      <SignupPetimgTxt>반려견 사진 등록</SignupPetimgTxt>
      <PetimgPrevBox>
        {fileImg ? (
          <PetImgPrev alt='preview' src={fileImg} />
        ) : (
          <PetImgPrev alt='preview' src={nonePetImg} />
        )}
      </PetimgPrevBox>
      <SignupPetimgInput
        type='file'
        accept='image/png,image/jpg,image/jpeg'
        name='petimg'
        ref={petImg}
        onChange={onImgChange}
      ></SignupPetimgInput>
      {fileImg === '' ? (
        <SignupPetimgBtn onClick={onImgInputBtnClick}>
          사진 추가하기
        </SignupPetimgBtn>
      ) : (
        <SignupPetimgBtn onClick={onImgInputBtnClick}>
          사진 변경하기
        </SignupPetimgBtn>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <SignupStyled>
          <SignupUserInfoBox>
            <SignupUserInfo>이름</SignupUserInfo>
            <SignupUserInfoInput
              placeholder='반려견 이름'
              required
              onInvalid={(e) => {
                e.target.setCustomValidity('반려견 이름을 입력해주세요!');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              {...register('petName')}
            />
          </SignupUserInfoBox>
          <SignupUserInfoBox>
            <SignupUserInfo>나이</SignupUserInfo>
            <SignupUserInfoInput
              placeholder='반려견 나이'
              required
              onInvalid={(e) =>
                e.target.setCustomValidity('반려견 나이를 입력해주세요!')
              }
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              {...register('age')}
            />
          </SignupUserInfoBox>
          <SignupUserInfoBox>
            <SignupUserInfo>품종</SignupUserInfo>
            <SignupUserInfoInput
              placeholder='반려견 품종'
              required
              onInvalid={(e) =>
                e.target.setCustomValidity('반려견 품종을 입력해주세요!')
              }
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              {...register('dogBreed')}
            />
          </SignupUserInfoBox>
          <SignupUserInfoBox>
            <SignupUserInfo>몸무게</SignupUserInfo>
            <SignupUserInfoInput
              placeholder='반려견 몸무게'
              required
              onInvalid={(e) =>
                e.target.setCustomValidity('반려견 몸무게를 입력해주세요!')
              }
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              {...register('weight')}
            />
          </SignupUserInfoBox>
        </SignupStyled>
        <SignupCompleteBtn disabled={isSubmitting}>완료</SignupCompleteBtn>
      </form>
    </div>
  );
};

export default SignupDogInfo;
