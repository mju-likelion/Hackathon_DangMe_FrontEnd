import { Routes, Route, useNavigate } from 'react-router-dom';
import ButtomNav from '../ButtomNav';
import { useState } from 'react';
import {
  ReservationTopBox,
  ReservationPrevIcon,
  ReservationTopBoxText,
  ReservMainBox,
  ReservShopName,
  ReservPetName,
  ReservToggleTitle,
  ReservToggleUl,
  ReservToggleActive,
  ReservToggleDateActive,
  ReservCompleteBtn,
  ReservOpenedToggleBox,
  ReservSerViceBox,
  ReservServiceName,
  ReservServicePrice,
  ReservToggleEndLine,
  ReservServiceTopBox,
} from '../styles/ReservationStyle';
import { ShopInfoImg } from '../styles/ShopInfoStyle';
import prevIcon from '../img/arrow_prev_white.png';
import shopImg from '../img/petShopImgL.png';
import openToggle from '../img/openedToggle.png';
import closeToggle from '../img/closedToggle.png';

const ReservationMain = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate('/reservation');
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [isServiceClicked, setIsServiceClicked] = useState(false);
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);

  const handleToggleClick = (index) => {
    setActiveIndex(index);
    if (index === 0) {
      setIsServiceClicked(!isServiceClicked);
    } else if (index === 1) {
      setIsDateClicked(!isDateClicked);
    } else {
      setIsTimeClicked(!isTimeClicked);
    }
  };

  const toggleMenu = [
    {
      toggleTitle: (
        <ReservToggleTitle onClick={() => handleToggleClick(0)}>
          희망 서비스
          {isServiceClicked ? (
            <ReservToggleActive src={closeToggle} />
          ) : (
            <ReservToggleActive src={openToggle} />
          )}
        </ReservToggleTitle>
      ),
      toggleContent: (
        <ReservOpenedToggleBox>
          {isServiceClicked ? (
            <li>
              <ReservServiceTopBox>
                <ReservSerViceBox>
                  <ReservServiceName>부분 미용</ReservServiceName>
                  <ReservServicePrice>20,000</ReservServicePrice>
                </ReservSerViceBox>
                <ReservSerViceBox>
                  <ReservServiceName>목욕</ReservServiceName>
                  <ReservServicePrice>25,000</ReservServicePrice>
                </ReservSerViceBox>
                <ReservSerViceBox>
                  <ReservServiceName>부분+전체미용</ReservServiceName>
                  <ReservServicePrice>45,000</ReservServicePrice>
                </ReservSerViceBox>
                <ReservSerViceBox>
                  <ReservServiceName>스포팅</ReservServiceName>
                  <ReservServicePrice>60,000</ReservServicePrice>
                </ReservSerViceBox>
                <ReservSerViceBox>
                  <ReservServiceName>가위</ReservServiceName>
                  <ReservServicePrice>75,000</ReservServicePrice>
                </ReservSerViceBox>
                <ReservToggleEndLine />
              </ReservServiceTopBox>
            </li>
          ) : (
            ''
          )}
        </ReservOpenedToggleBox>
      ),
    },
    {
      toggleTitle: (
        <ReservToggleTitle onClick={() => handleToggleClick(1)}>
          날짜
          {isDateClicked ? (
            <ReservToggleDateActive src={closeToggle} />
          ) : (
            <ReservToggleDateActive src={openToggle} />
          )}
        </ReservToggleTitle>
      ),
      toggleContent: (
        <ReservOpenedToggleBox>
          {isDateClicked ? <li>날짜 선택</li> : ''}
        </ReservOpenedToggleBox>
      ),
    },
    {
      toggleTitle: (
        <ReservToggleTitle onClick={() => handleToggleClick(2)}>
          시간
          {isTimeClicked ? (
            <ReservToggleDateActive src={closeToggle} />
          ) : (
            <ReservToggleDateActive src={openToggle} />
          )}
        </ReservToggleTitle>
      ),
      toggleContent: (
        <ReservOpenedToggleBox>
          {isTimeClicked ? <li>시간 선택</li> : ''}
        </ReservOpenedToggleBox>
      ),
    },
  ];
  return (
    <div>
      <ReservationTopBox>
        <ReservationPrevIcon src={prevIcon} onClick={goPrev} />
        <ReservationTopBoxText>예약하기</ReservationTopBoxText>
      </ReservationTopBox>
      <ShopInfoImg src={shopImg} />
      <ReservShopName>미용실 이름&nbsp;/</ReservShopName>
      <ReservPetName>&nbsp;댕댕이 이름</ReservPetName>
      <ReservMainBox>
        {toggleMenu.map((section, index) => (
          <ReservToggleUl key={index}>
            {section.toggleTitle}
            <ReservOpenedToggleBox>
              {section.toggleContent}
            </ReservOpenedToggleBox>
          </ReservToggleUl>
        ))}
        <ReservCompleteBtn>예약 완료</ReservCompleteBtn>
      </ReservMainBox>
      <Routes>
        <Route path='/*' element={<ButtomNav />} />
      </Routes>
    </div>
  );
};

export default ReservationMain;
