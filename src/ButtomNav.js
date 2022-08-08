import { StyledNav, StyledLink, StyledLinkImg } from "./styles/NavStyles";
import homeIcon from "./img/home.png";
import searchIcon from "./img/search.png";
import calendarIcon from "./img/calendar.png";
import mypageIcon from "./img/my.png";
import homeClickIcon from "./img/homeClick.png";
import searchClickIcon from "./img/searchClick.png";
import calendarClickIcon from "./img/calendarClick.png";
import mypageClickIcon from "./img/myClick.png";
import { useState } from "react";

const ButtomNav = () => {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <StyledNav>
      <StyledLink to="/home" onClick={() => setActiveNav(1)}>
        {activeNav === 1 ? (
          <StyledLinkImg src={homeClickIcon} alt="homeClick" />
        ) : (
          <StyledLinkImg src={homeIcon} alt="home" />
        )}
      </StyledLink>
      <StyledLink to="/map" onClick={() => setActiveNav(2)}>
        {activeNav === 2 ? (
          <StyledLinkImg src={searchClickIcon} alt="searchClick" />
        ) : (
          <StyledLinkImg src={searchIcon} alt="search" />
        )}
      </StyledLink>
      <StyledLink to="/reservationHistory" onClick={() => setActiveNav(3)}>
        {activeNav === 3 ? (
          <StyledLinkImg src={calendarClickIcon} alt="calendarClick" />
        ) : (
          <StyledLinkImg src={calendarIcon} alt="calendar" />
        )}
      </StyledLink>
      <StyledLink to="/mypage" onClick={() => setActiveNav(4)}>
        {activeNav === 4 ? (
          <StyledLinkImg src={mypageClickIcon} alt="mypageClick" />
        ) : (
          <StyledLinkImg src={mypageIcon} alt="mypage" />
        )}
      </StyledLink>
    </StyledNav>
  );
};
export default ButtomNav;
