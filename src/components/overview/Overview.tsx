import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  fetchCountriesByName,
  fetchCountriesByRegion,
  fetchAllCountries,
} from '../../lib/queries';
import DropdownFilter from './controlbar/DropdownFilter';
import Searchbar from './controlbar/Searchbar';
import CountryCard from './main/CountryCard';
import styles from './Overview.module.css';

function Overview({ setShowDetail }: { setShowDetail: () => void }) {
  const [regionFilter, setRegionFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const { isLoading, isError, data, isSuccess, error } = searchFilter
    ? useQuery({
        queryKey: ['countries', { searchFilter }],
        queryFn: fetchCountriesByName,
      })
    : regionFilter
    ? useQuery({
        queryKey: ['countries', { regionFilter }],
        queryFn: fetchCountriesByRegion,
      })
    : useQuery({
        queryKey: ['countries'],
        queryFn: fetchAllCountries,
      });

  const mainContent = isLoading ? (
    <span>Loading...</span>
  ) : isError ? (
    <span>No matching country found 🙁</span>
  ) : isSuccess ? (
    <div className={styles.contriesContainer}>
      {data.map((country) => (
        <CountryCard country={country} onClick={setShowDetail} />
      ))}
    </div>
  ) : null;

  return (
    <main className={styles.content}>
      <section className={styles.controlBar}>
        <Searchbar setSearchFilter={setSearchFilter} />
        <DropdownFilter setRegionFilter={setRegionFilter} />
      </section>
      <section>{mainContent}</section>
    </main>
  );
}

export default Overview;
