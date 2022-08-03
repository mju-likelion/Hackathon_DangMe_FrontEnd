import styled from 'styled-components';
import foot from '../img/foot.png'
export const AddressPositionBox = styled.div`
  background-color: #ffa724;
  border-radius: 0px 0px 30px 30px;
  height: 218px;
  padding-top: 30.5px;
`;

export const TopWrap = styled.div`
margin-top: 30px;
`;

export const PrevArrowImg = styled.img`
  position : absolute;
  margin-top : 2px;
  left:31px;
  width: 8px;
  height: 18px;
`;

export const SearchAddressTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color : white;
`;
export const SearchBox=styled.div`
    text-align: center;
    height : 70px;
`

export const SearchAddressInput=styled.input`
    width: 360px;
    height:56px;
    border-radius: 30px;
    border : none;
    font-size : 16px;
    padding-left : 62px;
    :focus{
        outline : none;
    }
`

export const SearchImgStyled=styled.img`
    position : relative;
    margin-top : 32px;
    top : 7px;
    left : 52px;
`
export const UserLocationDiv=styled.div`
    margin-top : 15px;
    width : 360px;    
    text-align: left;
`

export const LocationImg=styled.img`
    margin-left : 22px;
    margin-right : 6px;
`

export const LocationText=styled.span`
    color : white;
    margin-right :171px;
`

export const TipBox=styled.div`
    margin-top : 30px;
    margin-left : 56px;
`

export const TipTitle=styled.h2`
    
`

export const TipStyled=styled.div`
    margin-top : 12px;
`

export const TipEx=styled.p`
    color : #848484;
`

export const TipList=styled.li`
    margin-bottom : 6px;
   
`

export const TipMark=styled.ul`
    list-style-image: foot;
`