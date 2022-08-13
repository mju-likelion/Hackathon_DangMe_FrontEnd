import styled from 'styled-components';

export const ReservationTopBox = styled.div`
  background-color: #ffa724;
  border-radius: 0px 0px 30px 30px;
  height: 58px;
  padding-top: 17px;
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0; */
`;

export const ReservationPrevIcon = styled.img`
  width: 8px;
  height: 16px;
  margin-left: 31px;
`;

export const ReservationTopBoxText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600px;
  display: inline-block;
  margin-left: 140px;
`;

export const ShopInfoTopBoxText = styled(ReservationTopBoxText)`
  margin-left: 121px;
`;

export const ReservSelectPetBox = styled.div`
  //padding-top: 58px;
  margin-left: 26px;
  margin-top: 40px;
`;

export const ReservationDefaultText = styled.p`
  color: #000000;
  font-weight: 700;
  font-size: 18px;
  display: inline;
`;

export const ReservSelectShopBox = styled.div`
  margin-left: 26px;
  margin-top: 40px;
`;

export const ReservSelectShopTitleBox = styled.div``;

export const ReservSelectMap = styled.p`
  color: #000000;
  font-size: 16px;
  display: inline;
  margin-left: 75px;
  margin-right: 11px;
`;

export const ReservSelectMapIcon = styled.img`
  width: 11px;
  height: 7px;
  margin-bottom: 2px;
`;

export const ReservNoneShop = styled.div`
  width: 376px;
  height: 110px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 20px;
  padding-top: 44px;
  padding-left: 20px;
  font-size: 18px;
  color: #848484;
  margin: 20px 0 12px 0; //기능 작업 후에 margin-bottom 수정할 것
`;

export const ReservNextBtn = styled.button`
  width: 360px;
  height: 56px;
  background: #dddddd;
  //background:#3385FF; ->버튼 활성화 시 color
  border-radius: 30px;
  border: none;
  margin-top: 104px; //기능 작업 후에 수정할 것
  margin-left: 34px;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`;

export const ReservCompleteBtn = styled(ReservNextBtn)`
  position: relative;
  //transform: translateY(-100%);
  margin: 0 auto;
  display: block;
  //margin-bottom: 40px;
`;

export const ReservMainBox = styled.div`
  overflow: auto;
  //여기부터 수정 코드
  height: auto;
  min-height: 100%;
  //position: relative;
  padding-bottom: 160px;
`;

export const ReservShopName = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #ffa724;
  display: inline-block;
  margin-bottom: 25px;
  margin-left: 26px;
`;

export const ReservPetName = styled(ReservShopName)`
  margin-left: 0;
`;

export const ReservToggleUl = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-left: 26px;
  width: 90%;
`;

export const ReservToggleTitle = styled.li`
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 9px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

export const ReservToggleActive = styled.img`
  width: 10px;
  height: 5px;
  margin-left: 130px;
`;

export const ReservToggleDateActive = styled(ReservToggleActive)`
  margin-left: 252px;
`;

export const ReservOpenedToggleBox = styled.div`
  //margin-left: 10px;
  margin-bottom: 22px;
`;

export const ReservServiceTopBox = styled.div`
  //border-bottom: 1px solid #dddddd;
  //width: 376px;
`;

export const ReservSerViceBox = styled.div`
  width: 376px;
  height: 82px;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  align-items: center;
  margin-left: 0;
`;

export const ReservServiceName = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #848484;
  flex-basis: initial;
  margin: 0;
  padding-left: 20px;
`;
export const ReservServicePrice = styled.p`
  font-size: 18px;
  color: #000000;
  flex-basis: initial;
  margin-right: 47px;
`;

export const ReservToggleEndLine = styled.div`
  height: 1px;
  background-color: #dddddd;
  margin-top: -1px;
`;

export const ReservTimeBox = styled.div`
  text-align: center;
`;

export const ReservTimeMediem = styled.p`
  font-weight: 600;
  font-size: 21px;
  color: #000000;
  margin-bottom: 20px;
`;

export const ReservTimeSelectBtn = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #848484;
  border-radius: 30px;
  font-size: 18px;
  color: #848484;
  background-color: #ffffff;
  margin: 9px 6px;
`;

export const ReservTimeSelected = styled(ReservTimeSelectBtn)`
  background-color: #ffa724;
  color: #ffffff;
  font-weight: 700;
  border: none;
`;

export const ReservDoneTime = styled(ReservTimeSelectBtn)`
  border: 1px solid #dddddd;
  color: #dddddd;
`;
