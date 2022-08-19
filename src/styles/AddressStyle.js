import styled from 'styled-components';

export const AddressPositionBox = styled.div`
  background-color: #ffa724;
  border-radius: 0px 0px 30px 30px;
  height: 174px;
  padding-top: 17px;
`;

export const TopWrap = styled.div`
  margin-top: 30px;
`;

export const PrevArrowImg = styled.img`
  position: absolute;
  margin-top: 2px;
  left: 31px;
  width: 8px;
  height: 18px;
`;

export const SearchAddressTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: white;
`;
export const SearchBox = styled.div`
  text-align: center;
  height: 70px;
`;

export const SearchAddressInput = styled.input`
  width: 360px;
  height: 56px;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  padding-left: 62px;
  :focus {
    outline: none;
  }
`;

export const SearchImgStyled = styled.img`
  position: relative;
  margin-top: 32px;
  top: 7px;
  left: 52px;
`;
export const UserLocationDiv = styled.div`
  margin-top: 15px;
  padding-right: 15px;
  width: 100%;
  text-align: right;
`;

export const LocationImg = styled.img`
  margin-left: 22px;
  margin-right: 6px;
`;

export const LocationText = styled.span`
  color: white;
  margin-right: 17px;
`;

export const AddressBox = styled.div`
  width: 100%;
  height: 240px;
  position: absolute;
  overflow: hidden;
  border-radius: 30px 30px 0 0;
  text-align: center;
  top: 686px;
  background-color: white;
  z-index: 1;
`;

export const AddressBtn = styled.button`
  margin-top: 30px;
  width: 360px;
  height: 56px;
  border-radius: 30px;
  border-style: none;
  background-color: #3385ff;
  color: white;
  font-size: 24px;
  font-weight: 700;
`;

export const AddressText = styled.p`
  margin-top: 35px;
  font-weight: 600;
  font-size: 20px;
`;
