import React from 'react';
import {
  ReservTimeMediem,
  ReservTimeSelectBtn,
} from '../styles/ReservationStyle';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { reservation } from '../atoms/ReservationAtom';
import { isTimeAtoms } from '../atoms/ClickedAtoms';
import { add, format } from 'date-fns';

const ReservTime = ({ worktime }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);
  const [timeClicked, setTimeClicked] = useRecoilState(isTimeAtoms);
  const selectedTime = timeClicked.isTimeClicked;
  let resultDate;

  const handleClick = () => {
    if (selectedTime && !isClicked) return;
    if (selectedTime === isClicked) {
      setTimeClicked({ isTimeClicked: !selectedTime });
      setIsClicked(!isClicked);
      if (!isClicked) {
        setReservationInfo({
          ...reservationInfo,
          time: worktime,
        });
        resultDate = add(reservationInfo.date, {
          hours: worktime.getHours(),
          minutes: worktime.getMinutes(),
        });
        console.log(worktime);
        console.log('시간 클릭됨');
      } else {
        setReservationInfo({ ...reservationInfo, time: null });
      }
    }
    setReservationInfo({ ...reservationInfo, orderDate: resultDate });
    console.log(reservationInfo.time);
  };

  return (
    <>
      <ReservTimeSelectBtn
        onClick={handleClick}
        style={{
          background: isClicked ? '#FFA724' : '#ffffff',
          color: isClicked ? '#ffffff' : '#848484',
          border: isClicked ? 'none' : '1px solid #848484',
        }}
      >
        {format(worktime, 'HH:mm')}
      </ReservTimeSelectBtn>
    </>
  );
};

export default ReservTime;
