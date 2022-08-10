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
  HomeFlexBox,
  HomeMiddleBox,
} from '../styles/HomeStyle';
import positionIcon from '../img/positionIcon.png';
import positionSet from '../img/positionSet.png';
import { HomeStyled } from './../styles/HomeStyle';
import nextIcon from '../img/arrow_next_home.png';
import tempData from '../data/tempData';
import tempPetData from '../data/tempPetData';
import defaultPetImg from '../img/defaultPetImg.png';
import { useEffect, useState } from 'react';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [userlocation, setUserLocation] = useRecoilState(userLocation);
  const [petShopList, setPetShopList] = useState([]);

  /*   useEffect(() => {
    axios
      .get("api/coordinate/shop-dis")
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  useEffect(() => {
    const fetchPetShops = async () => {
      try {
        const response = await axios.get('api/coordinate/shop-dis');
        console.log(response);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPetShops();
  }, []);

  const goToReservHistory = () => {
    navigate('/reservationHistory');
  };
  const goSearchAddress = () => {
    navigate('/searchAddress');
  };

  const goToReservation = () => {
    navigate('/reservation');
  };

  const goToShopInfo = () => {
    navigate('/ShopInfo');
  };

  return (
    <>
      <UserPositionBox>
        <UserPositionIcon src={positionIcon} alt='position_icon' />
        <UserPositionText onClick={goSearchAddress}>
          {userlocation.address}
        </UserPositionText>
        <UserPositionSetBtn src={positionSet} />
      </UserPositionBox>
      <HomeMiddleBox>
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
            {tempPetData.map((pet, index) => (
              <HomeReservInfoBox key={index}>
                {pet.petImg === '' ? (
                  <HomeReservInfoImg src={defaultPetImg} />
                ) : (
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
          <PetShopInfoListWrap>
            {tempData.map((petShop, index) => (
              <PetShopInfoBox onClick={goToShopInfo} key={index}>
                <PetShopInfoImg src={petShop.shopImg} alt='petshop' />
                <PetShopInfoName>{petShop.shopName}</PetShopInfoName>
                <PetShopInfoAddress>{petShop.shopAddress}</PetShopInfoAddress>
                <PetShopInfoClosed>{petShop.shopClosed}</PetShopInfoClosed>
              </PetShopInfoBox>
            ))}
          </PetShopInfoListWrap>
        </PetShopListBox>
      </HomeMiddleBox>
      <Routes>
        <Route path='/*' element={<ButtomNav />} />
      </Routes>
    </>
  );
};

export default Home;
