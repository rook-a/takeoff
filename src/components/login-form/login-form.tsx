import { ChangeEvent, FormEvent, useState } from 'react';
import {
  FormLabel,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Button,
} from '@mui/material';
import styles from './login-form.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  loginAction,
  selectloginStatus,
} from '../../store/user-slice/user-slice';
import { FetchStatus } from '../../utils/const';

const REG_EXP_EMAIL = /^\S+@[aA-zZ]{2,10}\.[aA-zZ]{2,3}$/;
const REG_EXP_PASSWORD = /([0-9]{1}[aA-zZ]{1})|([aA-zZ]{1}[0-9]{1})/i;

interface LoginField {
  value: string;
  regexp: RegExp;
  error: boolean;
  errorText: string;
}

type InitialState = { [key: string]: LoginField };

const fields = {
  email: {
    label: 'Email',
    type: 'email',
  },
  password: {
    label: 'Password',
    type: 'password',
  },
};

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(selectloginStatus);
  const [formState, setFormState] = useState<InitialState>({
    email: {
      value: '',
      regexp: REG_EXP_EMAIL,
      error: false,
      errorText: 'Email is not entered correctly',
    },
    password: {
      value: '',
      regexp: REG_EXP_PASSWORD,
      error: false,
      errorText: 'Enter at least 1 number and 1 letter',
    },
  });

  const isPending = loginStatus === FetchStatus.Pending;
  const isValid = Object.values(formState).some(({ error }) => error);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target;

    const regExp = formState[name].regexp;
    const isValid = regExp.test(value);

    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        error: !isValid,
        value,
      },
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const data = {
      email: formState.email.value,
      password: formState.password.value,
    };

    dispatch(loginAction(data));
  };

  return (
    <form
      action='#'
      method='post'
      onSubmit={handleSubmit}
      className={styles['form-container']}>
      <FormLabel sx={{ fontSize: '28px' }}>Login</FormLabel>

      {Object.entries(fields).map(([name, { label, type }]) => (
        <FormControl key={name}>
          <InputLabel htmlFor={type}>{label}</InputLabel>
          <Input
            onChange={handleChange}
            id={type}
            type={type}
            name={name}
            value={formState[name].value}
            aria-describedby={`${type}-helper-text`}
            required
          />
          {formState[name].error && (
            <FormHelperText error id={`${type}-helper-text`}>
              {formState[name].errorText}
            </FormHelperText>
          )}
        </FormControl>
      ))}

      <Button
        sx={{ mt: '30px' }}
        type='submit'
        color='info'
        variant='outlined'
        disabled={isValid || isPending}>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
