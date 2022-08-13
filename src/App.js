import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReservationHistory from './pages/ReservationHistory';
import Maps from './pages/Maps';
import MyPage from './pages/Mypage';
import Signin from './login/Signin';
import Login from './login/Login';
import SigninDogInfo from './login/SigninDogInfo';
import SearchAddress from './address/SearchAddress';
import Reservation from './pages/Reservation';
import Location from './address/Location';
import ShopInfo from './pages/ShopInfo';
import ReservationMain from './pages/ReservationMain';
import SearchShop from './pages/SearchShop';
import ShopDetail from './pages/shopDetail';

import './Calendar.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signin/doginfo' element={<SigninDogInfo />} />
        <Route path='/home' element={<Home />} />
        <Route path='/maps' element={<Maps />} />
        <Route path='/reservationHistory' element={<ReservationHistory />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/searchAddress' element={<SearchAddress />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/location/:from' element={<Location />} />
        <Route path='/shopInfo' element={<ShopInfo />} />
        <Route path='/reservationMain' element={<ReservationMain />} />
        <Route path='/searchShop' element={<SearchShop />} />
        <Route path='/shopdetail/:shopId' element={<ShopDetail />} />
      </Routes>
    </div>
  );
}

export default App;
