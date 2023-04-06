import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section } from 'components/Section/Section';

export default function Login() {
  return (
    <div>
      <Section>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      </Section>
    </div>
  );
}