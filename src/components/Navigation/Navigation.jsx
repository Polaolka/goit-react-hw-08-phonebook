import { NavLink } from 'react-router-dom';
import {NavBox} from './Navigation.styled'
// import { useAuth } from 'hooks';
// import css from './Navigation.module.css';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <NavBox>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/phonebook">
        PhoneBook
      </NavLink>
    </NavBox>
  );
};
