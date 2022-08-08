import { Routes, Route, useNavigate } from "react-router-dom";
import ButtomNav from "../ButtomNav";
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
} from "../styles/ReservationStyle";
import {
  HomeReservInfoListWrap,
  HomeReservInfoBox,
  HomeReservInfoImg,
  HomeReservInfoName,
  HomeReservInfoAny,
  HomeReservInfoShop,
  HomeReservInfoDate,
  PetShopInfoBox,
  PetShopInfoImg,
  PetShopInfoName,
  PetShopInfoAddress,
  PetShopInfoClosed,
} from "../styles/HomeStyle";
import prevIcon from "../img/arrow_prev_white.png";
import tempPetData from "../data/tempPetData";
import defaultPetImg from "../img/defaultPetImg.png";
import nextIcon from "../img/arrow_next_home.png";
import petShopImg from "../img/petShop.png";

const Reservation = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate(-1);
  };

  return (
    <>
      <ReservationTopBox>
        <ReservationPrevIcon src={prevIcon} alt="뒤로가기" onClick={goPrev} />
        <ReservationTopBoxText>예약하기</ReservationTopBoxText>
      </ReservationTopBox>
      <ReservSelectPetBox>
        <ReservationDefaultText>반려견을 선택해주세요</ReservationDefaultText>
        <HomeReservInfoListWrap>
          {tempPetData.map((pet) => (
            <HomeReservInfoBox>
              {pet.petImg === "" ? (
                <HomeReservInfoImg src={defaultPetImg} />
              ) : (
                <HomeReservInfoImg src={pet.petImg} />
              )}
              {pet.reservDate === "" ? (
                <>
                  <HomeReservInfoName style={{ color: "#000000" }}>
                    {pet.petName}
                  </HomeReservInfoName>
                  <HomeReservInfoAny>예약 내역이 없습니다.</HomeReservInfoAny>
                </>
              ) : (
                <HomeReservInfoName style={{ color: "#dddddd" }}>
                  {pet.petName}
                </HomeReservInfoName>
              )}
              <HomeReservInfoShop style={{ color: "#dddddd" }}>
                {pet.petShopName}
              </HomeReservInfoShop>
              <HomeReservInfoDate style={{ color: "#dddddd" }}>
                {pet.reservDate}
              </HomeReservInfoDate>
            </HomeReservInfoBox>
          ))}
        </HomeReservInfoListWrap>
      </ReservSelectPetBox>
      <ReservSelectShopBox>
        <ReservSelectShopTitleBox>
          <ReservationDefaultText>미용샵을 선택해주세요</ReservationDefaultText>
          <ReservSelectMap>지도에서 선택하기</ReservSelectMap>
          <ReservSelectMapIcon src={nextIcon} alt="지도 바로가기" />
        </ReservSelectShopTitleBox>
        <ReservNoneShop>선택한 미용샵이 없습니다</ReservNoneShop>
        {/*아래는 선택한 미용샵 있는 경우*/}
        <PetShopInfoBox>
          <PetShopInfoImg src={petShopImg} alt="petshop" />
          <PetShopInfoName>멍멍 미용실</PetShopInfoName>
          <PetShopInfoAddress>서울시 강남구 땡땡동 342-1</PetShopInfoAddress>
          <PetShopInfoClosed>매주 월,수 휴무</PetShopInfoClosed>
        </PetShopInfoBox>
      </ReservSelectShopBox>
      <ReservNextBtn>다음</ReservNextBtn>
      <Routes>
        <Route path="/*" element={<ButtomNav />} />
      </Routes>
    </>
  );
};

export default Reservation;
