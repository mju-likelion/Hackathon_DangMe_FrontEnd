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
import { isPetClicked } from '../atoms/ClickedAtoms';

const PetInfo = ({ petname, petimg, petshop, petReservdate, isReserved }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [petClicked, setPetClicked] = useRecoilState(isPetClicked);
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);
  const test = petClicked.isClicked;
  const handleClick = () => {
    if (petReservdate !== '') return;
    if (test && !isClicked) return; //다른게 이미 선택되어 있는 경우 리턴
    //선택된 것이 아무것도 없거나, 선택된 게 자기일 경우
    if (test === isClicked) {
      setPetClicked({ isClicked: !test });
      setIsClicked(!isClicked); //리코일이랑 선택 여부 다 반전하고
      if (isClicked) {
        //해당 div가 선택이 된 친구일 경우 온클릭 이벤트 실행
        setReservationInfo((prev) => {
          return { ...prev, petName: petname };
        });
      } else {
        setReservationInfo({ petName: null });
      }
    }
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
