import { StyledNav, StyledLink, StyledLinkImg } from './styles/NavStyles';
import homeIcon from './img/home.png';
import searchIcon from './img/search.png';
import calendarIcon from './img/calendar.png';
import mypageIcon from './img/my.png';
import homeClickIcon from './img/homeClick.png';
import searchClickIcon from './img/searchClick.png';
import calendarClickIcon from './img/calendarClick.png';
import mypageClickIcon from './img/myClick.png';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { activeNavAtom } from './atoms/ActiveNav';
import animationData from './lottie/Animation.json';
import Lottie from 'react-lottie';
const BottomNav = () => {
  const [activeNav, setActiveNav] = useRecoilState(activeNavAtom);
  const isNavActive = activeNav.isNavActive;

  const HomeRoute = () => {
    setActiveNav({ isNavActive: 0 });
  };

  const MapRoute = () => {
    setActiveNav({ isNavActive: 1 });
  };

  const ReservationHistoryRoute = () => {
    setActiveNav({ isNavActive: 2 });
  };

  const MyPageRoute = () => {
    setActiveNav({ isNavActive: 3 });
  };

  return (
    <StyledNav>
      <StyledLink to={'/home'}>
        {isNavActive === 0 ? (
          <StyledLinkImg
            src={homeClickIcon}
            alt='homeClick'
            onClick={HomeRoute}
          />
        ) : (
          <StyledLinkImg src={homeIcon} alt='home' onClick={HomeRoute} />
        )}
      </StyledLink>
      <StyledLink to={'/maps'}>
        {isNavActive === 1 ? (
          <StyledLinkImg
            src={searchClickIcon}
            alt='searchClick'
            onClick={MapRoute}
          />
        ) : (
          <StyledLinkImg src={searchIcon} alt='search' onClick={MapRoute} />
        )}
      </StyledLink>
      <StyledLink to={'/reservationHistory'}>
        {isNavActive === 2 ? (
          <StyledLinkImg
            src={calendarClickIcon}
            alt='calendarClick'
            onClick={ReservationHistoryRoute}
          />
        ) : (
          <StyledLinkImg
            src={calendarIcon}
            alt='calendar'
            onClick={ReservationHistoryRoute}
          />
        )}
      </StyledLink>
      <StyledLink to={'/mypage'}>
        {isNavActive === 3 ? (
          <StyledLinkImg
            src={mypageClickIcon}
            alt='mypageClick'
            onClick={MyPageRoute}
          />
        ) : (
          <StyledLinkImg src={mypageIcon} alt='mypage' onClick={MyPageRoute} />
        )}
      </StyledLink>
    </StyledNav>
  );
};
export default BottomNav;
