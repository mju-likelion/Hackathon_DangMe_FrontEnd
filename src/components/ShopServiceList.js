import React from 'react';
import {
  ReservSerViceBox,
  ReservServiceName,
  ReservServicePrice,
} from '../styles/ReservationStyle';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { reservation } from '../atoms/ReservationAtom';

const ShopServiceList = ({ serviceName, servicePrice }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (!isClicked) {
      setReservationInfo({
        ...reservationInfo,
        service: serviceName,
        servicePrice: servicePrice,
      });
    } else {
      setReservationInfo({
        ...reservationInfo,
        service: null,
        servicePrice: null,
      });
    }
  };
  return (
    <div>
      <ReservSerViceBox
        onClick={handleClick}
        style={{ background: isClicked ? '#F6F6F6' : '#ffffff' }}
      >
        <ReservServiceName>{serviceName}</ReservServiceName>
        <ReservServicePrice
          style={{ color: isClicked ? '#848484' : '#000000' }}
        >
          {servicePrice}
        </ReservServicePrice>
      </ReservSerViceBox>
    </div>
  );
};

export default ShopServiceList;
