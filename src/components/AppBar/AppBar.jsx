import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';

// import { useAuth } from 'hooks';
import { Header, Wrapper } from './AppBar.styled';
import { Container } from 'components/Container/Container';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

    // const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Wrapper>
          <Navigation />
          {/* <UserMenu />
          <AuthNav /> */}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Wrapper>
      </Container>
    </Header>
  );
};
export default AppBar;
