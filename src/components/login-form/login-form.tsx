import {
  FormLabel,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Button,
} from '@mui/material';
import styles from './login-form.module.css';

function LoginForm(): JSX.Element {
  return (
    <form className={styles['form-container']}>
      <FormLabel>Sign in</FormLabel>
      <FormControl>
        <InputLabel htmlFor='email'>Email address</InputLabel>
        <Input id='email' aria-describedby='email-helper-text' />
        <FormHelperText id='email-helper-text'>
          We'll never share your email.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <Input id='password' aria-describedby='password-helper-text' />
        <FormHelperText id='password-helper-text'>
          We'll never share your password.
        </FormHelperText>
      </FormControl>

      <div className={styles['button-group']}>
        <Button color='info' variant='outlined'>
          Login
        </Button>
        <Button color='info' variant='outlined'>
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
