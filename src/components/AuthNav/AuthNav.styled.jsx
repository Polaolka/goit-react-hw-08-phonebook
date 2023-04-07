import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
gap: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #242424;
  text-decoration: none;
  &.active {
    color: #4a7bd8;
    font-weight: bold;
  }
`;