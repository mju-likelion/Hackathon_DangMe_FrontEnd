import React, { useEffect, useState } from 'react';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { AddressBox, AddressText, AddressBtn } from '../styles/AddressStyle';
import { useNavigate, useParams } from 'react-router-dom';
const { kakao } = window;

const Location = () => {
  const { from } = useParams();
  const navigate = useNavigate();
  const [userGPS, setUserGPS] = useRecoilState(userLocation); //GPS허용을 눌렀을 때 사용자의 위치 좌표를 저장한 state
  const [position, setPosition] = useState({
    //처음 지도를 띄울 때 메인으로 사용할 사용자의 좌표
    lat: userGPS.coordinateX,
    lng: userGPS.coordinateY,
  });
  var geocoder = new kakao.maps.services.Geocoder();
  var coord = new kakao.maps.LatLng(userGPS.coordinateX, userGPS.coordinateY);
  const goHome = () => {
    if (from === 'shop') navigate('/searchshop');
    else navigate('/home');
  };
  useEffect(() => {
    setPosition({
      lat: userGPS.coordinateX,
      lng: userGPS.coordinateY,
    });
  }, []);

  useEffect(() => {
    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      //좌표를 주소로 변환하는 메서드
      if (status === kakao.maps.services.Status.OK) {
        setUserGPS((prevgps) => {
          return {
            ...prevgps,
            address: result[0].address.address_name,
          };
        });
      }
    });
  }, [userGPS]);
  const handleClick = (a, MouseEvent) => {
    //지도를 클릭했을 때
    setUserGPS({
      coordinateX: MouseEvent.latLng.getLat(), //해당 좌표를 사용자 위치 정보에 저장 (위도, 경도)
      coordinateY: MouseEvent.latLng.getLng(),
    });
  };
  return (
    <div style={{ position: 'relative' }}>
      <Map //지도를 띄움
        center={{ lat: position.lat, lng: position.lng, zIndex: 2 }} //처음에만 메인으로 사용할 좌표를 state로 저장한 위치정보 사용
        style={{ width: '100%', height: '800px', position: 'relative' }}
        onClick={handleClick}
      >
        {userGPS && (
          <MapMarker
            position={{ lat: userGPS.coordinateX, lng: userGPS.coordinateY }}
          />
        )}
      </Map>
      <AddressBox>
        <AddressText>{userGPS.address}</AddressText>
        <AddressBtn onClick={goHome}>이 위치로 설정</AddressBtn>
      </AddressBox>
    </div>
  );
};

export default Location;
