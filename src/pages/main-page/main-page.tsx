import { List } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './main-page.module.css';

function MainPage(): JSX.Element {
  return (
    <>
      <main className={styles['main']}>
        <List className={styles['menu-links']}>
          <li>
            <Link className={styles['link']} to='/login'>
              Login
            </Link>
          </li>
          <li>
            <Link className={styles['link']} to='/contacts'>
              Contacts
            </Link>
          </li>
        </List>
      </main>
    </>
  );
}

export default MainPage;
