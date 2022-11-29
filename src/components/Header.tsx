import styles from './Header.module.css';
import moonStroke from '../assets/icons/moon-stroke.svg';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Where in the world?</h1>
        <div className={styles.modeSwitcher}>
          <img src={moonStroke} alt="moonStroke" />
          <h3>Dark Mode</h3>
        </div>
      </header>
    </>
  );
}

export default Header;
