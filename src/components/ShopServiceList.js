import React from 'react';
import {
  ReservSerViceBox,
  ReservServiceName,
  ReservServicePrice,
} from '../styles/ReservationStyle';
import { useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { reservation } from '../atoms/ReservationAtom';
import { isServiceAtoms } from '../atoms/ClickedAtoms';

const ShopServiceList = ({ serviceName, servicePrice }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);
  const [serviceClicked, setIsServiceClicked] = useRecoilState(isServiceAtoms);
  const selectedService = serviceClicked.isServiceClicked;

  const handleClick = () => {
    //if (selectedService && !isClicked) return;
    if (selectedService === isClicked) {
      setIsServiceClicked({
        isServiceClicked: !selectedService,
      });
      setIsClicked(!isClicked);
      if (!isClicked) {
        setReservationInfo({
          ...reservationInfo,
          serviceName: serviceName,
          amount: servicePrice,
        });
      } else {
        setReservationInfo({
          ...reservationInfo,
          serviceName: null,
          amount: null,
        });
      }
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
