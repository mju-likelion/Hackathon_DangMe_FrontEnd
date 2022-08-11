import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const styledLink = styled(Link)`
  float: left;
  width: 25%;
  text-align: center;
  height: 40px;
  margin-top: 15px;
`;

//click 시 색 바뀌게 회->검으로 일단 후에 수정하자
export const styledLinkImg = styled.img`
  width: 26px;
  height: 26px;
`;

export const styledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 92px;
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
  z-index: 1000;
`;
