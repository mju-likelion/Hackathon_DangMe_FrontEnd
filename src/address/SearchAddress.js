import {
  AddressPositionBox,
  TopWrap,
  PrevArrowImg,
  SearchAddressTitle,
  SearchBox,
  LocationImg,
  UserLocationDiv,
  LocationText,
} from '../styles/AddressStyle';
import prevIcon from '../img/arrow_prev_white.png';
import SearchImg from '../img/search_white.png';
import location from '../img/location.png';
import nextIcon from '../img/arrow_next_white.png';
import { useNavigate } from 'react-router-dom';
import { DaumPostcodeEmbed } from 'react-daum-postcode';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
const SearchAddress = () => {
  const [, setUserAddress] = useRecoilState(userLocation);
  const navigate = useNavigate();
  const goPrev = () => {
    navigate(-1);
  };
  const onSuccess = (position) => {
    setUserAddress((prev) => {
      return {
        ...prev,
        coordinateX: position.coords.latitude,
        coordinateY: position.coords.longitude,
        default: [
          {
            coordinateX: position.coords.latitude,
            coordinateY: position.coords.longitude,
          },
        ],
      };
    });
    navigate('/location');
  };
  const onError = () => {
    setUserAddress({
      coordinateX: 37.22488354862069,
      coordinateY: 127.1877995370437,
    });
    navigate('/location');
  };
  const allowGPS = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };
  const handleComplete = (data) => {
    setUserAddress((prevAddress) => {
      return {
        ...prevAddress,
        address: data.address,
      };
    });
    console.log(data.address);
    navigate('/home');
  };

  return (
    <div>
      <AddressPositionBox>
        <TopWrap>
          <PrevArrowImg src={prevIcon} alt='prevBtn' onClick={goPrev} />
          <SearchAddressTitle>주소검색</SearchAddressTitle>
          <SearchBox>
            <UserLocationDiv>
              <LocationImg src={location} alt='locationImg' />
              <LocationText onClick={allowGPS}>
                현재 위치로 설정하기
              </LocationText>
              <img src={nextIcon} alt='nextArrow' />
            </UserLocationDiv>
            <DaumPostcodeEmbed
              style={{ marginTop: '20px', height: '800px' }}
              onComplete={handleComplete}
            />
          </SearchBox>
        </TopWrap>
      </AddressPositionBox>
    </div>
  );
};

export default SearchAddress;
