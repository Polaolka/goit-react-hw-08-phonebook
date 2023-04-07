import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Button, Wrapper } from './UserMenu.styled';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Wrapper>
      <Typography>Welcome,</Typography>
      <Typography color="#4a7bd8" fontWeight='bold'> {user.name}</Typography>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <LogoutRoundedIcon />
      </Button>
    </Wrapper>
  );
};
