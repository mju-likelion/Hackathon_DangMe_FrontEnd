import { Routes, Route, useNavigate } from 'react-router-dom';
import ButtomNav from '../ButtomNav';
import { useState, useEffect } from 'react';
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
  ReservTimeSelectBtn,
  ReservTimeMediem,
  ReservTimeBox,
  ReservDoneTime,
  ReservTimeSelected,
} from '../styles/ReservationStyle';
import { DayPicker } from 'react-day-picker';
import { ShopInfoImg } from '../styles/ShopInfoStyle';
import prevIcon from '../img/arrow_prev_white.png';
import shopImg from '../img/petShopImgL.png';
import openToggle from '../img/openedToggle.png';
import closeToggle from '../img/closedToggle.png';
import { ko } from 'date-fns/locale';
import styles from 'react-day-picker/dist/style.module.css';
import { useRecoilState } from 'recoil';
import { reservation } from '../atoms/ReservationAtom';
import serviceList from '../data/tempServiceData';
import ShopServiceList from '../components/ShopServiceList';
import {
  tempReservTimeData,
  tempReservDoneTime,
} from '../data/tempReservTimeData';

const ReservationMain = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate('/reservation');
  };
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);
  const [dateClicked, setDateClicked] = useState(false);

  const handleClickDate = () => {
    setDateClicked(!dateClicked);
    setReservationInfo({
      ...reservationInfo,
      date:
        (new Date(selectedDay).getMonth() + 1).toString() +
        '월 ' +
        new Date(selectedDay).getDate().toString() +
        '일',
    });
  };

  const today = new Date();
  const [selectedDay, setSelectedDay] = useState();
  const classNames = {
    ...styles,
    head: 'custom-head',
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [isServiceClicked, setIsServiceClicked] = useState(false);
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const closedDay = ['월', '수'];
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
          <p
            style={{
              fontWeight: 700,
              fontSize: '18px',
              color: '#FFA724',
              margin: '0 5px',
            }}
          >
            {reservationInfo.service}
          </p>
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
                {serviceList.map((service, index) => (
                  <ShopServiceList
                    key={index}
                    serviceName={service.serviceName}
                    servicePrice={service.price}
                  />
                ))}
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
          <p style={{ fontWeight: 700, fontSize: '18px', color: '#FFA724' }}>
            {reservationInfo.date === 'NaN' ? '' : reservationInfo.date}
          </p>
          {isDateClicked ? (
            <ReservToggleDateActive src={closeToggle} />
          ) : (
            <ReservToggleDateActive src={openToggle} />
          )}
        </ReservToggleTitle>
      ),
      toggleContent: (
        <ReservOpenedToggleBox onClick={handleClickDate}>
          {isDateClicked ? (
            <li style={{ paddingLeft: '15px' }}>
              <style>{`.custom-head { color: #848484}`}</style>

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
          <p style={{ fontWeight: 700, fontSize: '18px', color: '#FFA724' }}>
            14:00
          </p>
          {isTimeClicked ? (
            <ReservToggleDateActive src={closeToggle} />
          ) : (
            <ReservToggleDateActive src={openToggle} />
          )}
        </ReservToggleTitle>
      ),
      toggleContent: (
        <ReservOpenedToggleBox>
          {isTimeClicked ? (
            <li>
              <div>
                {tempReservTimeData.map((time, index) => (
                  <ReservTimeBox key={index} style={{ marginTop: '20px' }}>
                    {time.text === '오전' ? (
                      <>
                        <ReservTimeMediem>오전</ReservTimeMediem>
                        {time.worktime.map((shoptime, workindex) => (
                          <ReservTimeSelectBtn key={workindex}>
                            {shoptime}
                          </ReservTimeSelectBtn>
                        ))}
                      </>
                    ) : (
                      <>
                        <ReservTimeMediem>오후</ReservTimeMediem>
                        {time.worktime.map((shoptime, index) => (
                          <ReservTimeSelectBtn key={index}>
                            {shoptime}
                          </ReservTimeSelectBtn>
                        ))}
                      </>
                    )}
                  </ReservTimeBox>
                ))}
              </div>
            </li>
          ) : (
            ''
          )}
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
      <ReservShopName>멍멍 미용실&nbsp;/</ReservShopName>
      <ReservPetName>&nbsp;박둥둥</ReservPetName>
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
        <ReservCompleteBtn style={{ background: '#3385FF', marginTop: '40px' }}>
          예약 완료
        </ReservCompleteBtn>
      </div>
      <Routes>
        <Route path='/*' element={<ButtomNav />} />
      </Routes>
    </div>
  );
};

export default ReservationMain;
