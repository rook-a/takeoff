import LoginForm from '../../components/login-form/login-form';

import styles from './login-page.module.css';

function LoginPage(): JSX.Element {
  return (
    <main className={styles['container']}>
      <LoginForm />
    </main>
  );
}

export default LoginPage;
