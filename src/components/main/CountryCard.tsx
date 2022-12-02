import { Country } from '../../types/country';
import styles from './CountryCard.module.css';

function CountryCard({ country }: { country: Country }) {
  return (
    <div className={styles.cardContainer} key={country.cioc}>
      <img src={country.flags.svg} alt="german-flag" />
      <div className={styles.cardInfo} key={country.cioc}>
        <h2>{country.name.common}</h2>
        <p>
          <span>Polulation</span>: {country.population}
        </p>
        <p>
          <span>Region</span>: {country.region}
        </p>
        <p>
          <span>Capital</span>: {country.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
