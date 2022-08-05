/* global kakao */
import React, { useEffect, useState, useRef } from 'react';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { AddressBox } from '../styles/AddressStyle';
import { resolveConfig } from 'prettier';
//const { kakao } = window;

const Location = () => {
  const [userGPS, setUserGPS] = useRecoilState(userLocation);
  const [position, setPosition] = useState({
    lat: userGPS.coordinateX,
    lng: userGPS.coordinateY,
  });

  const getAddress = (lat, lng) => {
    let geocoder = new kakao.maps.services.Geocoder();
    let callbackPromise = new Promise((res, rej) => {
      geocoder.coord2Address(lat, lng, (result, status) => {
        if (status === kakao.maps.services.Status.OK) res(result);
        else res(status);
      });
    });
    return callbackPromise;
  };
  return (
    <div>
      <Map
        center={{ lat: position.lat, lng: position.lng }}
        style={{ width: '100%', height: '600px' }}
        onClick={async (a, MouseEvent) => {
          setUserGPS({
            coordinateX: MouseEvent.latLng.getLat(),
            coordinateY: MouseEvent.latLng.getLng(),
          });
          await getAddress(userGPS.coordinateX, userGPS.coordinateY).then(
            (res) => console.log(res),
          );
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
