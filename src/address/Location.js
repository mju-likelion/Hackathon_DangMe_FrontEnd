/* global kakao */
import React, { useEffect, useState, useRef } from 'react';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { AddressBox } from '../styles/AddressStyle';
import { resolveConfig } from 'prettier';
const { kakao } = window;

const Location = () => {
  const [userGPS, setUserGPS] = useRecoilState(userLocation); //GPS허용을 눌렀을 때 사용자의 위치 좌표를 저장한 state
  const [position, setPosition] = useState({
    //처음 지도를 띄울 때 메인으로 사용할 사용자의 좌표
    lat: userGPS.coordinateX,
    lng: userGPS.coordinateY,
  });

  useEffect(() => {
    console.log(userGPS); //유저의 위치 정보가 변경될 때만 그 정보를 콘솔에 찍음
  }, [userGPS]);

  const handleClick = (a, MouseEvent) => {
    //지도를 클릭했을 때
    var geocoder = new kakao.maps.services.Geocoder();
    var coord = new kakao.maps.LatLng(userGPS.coordinateX, userGPS.coordinateY);
    setUserGPS({
      coordinateX: MouseEvent.latLng.getLat(), //해당 좌표를 사용자 위치 정보에 저장 (위도, 경도)
      coordinateY: MouseEvent.latLng.getLng(),
    });

    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      //좌표를 주소로 변환하는 메서드
      if (status === kakao.maps.services.Status.OK) console.log(result);
      else
        console.log(
          status,
          typeof userGPS.coordinateX,
          typeof userGPS.coordinateY,
        );
    });
  };
  return (
    <div>
      <Map //지도를 띄움
        center={{ lat: position.lat, lng: position.lng }} //처음에만 메인으로 사용할 좌표를 state로 저장한 위치정보 사용
        style={{ width: '100%', height: '600px' }}
        onClick={handleClick}
      >
        {userGPS && (
          <MapMarker
            position={{ lat: userGPS.coordinateX, lng: userGPS.coordinateY }}
          />
        )}
        <AddressBox>dd</AddressBox>
      </Map>
    </div>
  );
};

export default Location;
