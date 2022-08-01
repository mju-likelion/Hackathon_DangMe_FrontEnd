import styled from "styled-components";

export const HomeStyled = styled.div``;

export const UserPositionBox = styled.div`
  background-color: #ffa724;
  border-radius: 0px 0px 10px 10px;
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

export const HomeReservBox = styled.div`
  height: 220px;
  margin-left: 26px;
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
  display: inline;
  margin-left: 238px;
`;

//예약 현황 리스트 형식으로 변경 -> 사용자 dog info도 받아와야함^^;;
export const HomeReservInfo = styled.div`
  margin-top: 20px;
  margin-right: 12px;
  width: 145px;
  height: 165px;
  border: 1px solid #dddddd;
  border-radius: 30px;
  background: #ffffff;
  display: inline-block;
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
  margin: 20px 137px 40px 111px;
`;

export const PetShopListBox = styled.div`
  margin-left: 26px;
`;

export const PetShopListTitle = styled.p`
  font-weight: 700;
  font-size: 22px;
  color: #000000;
`;

export const PetShopListSubTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #ffa724;
  margin: 20px 0 20px 26px;
`;

//내 주변 샵 리스트도 외부API 연결 후에 리스트 형식으로 변경해주기
export const PetShopList = styled.div`
  margin: 20px 26px 12px 0;
  border: 1px solid #dddddd;
  border-radius: 20px;
  background: #ffffff;
  width: 376px;
  height: 110px;
`;
