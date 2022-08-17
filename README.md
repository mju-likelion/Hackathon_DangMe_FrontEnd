# LikeLion 10th Hackathon DangMe-FrontEnd

## _'댕' 댕이 '미'용의 모든 것 댕미_

> 본 프로젝트 댕美는 사용자 주변 애견 미용샵 찾기부터 반려견 미용 에약하기까지 웹 하나로 손 쉽게 진행하자는 취지를 담았습니다.

보통의 반려동물 미용 예약 과정은 이렇습니다.

1. 웹서치를 통한 주변 애견미용샵 알아보기
2. 검색 리스트 중 지점 하나를 택해 전화 연결
3. 예약시 필요한 정보인 반려동물의 정보(종,몸무게,나이 등)를 알리고 예약 일시를 조율해 예약

이런 복잡한 예약 과정을 보다 간편하게 줄이고자하는 마음을 담아 프로젝트를 기획하게 되었습니다.

---

### _사용 프레임 워크_

- React

### _프로젝트 실행_

```
yarn start
```

### _사용 라이브러리_

- styled-components
- recoil
- axios
- react-router
- react-router-dom
- react-day-picker
- date-fns
- react-hook-form

### _사용 API_

- react-daum-postcode
- Geolocation
- react-kakao-maps-sdk

---

### 핵심 기능

1. 로그인 / 회원가입(사용자 정보, 반려견 정보)
2. 사용자 현재 위치 기반 등록된 애견미용샵 리스트 정보 제공
3. 사용자 지정 위치 기반 등록된 애견미용샵 리스트 정보 제공
4. 각 지점별 상세 정보 (운영시간,휴무일,전화번호,이용 가격) 제공
5. 반려견 미용 예약하기 -> 회원가입 시 한 번의 반려동물 정보 등록으로 예약하기 시 클릭 한 번으로 정보 입력 & 지점에 정보 제공 가능

---

#### Commit Message Convention

- feat : 기능 추가
- fix : 버그 수정
- style: 기능과 무관한 스타일 수정
- design: CSS 등 사용자 UI 디자인 변경
- refactor: 코드 리팩토링
- test: 테스트 코드 추가
- rename: 파일명 변경
- setting: 패키지 추가 및 변경

#### 폴더 구조

```
📦src
 ┣ 📂address
 ┃ ┣ 📜Location.js
 ┃ ┗ 📜SearchAddress.js
 ┣ 📂atoms
 ┃ ┣ 📜ClickedAtoms.js
 ┃ ┣ 📜ReservationAtom.js
 ┃ ┗ 📜SigninAtom.js
 ┣ 📂components
 ┃ ┣ 📜PetInfo.js
 ┃ ┣ 📜ReservTime.js
 ┃ ┗ 📜ShopServiceList.js
 ┣ 📂data
 ┃ ┣ 📜tempData.js
 ┃ ┣ 📜tempPetData.js
 ┃ ┣ 📜tempReservTimeData.js
 ┃ ┣ 📜tempServiceData.js
 ┃ ┗ 📜tempShopInfoData.js
 ┣ 📂img
 ┃ ┗ ...
 ┣ 📂login
 ┃ ┣ 📜Login.js
 ┃ ┣ 📜Signup.js
 ┃ ┗ 📜SignupDogInfo.js
 ┣ 📂pages
 ┃ ┣ 📜Home.js
 ┃ ┣ 📜Maps.js
 ┃ ┣ 📜Mypage.js
 ┃ ┣ 📜Reservation.js
 ┃ ┣ 📜ReservationHistory.js
 ┃ ┣ 📜ReservationMain.js
 ┃ ┣ 📜SearchShop.js
 ┃ ┣ 📜shopDetail.js
 ┃ ┗ 📜ShopInfo.js
 ┣ 📂styles
 ┃ ┣ 📜AddressStyle.js
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┣ 📜HomeStyle.js
 ┃ ┣ 📜LoginStlye.js
 ┃ ┣ 📜mapStyle.js
 ┃ ┣ 📜NavStyles.js
 ┃ ┣ 📜ReservationStyle.js
 ┃ ┣ 📜SearchShopStyle.js
 ┃ ┣ 📜ShopDetailStyle.js
 ┃ ┣ 📜ShopInfoStyle.js
 ┃ ┗ 📜SignupStyle.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜ButtomNav.js
 ┣ 📜Calendar.css
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```
