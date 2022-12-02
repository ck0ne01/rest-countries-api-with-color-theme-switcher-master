import styles from './DropdownFilter.module.css';
import ctrl from '../../assets/icons/ctrl.svg';
import { useState } from 'react';
import { fetchAllCountries } from '../../lib/queries';
import { useQuery } from '@tanstack/react-query';

function DropdownFilter() {
  const [isOpen, setIsOpen] = useState(false);

  const btnOnClickHandler = () => {
    console.log('clicked');
    setIsOpen((prevState) => !prevState);
  };

  const { isLoading, isError, data, isSuccess, error } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchAllCountries,
  });

  const dropdownContent = isLoading ? (
    <span>Loading...</span>
  ) : isError && error instanceof Error ? (
    <span>Error: {error.message}</span>
  ) : isSuccess ? (
    <span>
      {[
        ...new Map(
          data.map((country) => [country.region, country.region])
        ).values(),
      ].map((region) => (
        <a key={region} href="#">
          {region}
        </a>
      ))}
    </span>
  ) : null;

  return (
    <div className={styles.contriesContainer}>
      <div className={styles.dropdown}>
        <button onClick={btnOnClickHandler} className={styles.dropbtn}>
          Filter by Region
          <img src={ctrl} alt="ctrl" />
        </button>
        {isOpen ? (
          <div className={styles.dropdownContent}>{dropdownContent}</div>
        ) : null}
      </div>
    </div>
  );
}

export default DropdownFilter;
