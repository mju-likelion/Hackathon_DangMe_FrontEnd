import * as styles from './styles/NavStyles';
import homeIcon from './img/home.png';
import searchIcon from './img/search.png';
import calendarIcon from './img/calendar.png';
import mypageIcon from './img/my.png';

const ButtomNav = () => {
  return (
    <styles.styledNav>
      <styles.styledLink to='/home'>
        <styles.styledLinkImg src={homeIcon} alt='home' />
      </styles.styledLink>
      <styles.styledLink to='/maps'>
        <styles.styledLinkImg src={searchIcon} alt='search' />
      </styles.styledLink>
      <styles.styledLink to='/reservationHistory'>
        <styles.styledLinkImg src={calendarIcon} alt='calendar' />
      </styles.styledLink>
      <styles.styledLink to='/mypage'>
        <styles.styledLinkImg src={mypageIcon} alt='myPage' />
      </styles.styledLink>
    </styles.styledNav>
  );
};
export default ButtomNav;
