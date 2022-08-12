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
import tempData from '../data/tempData';
import tempPetData from '../data/tempPetData';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
const Home = () => {
  const navigate = useNavigate();
  const [userlocation, setUserLocation] = useRecoilState(userLocation);
  const goToReservHistory = () => {
    navigate('/ReservationHistory');
  };
  const goSearchAddress = () => {
    navigate('/searchAddress');
  };
  return (
    <HomeStyled>
      <UserPositionBox>
        <UserPositionIcon src={positionIcon} alt='position_icon' />
        <UserPositionText onClick={goSearchAddress}>
          {userlocation.address}
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
          {tempPetData.map((pet) => (
            <HomeReservInfoBox>
              <HomeReservInfoImg src={pet.petImg} />
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
      <HomeReservBtn>미용 예약하기</HomeReservBtn>
      <PetShopListBox>
        <PetShopListTitle>우리동네 애견 미용샵</PetShopListTitle>
        <PetShopListSubTitle>내 주변</PetShopListSubTitle>
        <PetShopInfoListWrap>
          {tempData.map((petShop) => (
            <PetShopInfoBox>
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
