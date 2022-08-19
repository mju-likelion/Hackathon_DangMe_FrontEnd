import React, { useEffect, useState } from 'react';
import BottomNav from '../BottomNav';
import { Route, Routes } from 'react-router-dom';
import {
  AddressPositionBox,
  TopWrap,
  PrevArrowImg,
  SearchAddressTitle,
  SearchBox,
} from '../styles/AddressStyle';
import {
  SearchAddressInput,
  SearchImgStyled,
  SearchInputBox,
  UserLocationDiv,
  LocationImg,
  LocationText,
  MapArrow,
  SearchData,
  SearchDataBox,
  SearchShopName,
  SearchShopAddress,
} from '../styles/SearchShopStyle';
import tempData from '../data/tempData';
import prevIcon from '../img/arrow_prev_address.png';
import location from '../img/location.png';
import nextIcon from '../img/arrow_next_white.png';
import SearchImg from '../img/search_white.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userLocation } from '../atoms/SigninAtom';
const SearchShop = () => {
  const [, setUserLocation] = useRecoilState(userLocation);
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(searchData);
  }, [searchData]);
  const updateChange = (e) => {
    let data = e.target.value;
    let showData = tempData.filter((shop) => shop.shopName.includes(data));
    if (data.length === 0) showData = [];
    setSearchData(showData);
  };
  const goPrev = () => {
    navigate('/maps');
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
              <SearchAddressInput onChange={updateChange} />
              <SearchImgStyled src={SearchImg} />
            </SearchInputBox>
            <UserLocationDiv>
              <LocationImg src={location} alt='locationImg' />
              <LocationText onClick={allowGPS}>
                현재 위치로 설정하기
              </LocationText>
              <MapArrow src={nextIcon} alt='nextArrow' />
            </UserLocationDiv>
          </SearchBox>
        </TopWrap>
      </AddressPositionBox>
      <SearchData>
        {searchData.map((shop) => (
          <SearchDataBox
            key={shop.id}
            onClick={() => navigate(`/shopdetail/${shop.id}`)}
          >
            <SearchShopName>{shop.shopName}</SearchShopName>
            <SearchShopAddress>{shop.shopAddress}</SearchShopAddress>
          </SearchDataBox>
        ))}
      </SearchData>
      <BottomNav />
    </div>
  );
};

export default SearchShop;
