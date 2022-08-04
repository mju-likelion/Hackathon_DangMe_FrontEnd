import { Routes, Route, useNavigate } from "react-router-dom";
import ButtomNav from "../ButtomNav";
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
} from "../styles/HomeStyle";
import positionIcon from "../img/positionIcon.png";
import positionSet from "../img/positionSet.png";
import { HomeStyled } from "./../styles/HomeStyle";
import nextIcon from "../img/arrow_next_home.png";
import petImg from "../img/pet.png";
import petShopImg from "../img/petShop.png";
import petImg2 from "../img/pet2.png";
const Home = () => {
  const navigate = useNavigate();

  const goToReservHistory = () => {
    navigate("/ReservationHistory");
  };

  return (
    <HomeStyled>
      <UserPositionBox>
        <UserPositionIcon src={positionIcon} alt="position_icon" />
        <UserPositionText>경기도 용인시 처인구 역북동</UserPositionText>
        <UserPositionSetBtn src={positionSet} />
      </UserPositionBox>
      <HomeReservBox>
        <HomeReservTitleBox>
          <HomeReservTitle>미용 예약 현황</HomeReservTitle>
          <HomeReservInfoBtn
            src={nextIcon}
            alt="goReservHistory"
            onClick={goToReservHistory}
          />
        </HomeReservTitleBox>
        <HomeReservInfoListWrap>
          <HomeReservInfoBox>
            <HomeReservInfoImg src={petImg} alt="pet" />
            <HomeReservInfoName>결이</HomeReservInfoName>
            <HomeReservInfoShop>멍멍 미용실</HomeReservInfoShop>
            <HomeReservInfoDate>07/29 14:20</HomeReservInfoDate>
          </HomeReservInfoBox>
          <HomeReservInfoBox>
            {/*예약 내역 없을 때*/}
            <HomeReservInfoImg src={petImg2} alt="pet" />
            <HomeReservInfoName>박둥둥</HomeReservInfoName>
            <HomeReservInfoAny>예약 내역이 없습니다</HomeReservInfoAny>
          </HomeReservInfoBox>
        </HomeReservInfoListWrap>
      </HomeReservBox>
      <HomeReservBtn>미용 예약하기</HomeReservBtn>
      <PetShopListBox>
        <PetShopListTitle>우리동네 애견 미용샵</PetShopListTitle>
        <PetShopListSubTitle>내 주변</PetShopListSubTitle>
        <PetShopInfoListWrap>
          <PetShopInfoBox>
            <PetShopInfoImg src={petShopImg} alt="petshop" />
            <PetShopInfoName>멍멍 미용실</PetShopInfoName>
            <PetShopInfoAddress>서울시 강남구 땡땡동 342-1</PetShopInfoAddress>
            <PetShopInfoClosed>매주 월,수 휴무</PetShopInfoClosed>
          </PetShopInfoBox>
          <PetShopInfoBox>
            <PetShopInfoImg src={petShopImg} alt="petshop" />
            <PetShopInfoName>멍멍 미용실</PetShopInfoName>
            <PetShopInfoAddress>서울시 강남구 땡땡동 342-1</PetShopInfoAddress>
            <PetShopInfoClosed>매주 월,수 휴무</PetShopInfoClosed>
          </PetShopInfoBox>
          <PetShopInfoBox>
            <PetShopInfoImg src={petShopImg} alt="petshop" />
            <PetShopInfoName>멍멍 미용실</PetShopInfoName>
            <PetShopInfoAddress>서울시 강남구 땡땡동 342-1</PetShopInfoAddress>
            <PetShopInfoClosed>매주 월,수 휴무</PetShopInfoClosed>
          </PetShopInfoBox>
        </PetShopInfoListWrap>
      </PetShopListBox>
      <Routes>
        <Route path="/*" element={<ButtomNav />} />
      </Routes>
    </HomeStyled>
  );
};

export default Home;
