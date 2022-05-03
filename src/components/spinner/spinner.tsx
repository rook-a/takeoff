import styles from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={styles['spinner-container']}>
      <div className={styles['spinner']}>Loading...</div>
    </div>
  );
}

export default Spinner;
