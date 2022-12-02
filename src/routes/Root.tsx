import { useQuery } from '@tanstack/react-query';

import Header from '../components/Header';
import DropdownFilter from '../components/controlbar/DropdownFilter';
import Searchbar from '../components/controlbar/Searchbar';
import CountryCard from '../components/main/CountryCard';

import styles from './Root.module.css';
import {
  fetchAllCountries,
  fetchCountriesByName,
  fetchCountriesByRegion,
} from '../lib/queries';
import { useState } from 'react';

function Root() {
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
        <CountryCard country={country} />
      ))}
    </div>
  ) : null;

  return (
    <>
      <Header />
      <main className={styles.content}>
        <section className={styles.controlBar}>
          <Searchbar setSearchFilter={setSearchFilter} />
          <DropdownFilter setRegionFilter={setRegionFilter} />
        </section>
        <section>{mainContent}</section>
      </main>
    </>
  );
}

export default Root;
