import styles from './Searchbar.module.css';
import search from '../../assets/icons/search.svg';
import { FormEvent } from 'react';

function Searchbar({ setSearchFilter }) {
  const searchFilterHander = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchFilter(event.target.search.value);
  };

  return (
    <>
      <form method="get" onSubmit={searchFilterHander}>
        <div className={styles.searchbar}>
          <button>
            <img src={search} alt="search" />
          </button>
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
