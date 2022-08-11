import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ButtomNav from '../ButtomNav';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';
import ListBar from '../img/Listbar.png';
//import tempData from '../data/tempData';
import {
  NearShop,
  NearShopTitle,
  PrevImg,
  Topwrap,
  ShopListBox,
  ListBarImg,
  NearShopListBox,
  SearchBarImg,
  ShopBox,
  ShopImg,
  TextBox,
  ShopTitle,
  ShopClosed,
  ShopAddress,
  ShopResImg,
  ShopResTitle,
  ShopDetailBtn,
  ShopResBox,
  ShopResText,
  ShopResAddress,
  ShopResClosed,
  ShopResTime,
} from '../styles/mapStyle';
import SearchBar from '../img/searchBar.png';
import prevIcon from '../img/arrow_prev_address.png';
import { useNavigate } from 'react-router-dom';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import tempData from '../data/tempData';
import shopMarker from '../img/shop_place.png';
import clickedShopMarker from '../img/shop_place_clicked.png';
const Maps = () => {
  const [selectMarker, setSelectMarker] = useState(null);
  console.log({ shopMarker });
  const [userlocation] = useRecoilState(userLocation);
  const navigate = useNavigate();
  const goPrev = () => {
    navigate(-1);
  };
  const goSearch = () => {
    navigate('/searchshop');
  };
  const goDetail = (id) => {
    navigate(`/shopdetail/${id}`);
  };
  const EventMarkerContainer = ({ position, id, onClick, isClicked }) => {
    return (
      <MapMarker
        position={position}
        onClick={onClick}
        image={
          isClicked
            ? {
                src: clickedShopMarker,
                size: {
                  width: 65,
                  height: 65,
                },
              }
            : {
                src: shopMarker,
                size: {
                  width: 55,
                  height: 55,
                },
              }
        }
      />
    );
  };
  return (
    <div>
      <NearShop>
        <Topwrap>
          <PrevImg src={prevIcon} alt='prevBtn' onClick={goPrev} />
          <NearShopTitle>내 주변 미용샵</NearShopTitle>
        </Topwrap>
      </NearShop>

      <SearchBarImg src={SearchBar} alt='searchBarImg' onClick={goSearch} />

      <Map
        center={
          userlocation.coordinateX === undefined
            ? {
                lat: userlocation[0].coordinateX,
                lng: userlocation[0].coordinateY,
              }
            : {
                lat: userlocation.coordinateX,
                lng: userlocation.coordinateY,
              }
        }
        style={{ width: '100%', height: '700px', position: 'relative' }}
      >
        {tempData.map((shop) => (
          <EventMarkerContainer
            id={shop.id}
            key={shop.id}
            position={shop.latlng}
            onClick={() => setSelectMarker(shop.id)}
            isClicked={selectMarker === shop.id}
          />
        ))}
      </Map>

      {selectMarker ? (
        <>
          <ShopResBox>
            <ShopResImg src={tempData[selectMarker - 1].shopImg} />
            <ShopResText>
              <ShopResTitle>{tempData[selectMarker - 1].shopName}</ShopResTitle>
              <ShopResAddress>
                {tempData[selectMarker - 1].shopAddress}
              </ShopResAddress>
              <ShopResClosed>
                {tempData[selectMarker - 1].shopClosed}
              </ShopResClosed>
              <ShopResTime>{tempData[selectMarker - 1].shopTime}</ShopResTime>
            </ShopResText>
          </ShopResBox>

          <ShopDetailBtn
            onClick={() => goDetail(tempData[selectMarker - 1].id)}
          >
            상세정보 더보기
          </ShopDetailBtn>
        </>
      ) : (
        <ShopListBox>
          <ListBarImg src={ListBar} alt='ListBarImg' />
          <NearShopListBox>
            {tempData.map((shop) => (
              <ShopBox key={shop.id}>
                <ShopImg src={shop.shopImg} />
                <TextBox>
                  <ShopTitle>{shop.shopName}</ShopTitle>
                  <ShopAddress>{shop.shopAddress}</ShopAddress>
                  <ShopClosed>{shop.shopClosed}</ShopClosed>
                </TextBox>
              </ShopBox>
            ))}
          </NearShopListBox>
        </ShopListBox>
      )}

      <Routes>
        <Route path='/*' element={<ButtomNav />} />
      </Routes>
    </div>
  );
};

export default Maps;
