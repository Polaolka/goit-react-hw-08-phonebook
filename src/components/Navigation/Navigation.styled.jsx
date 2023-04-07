import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`

  color: #242424;
  text-decoration: none;
  &.active {
    color: #4a7bd8;
    font-weight: bold;
  }
`;

export const NavBox = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
`;
