import { useQuery } from '@tanstack/react-query';
import { fetchCountriesByName } from '../../lib/queries';
import styles from './Detail.module.css';

import arrowLeft from '../../assets/icons/arrow-left2.svg';

function Detail({ setShowDetail }: { setShowDetail: () => void }) {
  const searchFilter = 'Belgium';
  const { isLoading, isError, data, isSuccess, error } = useQuery({
    queryKey: ['countries', { searchFilter }],
    queryFn: fetchCountriesByName,
  });

  const mainContent = isLoading ? (
    <span>Loading...</span>
  ) : isError ? (
    <span>No matching country found 🙁</span>
  ) : isSuccess ? (
    <div className={styles.contriesContainer}>
      {data.map((country) => (
        <>
          <div>
            <img src={country.flags.svg} alt="german-flag" />
          </div>
          <div>
            <h1>{country.name.common}</h1>
            <div className={styles.detailsContainer}>
              <div>
                <p>
                  <span>Native Name: </span>
                  {Object.values(country.name.nativeName).at(-1).common}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Top Level Domain: </span>
                  {country.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {Object.values(country.currencies).map(
                    (currency) => currency.name
                  )}
                </p>
                <p>
                  <span>Langues: </span>
                  {Object.values(country.languages).map((language) => (
                    <span className={styles.language}>{language}</span>
                  ))}
                </p>
              </div>
            </div>
            <div>
              <span className={styles.borderText}>Border Countries:</span>
              {country.borders?.map((border) => (
                <button className={styles.borderBtn}>{border}</button>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  ) : null;

  return (
    <div className={styles.content}>
      <section className={styles.controlBar}>
        <button className={styles.backBtn} onClick={setShowDetail}>
          <img src={arrowLeft} alt="arrow-left" />
          <p>Back</p>
        </button>
      </section>
      {mainContent}
    </div>
  );
}

export default Detail;
