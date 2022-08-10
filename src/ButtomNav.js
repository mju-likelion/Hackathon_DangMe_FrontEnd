import { StyledNav, StyledLink, StyledLinkImg } from './styles/NavStyles';
import homeIcon from './img/home.png';
import searchIcon from './img/search.png';
import calendarIcon from './img/calendar.png';
import mypageIcon from './img/my.png';
import homeClickIcon from './img/homeClick.png';
import searchClickIcon from './img/searchClick.png';
import calendarClickIcon from './img/calendarClick.png';
import mypageClickIcon from './img/myClick.png';
import { useState } from 'react';

const ButtomNav = () => {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <StyledNav>
      <StyledLink to='/home'>
        {activeNav === 0 ? (
          <StyledLinkImg
            src={homeClickIcon}
            alt='homeClick'
            onClick={() => setActiveNav(0)}
          />
        ) : (
          <StyledLinkImg
            src={homeIcon}
            alt='home'
            onClick={() => setActiveNav(0)}
          />
        )}
      </StyledLink>
      <StyledLink to='/map'>
        {activeNav === 1 ? (
          <StyledLinkImg
            src={searchClickIcon}
            alt='searchClick'
            onClick={() => setActiveNav(1)}
          />
        ) : (
          <StyledLinkImg
            src={searchIcon}
            alt='search'
            onClick={() => setActiveNav(1)}
          />
        )}
      </StyledLink>
      <StyledLink to='/reservationHistory'>
        {activeNav === 2 ? (
          <StyledLinkImg
            src={calendarClickIcon}
            alt='calendarClick'
            onClick={() => setActiveNav(2)}
          />
        ) : (
          <StyledLinkImg
            src={calendarIcon}
            alt='calendar'
            onClick={() => setActiveNav(2)}
          />
        )}
      </StyledLink>
      <StyledLink to='/mypage'>
        {activeNav === 3 ? (
          <StyledLinkImg
            src={mypageClickIcon}
            alt='mypageClick'
            onClick={() => setActiveNav(3)}
          />
        ) : (
          <StyledLinkImg
            src={mypageIcon}
            alt='mypage'
            onClick={() => setActiveNav(3)}
          />
        )}
      </StyledLink>
    </StyledNav>
  );
};
export default ButtomNav;
