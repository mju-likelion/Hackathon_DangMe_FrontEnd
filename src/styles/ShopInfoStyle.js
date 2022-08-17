import styled from 'styled-components';

export const ShopInfoImg = styled.img`
  width: 376px;
  height: 204px;
  border-radius: 30px;
  margin: auto;
  display: block;
  margin-top: 40px;
  margin-bottom: 25px;
`;

export const ShopInfoName = styled.p`
  font-weight: 700;
  color: #000000;
  font-size: 24px;
  text-align: center;
`;

export const ShopInfoReservBtn = styled.button`
  background-color: #3385ff;
  border-radius: 30px;
  border: none;
  width: 154px;
  height: 44px;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  display: block;
  margin: 25px auto;
  &:active {
    background-color: #b1d0ff;
  }
`;

export const ShopInfoBox = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const ShopInfoTabTitleBox = styled.ul`
  text-align: center;
  border-bottom: 1px solid #dddddd;
`;

export const ShopInfoTabTitle = styled.li`
  display: inline-block;
  color: #848484;
  font-size: 18px;
  padding-bottom: 12px;
  margin: 0 35px;
  width: 25%;
  margin-bottom: -1px;
`;

export const ShopInfoActiveTabTitle = styled(ShopInfoTabTitle)`
  border-bottom: 2px solid #ffa724;
  color: #ffa724;
  font-weight: 700;
`;

export const ShopInfoContentBox = styled.div`
  margin-top: 25px;
  overflow-y: auto;
  padding-bottom: 92px;
`;

export const ShopInfoContentTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #848484;
  padding-left: 10px;
`;

export const ShopInfoContent = styled.p`
  font-size: 16px;
  color: #000000;
  margin-top: 12px;
  margin-bottom: 25px;
  padding-left: 10px;
`;

export const ShopInfoContentLine = styled.div`
  border-bottom: 1px solid #f6f6f6;
  margin-bottom: 25px;
`;

export const ShopInfoPriceContent = styled.img`
  width: 376px;
  height: 265px;
  margin-bottom: 25px;
`;
