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
import { useRecoilState, useRecoilValue } from 'recoil';
import { reservation } from '../atoms/ReservationAtom';
import serviceList from '../data/tempServiceData';
import ShopServiceList from '../components/ShopServiceList';
import {
  tempReservTimeData,
  tempReservDoneTime,
} from '../data/tempReservTimeData';
import ReservTime from '../components/ReservTime';
import axios from 'axios';
import { isPetAtoms } from '../atoms/ClickedAtoms';
import { format } from 'date-fns';
import { selectedShop } from '../atoms/ReservationAtom';
import { add } from 'date-fns';

const ReservationMain = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate('/reservation');
  };
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);
  const [dateClicked, setDateClicked] = useState(false);
  const [isPetClicked, setIsPetClicked] = useRecoilState(isPetAtoms);
  const selectedShopInfo = useRecoilValue(selectedShop);
  const handleSubmmit = () => {
    setReservationInfo({ ...reservationInfo });
    console.log(reservationInfo);
    axios
      .post(
        `/api/reserve/complete/${selectedShopInfo.id}/${reservationInfo.petId}`,
        {
          orderDate: reservationInfo.orderDate,
          serviceName: reservationInfo.serviceName,
          amount: reservationInfo.amount,
        },
      )
      .then(function (response) {
        alert(response.data);
        console.log(response.data);
        navigate('/home');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClickDate = (day) => {
    setDateClicked(!dateClicked);
    setReservationInfo({
      ...reservationInfo,
      date: day,
    });
    const selectedMonth = day.getMonth() + 1;
    const selectedDay = day.getDate();
    console.log(selectedMonth, selectedDay);
    axios
      .post(`/api/reserve/${selectedShopInfo.id}/${reservationInfo.petId}`, {
        month: selectedMonth,
        day: selectedDay,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
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
  const closedDay = ['일'];

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

  {
    /* 만약 내가 클릭한 date랑 서버에 저장된 예약 date랑 같다면? -> 이 날짜의 특정 시간대엔 예약이 있구나를 확인
     */
  }

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
            {reservationInfo.serviceName}
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
            {reservationInfo.date !== null
              ? new Date(reservationInfo.date).getMonth() +
                1 +
                '월 ' +
                new Date(reservationInfo.date).getDate() +
                '일'
              : ''}
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
            {reservationInfo.time !== null
              ? format(reservationInfo.time, 'HH:mm')
              : ''}
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
                {tempReservTimeData.map((shoptime) => (
                  <>
                    {shoptime.text === '오전' ? (
                      <>
                        <ReservTimeMediem key={shoptime.id}>
                          오전
                        </ReservTimeMediem>
                        {shoptime.worktime.map((shopWorktime, index) => (
                          <ReservTime key={index} worktime={shopWorktime} />
                        ))}
                      </>
                    ) : (
                      <>
                        <ReservTimeMediem key={shoptime.id}>
                          오후
                        </ReservTimeMediem>
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
          style={{ background: '#3385FF', marginTop: '15px' }}
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
