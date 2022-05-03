import { Container } from '@mui/material';

import LoginForm from '../../components/login-form/login-form';

function LoginPage(): JSX.Element {
  return (
    <Container sx={{ display: 'flex', height: '100%' }}>
      <LoginForm />
    </Container>
  );
}

export default LoginPage;
