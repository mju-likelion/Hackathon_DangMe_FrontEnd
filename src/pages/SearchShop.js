import React from 'react';
import ButtomNav from '../ButtomNav';
import { Route, Routes } from 'react-router-dom';
import {
  AddressPositionBox,
  TopWrap,
  PrevArrowImg,
  SearchAddressTitle,
  SearchBox,
  UserLocationDiv,
  LocationImg,
  LocationText,
} from '../styles/AddressStyle';
import {
  SearchAddressInput,
  SearchImgStyled,
  SearchInputBox,
} from '../styles/SearchShopStyle';

import prevIcon from '../img/arrow_prev_address.png';
import location from '../img/location.png';
import nextIcon from '../img/arrow_next_white.png';
import SearchImg from '../img/search_white.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userLocation } from '../atoms/SigninAtom';
const SearchShop = () => {
  const [, setUserLocation] = useRecoilState(userLocation);
  const navigate = useNavigate();

  const goPrev = () => {
    navigate(-1);
  };
  const onSuccess = (position) => {
    setUserLocation((prev) => {
      return {
        ...prev,
        coordinateX: position.coords.latitude,
        coordinateY: position.coords.longitude,
        default: [
          {
            coordinateX: position.coords.latitude,
            coordinateY: position.coords.longitude,
          },
        ],
      };
    });
    navigate('/location/shop');
  };
  const allowGPS = () => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  };
  return (
    <div>
      <AddressPositionBox>
        <TopWrap>
          <PrevArrowImg src={prevIcon} alt='prevBtn' onClick={goPrev} />
          <SearchAddressTitle>미용샵 검색</SearchAddressTitle>
          <SearchBox>
            <SearchInputBox>
              <SearchAddressInput />
              <SearchImgStyled src={SearchImg} />
            </SearchInputBox>
            <UserLocationDiv>
              <LocationImg src={location} alt='locationImg' />
              <LocationText onClick={allowGPS}>
                현재 위치로 설정하기
              </LocationText>
              <img src={nextIcon} alt='nextArrow' />
            </UserLocationDiv>
          </SearchBox>
        </TopWrap>
      </AddressPositionBox>
      <Routes>
        <Route path='/*' element={<ButtomNav />} />
      </Routes>
    </div>
  );
};

export default SearchShop;
