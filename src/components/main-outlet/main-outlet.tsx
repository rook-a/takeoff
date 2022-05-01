import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

import styles from './main-outlet.module.css';

function MainOutlet(): JSX.Element {
  return (
    <div className={styles['container']}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainOutlet;
