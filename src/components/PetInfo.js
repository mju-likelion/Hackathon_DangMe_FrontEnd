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
import { isClickedAtoms } from '../atoms/ClickedAtoms';

const PetInfo = ({ petid, petname, petimg, petshop, petReservdate }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [petClicked, setPetClicked] = useRecoilState(isClickedAtoms);
  const [reservationInfo, setReservationInfo] = useRecoilState(reservation);

  const selectedPet = petClicked.isPetClicked;
  const handleClick = () => {
    if (petshop !== null) return;
    if (selectedPet && !isClicked) return; //다른게 이미 선택되어 있는 경우 리턴
    //선택된 것이 아무것도 없거나, 선택된 게 자기일 경우
    if (selectedPet === isClicked) {
      setPetClicked({ isPetClicked: !selectedPet });
      setIsClicked(!isClicked); //리코일이랑 선택 여부 다 반전하고
      if (!isClicked) {
        //해당 div가 선택이 된 친구일 경우 온클릭 이벤트 실행
        setReservationInfo((prev) => {
          return { ...prev, petName: petname, petId: petid };
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
        style={{
          background: isClicked ? '#f6f6f6' : ' #ffffff',
        }}
      >
        {petimg === '' ? (
          <HomeReservInfoImg src={defaultPetImg} />
        ) : (
          <HomeReservInfoImg src={petimg} />
        )}
        {petshop === null ? (
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
            {/*             <HomeReservInfoDate style={{ color: '#dddddd' }}>
              {petReservdate}
            </HomeReservInfoDate> */}
          </>
        )}
      </HomeReservInfoBox>
    </div>
  );
};

export default PetInfo;
