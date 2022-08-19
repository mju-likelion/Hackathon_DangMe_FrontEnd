import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  margin-top: 15px;
`;

export const StyledLinkImg = styled.img`
  width: 26px;
  height: 26px;
`;

export const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 92px;
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
  z-index: 500;
  display: flex;
  justify-content: space-around;
`;
