import {
  AddressPositionBox,
  TopWrap,
  PrevArrowImg,
  SearchAddressTitle,
  SearchAddressInput,
  SearchImgStyled,
  SearchBox,
  LocationImg,
  UserLocationDiv,
  LocationText,
} from "../styles/AddressStyle";
import prevIcon from "../img/arrow_prev_white.png";
import SearchImg from "../img/search_white.png";
import location from "../img/location.png";
import nextIcon from "../img/arrow_next_white.png";
import { useNavigate } from "react-router-dom";
const SearchAddress = () => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate(-1);
  };
  return (
    <div>
      <AddressPositionBox>
        <TopWrap>
          <PrevArrowImg src={prevIcon} alt="prevBtn" onClick={goPrev} />

          <SearchAddressTitle>주소검색</SearchAddressTitle>
          <SearchBox>
            <SearchImgStyled src={SearchImg} alt="searchImg" />
            <SearchAddressInput placeholder="지번, 도로명, 건물명 검색" />
            <UserLocationDiv>
              <LocationImg src={location} alt="locationImg" />
              <LocationText>현재 위치로 설정하기</LocationText>
              <img src={nextIcon} alt="nextArrow" />
            </UserLocationDiv>
          </SearchBox>
        </TopWrap>
      </AddressPositionBox>
    </div>
  );
};

export default SearchAddress;
