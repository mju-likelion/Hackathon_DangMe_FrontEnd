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
import { format, getDate, getMonth } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ShopInfoImg } from '../styles/ShopInfoStyle';
import prevIcon from '../img/arrow_prev_white.png';
import shopImg from '../img/petShopImgL.png';
import openToggle from '../img/openedToggle.png';
import closeToggle from '../img/closedToggle.png';
import { ko } from 'date-fns/locale';
import styles from 'react-day-picker/dist/style.module.css';

const ReservationMain = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate('/reservation');
  };
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState();
  const classNames = {
    ...styles,
    head: 'custom-head',
  };
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: 700; 
    color:white;
    border: 2px solid currentColor;
    background-color:#FFA724;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #FFA724;
    color:black;
  }
`;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isServiceClicked, setIsServiceClicked] = useState(false);
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const closedDay = ['월', '화'];
  const arr = [...closedDay];
  const disabledDays = (date) => {
    const day = date.getDay();
    if (day === 0 && closedDay.find((day) => day === '일')) {
      return day === 0;
    } else if (day === 1 && closedDay.find((day) => day === '월')) {
      return day === 1;
    } else if (day === 2 && closedDay.find((day) => day === '화')) {
      return day === 2;
    } else if (day === 3 && closedDay.find((day) => day === '수')) {
      return day === 3;
    } else if (day === 4 && closedDay.find((day) => day === '목')) {
      return day === 4;
    } else if (day === 5 && closedDay.find((day) => day === '금')) {
      return day === 5;
    } else if (day === 6 && closedDay.find((day) => day === '토')) {
      return day === 6;
    }
  };

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
          {isDateClicked ? (
            <li style={{ paddingLeft: '25px' }}>
              <style>{`.custom-head { color: #848484}`}</style>
              <style>{css}</style>

              <DayPicker
                mode='single'
                defaultMonth={today}
                fromDate={today}
                toDate={
                  new Date(
                    today.getFullYear(),
                    today.getMonth() + 1,
                    today.getDate(),
                  )
                }
                selected={selectedDay}
                onSelect={setSelectedDay}
                disabled={disabledDays}
                locale={ko}
                required
                classNames={classNames}
                modifiersClassNames={{
                  selected: 'my-selected',
                }}
              />
            </li>
          ) : (
            ''
          )}
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
      </ReservMainBox>
      <div style={{ paddingBottom: '132px' }}>
        <ReservCompleteBtn>예약 완료</ReservCompleteBtn>
      </div>
      <Routes>
        <Route path='/*' element={<ButtomNav />} />
      </Routes>
    </div>
  );
};

export default ReservationMain;
