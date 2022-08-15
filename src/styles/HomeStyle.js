import styled from 'styled-components';

export const UserPositionBox = styled.div`
  background-color: #ffa724;
  border-radius: 0px 0px 30px 30px;
  height: 76px;
  padding-top: 30.5px;
`;

export const UserPositionIcon = styled.img`
  width: 14px;
  height: 20px;
  margin-left: 32px;
`;

export const UserPositionText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700px;
  display: inline;
  margin-left: 12px;
  margin-right: 10px;
`;

export const UserPositionSetBtn = styled.img`
  width: 10px;
  height: 5px;
`;

export const HomeMiddleBox = styled.div``;

export const HomeReservBox = styled.div`
  height: 220px;
  margin-left: 26px;
  //text-align: center;
`;

export const HomeReservTitleBox = styled.div`
  height: 26px;
  margin-top: 40px;
`;

export const HomeReservTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  display: inline;
`;

export const HomeReservInfoBtn = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 238px;
`;

export const HomeReservInfoListWrap = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-top: 20px;
`;

export const HomeReservInfoBox = styled.div`
  margin-right: 12px;
  width: 145px;
  height: 165px;
  border: 1px solid #dddddd;
  border-radius: 30px;
  background: #ffffff;
  flex-shrink: 0;
  margin-left: 0;
`;

export const ReservClickedPetBox = styled(HomeReservInfoBox)`
  background-color: #f6f6f6;
`;

export const HomeReservInfoImg = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: block;
  margin: auto;
  margin-top: 12px;
`;

export const HomeReservInfoName = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #000000;
  margin-bottom: 4px;
  margin-top: 12px;
`;

export const HomeReservInfoShop = styled.p`
  font-weight: 600;
  font-size: 13px;
  color: #000000;
  text-align: center;
  margin-bottom: 4px;
`;

export const HomeReservInfoDate = styled.p`
  font-size: 13px;
  color: #000000;
  text-align: center;
`;

export const HomeReservInfoAny = styled.p`
  font-size: 13px;
  color: #848484;
  text-align: center;
  margin-top: 12px;
`;

export const HomeReservBtn = styled.button`
  background-color: #3385ff;
  border: none;
  border-radius: 30px;
  width: 154px;
  height: 44px;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  margin: 20px 137px 40px 137px;
  //margin: 20px auto;
  display: block;
  &:active {
    background-color: #b1d0ff;
  }
`;

export const PetShopListBox = styled.div`
  margin-left: 26px;
  margin-top: 40px;
`;

export const PetShopListTitle = styled.p`
  font-weight: 700;
  font-size: 22px;
  color: #000000;
  margin-bottom: 20px;
`;

/* export const PetShopListSubTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #ffa724;
  margin: 20px 0 20px 26px;
`; */

export const PetShopInfoListWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 92px;
`;

export const PetShopInfoBox = styled.div`
  position: relative;
  margin: 0 0 12px 0;
  border: 1px solid #dddddd;
  border-radius: 20px;
  background: #ffffff;
  width: 376px;
  height: 110px;
`;

export const PetShopInfoImg = styled.img`
  margin-top: 12px;
  margin-left: 12px;
  margin-bottom: 12px;
  width: 112px;
  height: 86px;
  border-radius: 10px;
`;

export const PetShopInfoName = styled.p`
  position: absolute;
  top: 14px;
  left: 136px;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  width: 60%;
`;

export const PetShopInfoAddress = styled.p`
  position: absolute;
  left: 136px;
  top: 39px;
  font-size: 12px;
  color: #848484;
  width: 60%;
`;

export const PetShopInfoClosed = styled.p`
  position: absolute;
  left: 136px;
  top: 79px;
  font-size: 14px;
  color: #000000;
  width: 60%;
`;
