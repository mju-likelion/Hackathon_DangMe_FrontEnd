import { Routes, Route, useNavigate } from 'react-router-dom';
import ButtomNav from '../ButtomNav';
import {
  ReservationTopBox,
  ShopInfoTopBoxText,
  ReservationPrevIcon,
} from './../styles/ReservationStyle';
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
  ShopInfoContentLine,
  ShopInfoPriceContent,
} from '../styles/ShopInfoStyle';
import prevIcon from '../img/arrow_prev_white.png';
import { useState } from 'react';
import { ShopInfoContentTitle } from './../styles/ShopInfoStyle';
import tempShopInfoData from '../data/tempShopInfoData';
import shopPrice from '../img/shopPrice.png';

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
    navigate('/reservation');
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
              <ShopInfoContentLine />
              <ShopInfoContentTitle>주소</ShopInfoContentTitle>
              <ShopInfoContent>{shopInfo.shopAddress}</ShopInfoContent>
              <ShopInfoContentLine />
              <ShopInfoContentTitle>영업시간</ShopInfoContentTitle>
              <ShopInfoContent>{shopInfo.shopWorkTime}</ShopInfoContent>
              <ShopInfoContentLine />
              <ShopInfoContentTitle>전화번호</ShopInfoContentTitle>
              <ShopInfoContent>{shopInfo.shopCallNum}</ShopInfoContent>
              <ShopInfoContentLine />
              <ShopInfoContentTitle>주차</ShopInfoContentTitle>
              <ShopInfoContent>{shopInfo.shopPark}</ShopInfoContent>
              <ShopInfoContentLine />
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
      tabContent: (
        <ShopInfoContentBox>
          <ShopInfoPriceContent src={shopPrice} />
          <ShopInfoContentTitle>안내 사항</ShopInfoContentTitle>
          <ShopInfoContent>
            위 미용 요금표 이미지와 실제 지불하는 미용 요금에는 차이가 있을 수
            있습니다. 자세한 가격문의는 미용샵과 통화를 통해 확인해주세요 :)
          </ShopInfoContent>
        </ShopInfoContentBox>
      ),
    },
  ];
  return (
    <div>
      <ReservationTopBox>
        <ReservationPrevIcon src={prevIcon} alt='뒤로가기' onClick={goPrev} />
        <ShopInfoTopBoxText>지점 상세정보</ShopInfoTopBoxText>
      </ReservationTopBox>
      {tempShopInfoData.map((shopInfo) => (
        <>
          <ShopInfoImg src={shopInfo.shopImg} alt='지점 이미지' />
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
        <Route path='/*' element={<ButtomNav />} />
      </Routes>
    </div>
  );
};

export default ShopInfo;
