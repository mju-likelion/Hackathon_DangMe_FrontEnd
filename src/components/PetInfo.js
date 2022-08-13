import { useState } from 'react';
import {
  HomeReservInfoBox,
  HomeReservInfoImg,
  HomeReservInfoName,
  HomeReservInfoDate,
  HomeReservInfoShop,
  HomeReservInfoAny,
} from '../styles/HomeStyle';
import defaultPetImg from '../img/defaultPetImg.png';
import { useRecoilState } from 'recoil';
import { reservation } from '../atoms/ReservationAtom';

const PetInfo = ({ petname, petimg, petshop, petReservdate }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setReservationInfo({ petName: petname });
  };

  return (
    <div>
      <HomeReservInfoBox
        onClick={handleClick}
        style={{ background: isClicked ? '#f6f6f6' : ' #ffffff' }}
      >
        {petimg === '' ? (
          <HomeReservInfoImg src={defaultPetImg} />
        ) : (
          <HomeReservInfoImg src={petimg} />
        )}
        {petReservdate === '' ? (
          <>
            <HomeReservInfoName style={{ color: '#000000' }}>
              {petname}
            </HomeReservInfoName>
            <HomeReservInfoAny>예약 내역이 없습니다.</HomeReservInfoAny>
          </>
        ) : (
          <>
            <HomeReservInfoName style={{ color: '#dddddd' }}>
              {petname}
            </HomeReservInfoName>
            <HomeReservInfoShop style={{ color: '#dddddd' }}>
              {petshop}
            </HomeReservInfoShop>
            <HomeReservInfoDate style={{ color: '#dddddd' }}>
              {petReservdate}
            </HomeReservInfoDate>
          </>
        )}
      </HomeReservInfoBox>
    </div>
  );
};

export default PetInfo;
