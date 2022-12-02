import { useQuery } from '@tanstack/react-query';

import Header from './components/Header';
import DropdownFilter from './components/controlbar/DropdownFilter';
import Searchbar from './components/controlbar/Searchbar';
import CountryCard from './components/main/CountryCard';

import styles from './App.module.css';
import { fetchAllCountries, fetchRegionCountries } from './lib/queries';

function App() {
  const mainContent = () => {
    const region = 'europe';
    const { isLoading, isError, data, isSuccess, error } = useQuery({
      queryKey: ['countries', { region }],
      queryFn: fetchRegionCountries,
    });

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (isError) {
      if (error instanceof Error) return <span>Error: {error.message}</span>;
    }

    if (isSuccess) {
      return (
        <div className={styles.contriesContainer}>
          {data.map((country) => (
            <CountryCard country={country} />
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <Header />
      <main className={styles.content}>
        <section className={styles.controlBar}>
          <Searchbar />
          {/* TODO: In DroptdownFilter send regions into global context. Here use regions query with vaules from context instead of allCountries query */}
          <DropdownFilter />
        </section>
        <section>{mainContent()}</section>
      </main>
    </>
  );
}

export default App;
