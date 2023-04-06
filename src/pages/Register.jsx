import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Section/Section';
import { Helmet } from 'react-helmet';

export default function Register() {
  return (
    <div>
      <Section>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </Section>
    </div>
  );
}
