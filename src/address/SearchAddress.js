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
import prevIcon from '../img/arrow_prev_address.png';
import location from '../img/location.png';
import nextIcon from '../img/arrow_next_white.png';
import { useNavigate } from 'react-router-dom';
import { DaumPostcodeEmbed } from 'react-daum-postcode';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
const { kakao } = window;
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
    navigate('/location/address');
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
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, async (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setUserAddress((prev) => {
          return {
            ...prev,
            coordinateX: result[0].y,
            coordinateY: result[0].x,
          };
        });
        await axios
          .put('api/coordinate/user', {
            coordinateX: result[0].y,
            coordinateY: result[0].x,
          })
          .then((res) => alert(res.data.data));
      }
    });
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
