import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ButtomNav from '../ButtomNav';
import { userLocation } from '../atoms/SigninAtom';
import { useRecoilState } from 'recoil';

//import tempData from '../data/tempData';
import {
  NearShop,
  NearShopTitle,
  PrevImg,
  Topwrap,
  ShopListBox,
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
import { shopList } from '../atoms/SigninAtom';
import shopMarker from '../img/shop_place.png';
import clickedShopMarker from '../img/shop_place_clicked.png';
import shortid from 'shortid';
const Maps = () => {
  const [selectMarker, setSelectMarker] = useState(null);
  const [userlocation] = useRecoilState(userLocation);
  const [shoplist] = useRecoilState(shopList);
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
        {shoplist.map((shop) => (
          <EventMarkerContainer
            id={shop.id}
            key={shortid.generate()}
            position={{ lat: shop.coordinateX, lng: shop.coordinateY }}
            onClick={() => setSelectMarker(shop.id)}
            isClicked={selectMarker === shop.id}
          />
        ))}
      </Map>

      {selectMarker ? (
        <>
          <ShopResBox>
            <ShopResImg src={shoplist[selectMarker - 1].shopImg} />
            <ShopResText>
              <ShopResTitle>{shoplist[selectMarker - 1].shopName}</ShopResTitle>
              <ShopResAddress>
                {shoplist[selectMarker - 1].shopAddress}
              </ShopResAddress>
              <ShopResClosed>
                {shoplist[selectMarker - 1].shopClosed}
              </ShopResClosed>
              <ShopResTime>{shoplist[selectMarker - 1].shopTime}</ShopResTime>
            </ShopResText>
          </ShopResBox>

          <ShopDetailBtn
            onClick={() => goDetail(shoplist[selectMarker - 1].id)}
          >
            상세정보 더보기
          </ShopDetailBtn>
        </>
      ) : (
        <ShopListBox>
          <NearShopListBox>
            {shoplist.map((shop) => (
              <ShopBox
                onClick={() => navigate(`/shopdetail/${shop.id}`)}
                key={shop.id}
              >
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
