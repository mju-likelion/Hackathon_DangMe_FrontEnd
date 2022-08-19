import { Routes, Route, useNavigate } from 'react-router-dom';
import BottomNav from '../BottomNav';
import {
  ReservationPrevIcon,
  ReservationTopBox,
  ReservationTopBoxText,
  ReservSelectPetBox,
  ReservationDefaultText,
  ReservSelectShopBox,
  ReservSelectMap,
  ReservSelectMapIcon,
  ReservSelectShopTitleBox,
  ReservNoneShop,
  ReservNextBtn,
} from '../styles/ReservationStyle';
import {
  HomeReservInfoListWrap,
  PetShopInfoBox,
  PetShopInfoImg,
  PetShopInfoName,
  PetShopInfoAddress,
  PetShopInfoClosed,
} from '../styles/HomeStyle';
import prevIcon from '../img/arrow_prev_white.png';
import tempPetData from '../data/tempPetData';
import nextIcon from '../img/arrow_next_home.png';
import petShopImg from '../img/petShop.png';
import PetInfo from '../components/PetInfo';
import { useRecoilState, useRecoilValue } from 'recoil';
import { reservation } from '../atoms/ReservationAtom';
import { shopList } from '../atoms/SigninAtom';
import { useState, useEffect } from 'react';
import { selectedShop } from '../atoms/ReservationAtom';
import { petList } from '../atoms/ReservationAtom';
import { isPetAtoms } from '../atoms/ClickedAtoms';
const Reservation = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate(-1);
  };
  const goToMap = () => {
    navigate('/maps');
  };
  const goToNext = () => {
    navigate(`/reservation/${selectedShopInfo.id}/${reservationInfo.petId}`);
  };

  const selectedShopInfo = useRecoilValue(selectedShop);
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);
  const petlist = useRecoilValue(petList);

  useEffect(() => {
    setReservationInfo((prev) => {
      return {
        ...prev,
        shopName: selectedShopInfo.shopName,
        shopImg: selectedShopInfo.shopImg,
        date: null,
      };
    });
  }, []);
  return (
    <>
      <ReservationTopBox>
        <ReservationPrevIcon src={prevIcon} alt='뒤로가기' onClick={goPrev} />
        <ReservationTopBoxText>예약하기</ReservationTopBoxText>
      </ReservationTopBox>
      <ReservSelectPetBox>
        <ReservationDefaultText>반려견을 선택해주세요</ReservationDefaultText>
        <HomeReservInfoListWrap>
          {petlist.map((pet, index) => (
            <>
              <PetInfo
                key={index.toString()}
                petid={pet.id}
                petname={pet.petName}
                petimg={pet.petImg}
                petshop={pet.shopName}
              />
            </>
          ))}
        </HomeReservInfoListWrap>
      </ReservSelectPetBox>
      <ReservSelectShopBox>
        <ReservSelectShopTitleBox>
          <ReservationDefaultText>미용샵을 선택해주세요</ReservationDefaultText>
          <ReservSelectMap onClick={goToMap}>지도에서 선택하기</ReservSelectMap>
          <ReservSelectMapIcon
            src={nextIcon}
            alt='지도 바로가기'
            onClick={goToMap}
          />
        </ReservSelectShopTitleBox>
        {selectedShopInfo.id === undefined ? (
          <ReservNoneShop>선택한 미용샵이 없습니다</ReservNoneShop>
        ) : (
          <PetShopInfoBox style={{ marginTop: '20px' }}>
            <PetShopInfoImg src={selectedShopInfo.shopImg} alt='petshop' />
            <PetShopInfoName>{selectedShopInfo.shopName}</PetShopInfoName>
            <PetShopInfoAddress>{selectedShopInfo.address}</PetShopInfoAddress>
            <PetShopInfoClosed>{selectedShopInfo.workHoly}</PetShopInfoClosed>
          </PetShopInfoBox>
        )}
      </ReservSelectShopBox>
      <ReservNextBtn
        onClick={goToNext}
        style={{
          marginTop: '204px',
          backgroundColor: '#3385FF',
          color: '#ffffff',
        }}
      >
        다음
      </ReservNextBtn>
      <BottomNav />
    </>
  );
};

export default Reservation;
