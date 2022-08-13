import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tempData from '../data/tempData';
import prevIcon from '../img/arrow_prev_address.png';
import DetailBar from '../img/DetailBar.png';
import {
  ShopDetailBar,
  Topwrap,
  PrevImg,
  ShopDetailTitle,
  ShopImg,
  ShopDetailBox,
  ShopTitle,
  ResBtn,
  ShopMenu,
  ShopMenuBar,
  PriceDetail,
  ShopHr,
  InfoBox,
  InfoWrap,
  InfoTitle,
  InfoText,
  PriceImg,
  NoticeBox,
} from '../styles/ShopDetailStyle';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ButtomNav from '../ButtomNav';
import Price from '../img/Price.png';
import { shopList } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import shortid from 'shortid';
const ShopDetail = () => {
  const [shoplist] = useRecoilState(shopList);
  const [isMenuBar, setIsMenuBar] = useState(true);
  const navigate = useNavigate();
  const { shopId } = useParams();
  const shop = shoplist[shopId - 1];
  const goPrev = () => {
    navigate(-1);
  };
  return (
    <div>
      <ShopDetailBar>
        <Topwrap>
          <PrevImg src={prevIcon} alt='prevBtn' onClick={goPrev} />
          <ShopDetailTitle>지점 상세정보</ShopDetailTitle>
        </Topwrap>
      </ShopDetailBar>
      <ShopDetailBox>
        <ShopImg src={shop.shopImg} />
        <ShopTitle>{shop.shopName}</ShopTitle>
        <ResBtn>미용 예약하기</ResBtn>
      </ShopDetailBox>
      <ShopMenu>
        <ShopMenuBar selected={isMenuBar} onClick={() => setIsMenuBar(true)}>
          매장 정보
        </ShopMenuBar>
        <PriceDetail selected={isMenuBar} onClick={() => setIsMenuBar(false)}>
          가격 상세
        </PriceDetail>
      </ShopMenu>
      <ShopHr src={DetailBar} />
      {isMenuBar ? (
        <InfoBox>
          <InfoWrap>
            <InfoTitle>소개</InfoTitle>
            <InfoText>{shop.intro}</InfoText>
          </InfoWrap>
          <InfoWrap>
            <InfoTitle>주소</InfoTitle>
            <InfoText>{shop.address}</InfoText>
          </InfoWrap>
          <InfoWrap>
            <InfoTitle>영업시간</InfoTitle>
            <InfoText>{shop.workTime}</InfoText>
          </InfoWrap>
          <InfoWrap>
            <InfoTitle>전화번호</InfoTitle>
            <InfoText>{shop.shopNum}</InfoText>
          </InfoWrap>
          <InfoWrap>
            <InfoTitle>주차</InfoTitle>
            <InfoText>{shop.parking}</InfoText>
          </InfoWrap>
        </InfoBox>
      ) : (
        <>
          <PriceImg src={Price} />
          <NoticeBox>
            <InfoTitle>안내사항</InfoTitle>
            <InfoText>{shop.intro}</InfoText>
          </NoticeBox>
        </>
      )}
      <Routes>
        <Route path='/*' element={<ButtomNav />} />
      </Routes>
    </div>
  );
};

export default ShopDetail;
