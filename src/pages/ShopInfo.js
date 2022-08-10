import { Routes, Route, useNavigate } from "react-router-dom";
import ButtomNav from "../ButtomNav";
import {
  ReservationTopBox,
  ShopInfoTopBoxText,
  ReservationPrevIcon,
} from "./../styles/ReservationStyle";
import {
  ShopInfoImg,
  ShopInfoName,
  ShopInfoReservBtn,
  ShopInfoTabTitle,
  ShopInfoActiveTabTitle,
  ShopInfoTabTitleBox,
  ShopInfoBox,
  ShopInfoContentBox,
  ShopInfoContent,
} from "../styles/ShopInfoStyle";
import prevIcon from "../img/arrow_prev_white.png";
import { useState } from "react";
import { ShopInfoContentTitle } from "./../styles/ShopInfoStyle";
import tempShopInfoData from "../data/tempShopInfoData";

const ShopInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };
  const goPrev = () => {
    navigate(-1);
  };
  const goToReservation = () => {
    navigate("/Reservation");
  };
  const tabShopInfo = [
    {
      tabTitle:
        activeIndex === 0 ? (
          <ShopInfoActiveTabTitle>매장 정보</ShopInfoActiveTabTitle>
        ) : (
          <ShopInfoTabTitle onClick={() => handleTabClick(0)}>
            매장 정보
          </ShopInfoTabTitle>
        ),
      tabContent: (
        <ShopInfoContentBox>
          {tempShopInfoData.map((shopInfo) => (
            <>
              <ShopInfoContentTitle>소개</ShopInfoContentTitle>
              <ShopInfoContent>{shopInfo.shopIntro}</ShopInfoContent>
              <ShopInfoContentTitle>주소</ShopInfoContentTitle>
              <ShopInfoContent>{shopInfo.shopAddress}</ShopInfoContent>
              <ShopInfoContentTitle>영업시간</ShopInfoContentTitle>
              <ShopInfoContent>{shopInfo.shopWorkTime}</ShopInfoContent>
              <ShopInfoContentTitle>전화번호</ShopInfoContentTitle>
              <ShopInfoContent>{shopInfo.shopCallNum}</ShopInfoContent>
              <ShopInfoContentTitle>주차</ShopInfoContentTitle>
              <ShopInfoContent>{shopInfo.shopPark}</ShopInfoContent>
            </>
          ))}
        </ShopInfoContentBox>
      ),
    },
    {
      tabTitle:
        activeIndex === 1 ? (
          <ShopInfoActiveTabTitle>가격 상세</ShopInfoActiveTabTitle>
        ) : (
          <ShopInfoTabTitle onClick={() => handleTabClick(1)}>
            가격 상세
          </ShopInfoTabTitle>
        ),
      tabContent: <ShopInfoContentBox>가격 상세 내용</ShopInfoContentBox>,
    },
  ];
  return (
    <div>
      <ReservationTopBox>
        <ReservationPrevIcon src={prevIcon} alt="뒤로가기" onClick={goPrev} />
        <ShopInfoTopBoxText>지점 상세정보</ShopInfoTopBoxText>
      </ReservationTopBox>
      {tempShopInfoData.map((shopInfo) => (
        <>
          <ShopInfoImg src={shopInfo.shopImg} alt="지점 이미지" />
          <ShopInfoName>{shopInfo.shopName}</ShopInfoName>
        </>
      ))}
      <ShopInfoReservBtn onClick={goToReservation}>
        미용 예약하기
      </ShopInfoReservBtn>
      <ShopInfoBox>
        <ShopInfoTabTitleBox>
          {tabShopInfo.map((section) => {
            return section.tabTitle;
          })}
        </ShopInfoTabTitleBox>
        <div>{tabShopInfo[activeIndex].tabContent}</div>
      </ShopInfoBox>
      <Routes>
        <Route path="/*" element={<ButtomNav />} />
      </Routes>
    </div>
  );
};

export default ShopInfo;
