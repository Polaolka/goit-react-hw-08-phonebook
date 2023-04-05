import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import { Header, Wrapper } from './AppBar.styled';
import { Container } from 'components/Container/Container';

const AppBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Wrapper>
          <Navigation />
          {/* <UserMenu /> */}
          <AuthNav />
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        </Wrapper>
      </Container>
    </Header>
  );
};
export default AppBar;
