import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
//   const { user } = useAuth();
const user = useSelector(selectUser);
  return (
    <div >
      {/* {user.name} */}
      <p >Welcome, {user.name}</p>
      {/* onClick={() => dispatch(logOut())} */}
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};