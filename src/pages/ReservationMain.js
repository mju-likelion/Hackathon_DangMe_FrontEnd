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
import ReservTime from '../components/ReservTime';
const ReservationMain = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate('/reservation');
  };
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);
  const [dateClicked, setDateClicked] = useState(false);

  const handleSubmmit = () => {
    setReservationInfo({ ...reservationInfo });
    console.log(reservationInfo);
  };

  const handleClickDate = (day) => {
    setDateClicked(!dateClicked);
    setReservationInfo({
      ...reservationInfo,
      date:
        (day.getMonth() + 1).toString() +
        '월 ' +
        day.getDate().toString() +
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
  const disabledDay = [new Date(2022, 7, 26), new Date(2022, 7, 27)];
  const arr = [...disabledDay];

  const disabledDays = (date) => {
    const day = date.getDay();
    if (day === 0 && closedDay.find((day) => day === '일')) {
      return day;
    } else if (day === 1 && closedDay.find((day) => day === '월')) {
      return day;
    } else if (day === 2 && closedDay.find((day) => day === '화')) {
      return day;
    } else if (day === 3 && closedDay.find((day) => day === '수')) {
      return day;
    } else if (day === 4 && closedDay.find((day) => day === '목')) {
      return day;
    } else if (day === 5 && closedDay.find((day) => day === '금')) {
      return day;
    } else if (day === 6 && closedDay.find((day) => day === '토')) {
      return day;
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

  //dlrjskwnddp wldnj
  const test = closedDay.concat(disabledDay);

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
            {reservationInfo.date}
          </p>
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
                onDayClick={handleClickDate}
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
            {reservationInfo.time}
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
              <ReservTimeBox style={{ marginTop: '20px' }}>
                {tempReservTimeData.map((shoptime, index) => (
                  <>
                    {shoptime.text === '오전' ? (
                      <>
                        <ReservTimeMediem key={index}>오전</ReservTimeMediem>
                        {shoptime.worktime.map((shopWorktime, index) => (
                          <ReservTime key={index} worktime={shopWorktime} />
                        ))}
                      </>
                    ) : (
                      <>
                        <ReservTimeMediem key={index}>오후</ReservTimeMediem>
                        {shoptime.worktime.map((shopWorktime, index) => (
                          <ReservTime key={index} worktime={shopWorktime} />
                        ))}
                      </>
                    )}
                  </>
                ))}
              </ReservTimeBox>
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
      <ShopInfoImg src={reservationInfo.shopImg} />
      <ReservShopName>{reservationInfo.shopName}&nbsp;/</ReservShopName>
      <ReservPetName>&nbsp;{reservationInfo.petName}</ReservPetName>
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
        <ReservCompleteBtn
          onClick={handleSubmmit}
          style={{ background: '#3385FF', marginTop: '40px' }}
        >
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
