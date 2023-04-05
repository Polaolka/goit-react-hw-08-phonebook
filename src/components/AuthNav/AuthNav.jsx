import { NavLink } from 'react-router-dom';
import { Wrapper } from './AuthNav.styled';

// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Log In
      </NavLink>
    </Wrapper>
  );
};