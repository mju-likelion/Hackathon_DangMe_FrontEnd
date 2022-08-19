import styled from 'styled-components';

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
  //position: relative;
  margin-top: 32px;
  top: 85px;
  left: 52px;
  position: absolute;
  z-index: 2;
`;

export const SearchInputBox = styled.div`
  margin-top: 30px;
`;

export const UserLocationDiv = styled.div`
  margin-top: 15px;
  padding-right: 15px;
  width: 100%;
  display: flex;
  padding-left: 50px;
`;

export const LocationImg = styled.img`
  margin-left: 22px;
  margin-right: 6px;
  width: 14px;
  height: 14px;
`;

export const LocationText = styled.p`
  color: white;
  margin: 0 17px 0 0;
`;

export const MapArrow = styled.img`
  margin-left: 100px;
  height: 16px;
`;

export const SearchData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 29px;
`;

export const SearchDataBox = styled.div`
  margin-left: 34px;
  margin-bottom: 38px;
`;

export const SearchShopName = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const SearchShopAddress = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin-top: 9px;
  color: #848484;
`;
