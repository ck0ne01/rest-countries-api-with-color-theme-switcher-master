import styles from './Searchbar.module.css';
import search from '../../assets/icons/search.svg';

function Searchbar() {
  return (
    <>
      <form method="get">
        <div className={styles.searchbar}>
          <img src={search} alt="search" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a country..."
          />
        </div>
      </form>
    </>
  );
}

export default Searchbar;
