import styles from './header.module.css';

function Header(): JSX.Element {
  return (
    <header className={styles['header']}>
      <p>HEADER</p>
    </header>
  );
}

export default Header;
