import { Routes, Route, useNavigate } from "react-router-dom";
import ButtomNav from "../ButtomNav";
import {
  HomeReservTitleBox,
  HomeReservInfoBtn,
  HomeReservBox,
  HomeReservTitle,
  HomeReservInfo,
  HomeReservBtn,
  UserPositionBox,
  UserPositionIcon,
  UserPositionSetBtn,
  UserPositionText,
  PetShopListBox,
  PetShopListTitle,
  PetShopListSubTitle,
  PetShopList,
} from "../styles/HomeStyle";
import positionIcon from "../img/positionIcon.png";
import positionSet from "../img/positionSet.png";
import { HomeStyled } from "./../styles/HomeStyle";
import nextIcon from "../img/arrow_next_home.png";
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
        <HomeReservInfo>댕댕이 정보 1</HomeReservInfo>
        <HomeReservInfo>댕댕이 정보 2</HomeReservInfo>
      </HomeReservBox>
      <HomeReservBtn>미용 예약하기</HomeReservBtn>
      <PetShopListBox>
        <PetShopListTitle>우리동네 애견 미용샵</PetShopListTitle>
        <PetShopListSubTitle>내 주변</PetShopListSubTitle>
        <PetShopList>리스트 영역1</PetShopList>
      </PetShopListBox>
      <Routes>
        <Route path="/*" element={<ButtomNav />} />
      </Routes>
    </HomeStyled>
  );
};

export default Home;
