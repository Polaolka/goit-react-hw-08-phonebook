// import { NavLink } from 'react-router-dom';
import {NavBox, NavigationLink} from './Navigation.styled'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

export const Navigation = () => {

  return (
    <NavBox>
      <NavigationLink to="/">
        <CottageOutlinedIcon/>
        </NavigationLink>
      <NavigationLink to="/phonebook">
        PhoneBook
      </NavigationLink>
    </NavBox>
  );
};
