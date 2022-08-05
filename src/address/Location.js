/* global kakao */
import React, { useEffect, useState, useRef } from 'react';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { AddressBox } from '../styles/AddressStyle';
const { kakao } = window;

const Location = () => {
  const [userGPS, setUserGPS] = useRecoilState(userLocation);
  const [position, setPosition] = useState({
    lat: userGPS.coordinateX,
    lng: userGPS.coordinateY,
  });

  let geocoder = new kakao.maps.services.Geocoder();
  geocoder.coord2Address(
    userGPS.coordinateX,
    userGPS.coordinateY,
    (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);
      }
    },
  );
  return (
    <div>
      <Map
        center={{ lat: position.lat, lng: position.lng }}
        style={{ width: '100%', height: '600px' }}
        onClick={(a, MouseEvent) => {
          setUserGPS({
            coordinateX: MouseEvent.latLng.getLat(),
            coordinateY: MouseEvent.latLng.getLng(),
          });
        }}
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
