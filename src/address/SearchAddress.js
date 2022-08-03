import {AddressPositionBox,
TopWrap,
PrevArrowImg,
SearchAddressTitle,
SearchAddressInput,
SearchImgStyled,
SearchBox,
LocationImg,
UserLocationDiv,
LocationText,
TipBox,
TipTitle,
TipStyled,
TipList,
TipEx,
TipMark
} from '../styles/AddressStyle';
import prevIcon from '../img/arrow_prev_address.png';
import SearchImg from '../img/search_white.png';
import location from '../img/location.png';
import nextIcon from '../img/arrow_next_white.png';
import { useNavigate } from 'react-router-dom';
const SearchAddress=()=>{
    const navigate=useNavigate();
    const goPrev = () => {
        navigate(-1);
      };
    return(
        <div>
            <AddressPositionBox>
            <TopWrap>
                <PrevArrowImg src={prevIcon} alt="prevBtn" onClick={goPrev} />
                
                <SearchAddressTitle>주소검색</SearchAddressTitle>
                <SearchBox>
                    <SearchImgStyled src={SearchImg} alt="searchImg"/>
                    <SearchAddressInput placeholder='지번, 도로명, 건물명 검색'/>
                    <UserLocationDiv>
                       <LocationImg src={location} alt="locationImg"/>
                       <LocationText>현재 위치로 설정하기</LocationText>
                       <img src={nextIcon} alt="nextArrow"/>
                    </UserLocationDiv>
                </SearchBox>
            </TopWrap>
                
            </AddressPositionBox>
            <TipBox>
                <TipTitle>검색 TIP</TipTitle>
                <TipMark>
                    <TipStyled>
                    <TipList>도로명+건물번호</TipList>
                    <TipEx>예)댕댕로123</TipEx>
                    </TipStyled>
                    <TipStyled>
                    <TipList>동/읍/면/리 + 번지</TipList>
                    <TipEx>예)댕댕동 12-3</TipEx>
                    </TipStyled>
                    <TipStyled>
                    <TipList>건물명, 아파트명</TipList>
                    <TipEx>예)댕댕로아파트 123동</TipEx>
                    </TipStyled>
                </TipMark>

            </TipBox>
        </div>
    )   
}

export default SearchAddress;