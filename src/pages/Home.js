import { Routes, Route, useNavigate } from 'react-router-dom';
import ButtomNav from '../ButtomNav';
import {
  HomeReservTitleBox,
  HomeReservInfoBtn,
  HomeReservBox,
  HomeReservTitle,
  HomeReservInfoBox,
  HomeReservBtn,
  UserPositionBox,
  UserPositionIcon,
  UserPositionSetBtn,
  UserPositionText,
  PetShopListBox,
  PetShopListTitle,
  PetShopListSubTitle,
  PetShopInfoBox,
  PetShopInfoImg,
  PetShopInfoName,
  PetShopInfoAddress,
  PetShopInfoClosed,
  HomeReservInfoImg,
  HomeReservInfoShop,
  HomeReservInfoName,
  HomeReservInfoDate,
  HomeReservInfoAny,
  HomeReservInfoListWrap,
  PetShopInfoListWrap,
} from '../styles/HomeStyle';
import positionIcon from '../img/positionIcon.png';
import positionSet from '../img/positionSet.png';
import { HomeStyled } from './../styles/HomeStyle';
import nextIcon from '../img/arrow_next_home.png';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { shopList } from '../atoms/SigninAtom';
import shortid from 'shortid';
const Home = () => {
  const navigate = useNavigate();
  const [userlocation] = useRecoilState(userLocation);
  const [petResList, setPetResList] = useState([]);
  const [shoplist, setShopList] = useRecoilState(shopList);
  const getData = async () => {
    await axios.get('api/pet/main').then((res) => {
      res.data.data.map((dog) => setPetResList((prev) => [...prev, dog]));
      console.log(petResList);
    });
    await axios.get('api/coordinate').then((res) => {
      res.data.data.map((shop) => setShopList((prev) => [...prev, shop]));
    });
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(petResList);
  }, [petResList]);
  const goToReservHistory = () => {
    navigate('/ReservationHistory');
  };
  const goSearchAddress = () => {
    navigate('/searchAddress');
  };
  const goToReservation = () => {
    navigate('/Reservation');
  };

  return (
    <HomeStyled>
      <UserPositionBox>
        <UserPositionIcon src={positionIcon} alt='position_icon' />
        <UserPositionText onClick={goSearchAddress}>
          {userlocation.address === undefined
            ? userlocation[0].address
            : userlocation.address}
        </UserPositionText>
        <UserPositionSetBtn src={positionSet} />
      </UserPositionBox>
      <HomeReservBox>
        <HomeReservTitleBox>
          <HomeReservTitle>미용 예약 현황</HomeReservTitle>
          <HomeReservInfoBtn
            src={nextIcon}
            alt='goReservHistory'
            onClick={goToReservHistory}
          />
        </HomeReservTitleBox>
        <HomeReservInfoListWrap>
          {petResList.map((pet, index) => (
            <HomeReservInfoBox key={shortid.generate()}>
              {pet.petImg === '' ? null : (
                <HomeReservInfoImg src={pet.petImg} />
              )}
              {pet.reservDate === '' ? (
                <>
                  <HomeReservInfoName style={{ color: '#000000' }}>
                    {pet.petName}
                  </HomeReservInfoName>
                  <HomeReservInfoAny>예약 내역이 없습니다.</HomeReservInfoAny>
                </>
              ) : (
                <HomeReservInfoName>{pet.petName}</HomeReservInfoName>
              )}
              <HomeReservInfoShop>{pet.petShopName}</HomeReservInfoShop>
              <HomeReservInfoDate>{pet.reservDate}</HomeReservInfoDate>
            </HomeReservInfoBox>
          ))}
        </HomeReservInfoListWrap>
      </HomeReservBox>
      <HomeReservBtn onClick={goToReservation}>미용 예약하기</HomeReservBtn>
      <PetShopListBox>
        <PetShopListTitle>우리동네 애견 미용샵</PetShopListTitle>
        <PetShopListSubTitle>내 주변</PetShopListSubTitle>
        <PetShopInfoListWrap>
          {shoplist.map((petShop, index) => (
            <PetShopInfoBox key={shortid.generate()}>
              <PetShopInfoImg src={petShop.shopImg} alt='petshop' />
              <PetShopInfoName>{petShop.shopName}</PetShopInfoName>
              <PetShopInfoAddress>{petShop.shopAddress}</PetShopInfoAddress>
              <PetShopInfoClosed>{petShop.shopClosed}</PetShopInfoClosed>
            </PetShopInfoBox>
          ))}
        </PetShopInfoListWrap>
      </PetShopListBox>
      <Routes>
        <Route path='/*' element={<ButtomNav />} />
      </Routes>
    </HomeStyled>
  );
};

export default Home;
