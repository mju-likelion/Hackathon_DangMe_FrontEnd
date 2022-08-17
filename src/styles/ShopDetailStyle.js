import styled, { css } from 'styled-components';

export const ShopDetailBar = styled.div`
  background-color: #ffa724;
  border-radius: 0px 0px 30px 30px;
  height: 102px;
  padding-top: 30.5px;
`;

export const ShopDetailTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: white;
`;

export const Topwrap = styled.div`
  margin-top: 30px;
`;

export const PrevImg = styled.img`
  position: absolute;
  margin-top: 2px;
  left: 31px;
  width: 8px;
  height: 18px;
`;

export const ShopDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const ShopImg = styled.img`
  width: 376px;
  height: 204px;
`;

export const ShopTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 25px;
`;

export const ResBtn = styled.button`
  width: 154px;
  height: 44px;
  border-radius: 30px;
  background-color: #3385ff;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-top: 25px;
`;

export const ShopMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ShopMenuBar = styled.div`
  width: 100px;
  height: 45px;
  text-align: center;
  padding-top: 12px;
  margin-right: 56px;
  :hover {
    color: #ffa724;
    border-bottom: solid 2px #ffa724;
  }
  :active {
    color: #ffa724;
    border-bottom: solid 2px #ffa724;
  }
  ${(props) =>
    props.selected &&
    css`
      color: #ffa724;
      border-bottom: solid 2px #ffa724;
    `}
`;

export const PriceDetail = styled.div`
  width: 100px;
  height: 45px;
  text-align: center;
  padding-top: 12px;
  :hover {
    color: #ffa724;
    border-bottom: solid 2px #ffa724;
  }
  :active {
    color: #ffa724;
    border-bottom: solid 2px #ffa724;
  }
  ${(props) =>
    !props.selected &&
    css`
      color: #ffa724;
      border-bottom: solid 2px #ffa724;
    `}
`;

export const ShopHr = styled.img`
  width: 376px;
  position: absolute;
  right: 26px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin: 25px 0 107px 0;
`;

export const InfoWrap = styled.div`
  text-align: left;
  margin: 0 0 50px 40px;
`;

export const InfoTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #848484;
  margin-bottom: 12px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const PriceImg = styled.img`
  width: 376px;
  height: 265px;
  margin: 24px 0 25px 26px;
`;

export const NoticeBox = styled.div`
  text-align: left;
  margin: 0 0 117px 40px;
`;
