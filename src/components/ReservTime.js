import React from 'react';
import {
  ReservTimeMediem,
  ReservTimeSelectBtn,
} from '../styles/ReservationStyle';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { reservation } from '../atoms/ReservationAtom';

const ReservTime = ({ worktime }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (!isClicked) {
      setReservationInfo({ ...reservationInfo, time: worktime });
    } else {
      setReservationInfo({ ...reservationInfo, time: null });
    }
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
        {worktime}
      </ReservTimeSelectBtn>
    </>
  );
};

export default ReservTime;
