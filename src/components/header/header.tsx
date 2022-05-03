import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, List, ListItem, Toolbar } from '@mui/material';

import { useAppDispatch } from '../../hooks/hooks';
import { logoutAction } from '../../store/user-slice/user-slice';

import { AppRoute, AuthorizationStatus } from '../../utils/const';

import styles from './header.module.css';

interface HeaderProps {
  authorizationStatus: AuthorizationStatus;
}

function Header({ authorizationStatus }: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    dispatch(logoutAction());
  };

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <AppBar position='static' sx={{ mb: '50px' }}>
      <Toolbar>
        <Link to={AppRoute.Root} className={styles['logo']}>
          LOGO
        </Link>
        <List sx={{ display: 'flex', flexGrow: 1 }}>
          <ListItem>
            <Link to={AppRoute.Contacts} className={styles['link']}>
              Contacts
            </Link>
          </ListItem>
          <ListItem sx={{ justifyContent: 'flex-end' }}>
            {isAuth ? (
              <Link
                onClick={handleClick}
                to={AppRoute.Root}
                className={styles['link']}>
                Logout
              </Link>
            ) : (
              <Link to={AppRoute.Login} className={styles['link']}>
                Login
              </Link>
            )}
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
