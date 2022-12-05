import axios from 'axios';
import { Country } from '../types/country';

export const fetchAllCountries = (): Promise<Country[]> =>
  axios.get('https://restcountries.com/v3.1/all').then((res) => res.data);

export const fetchCountriesByRegion = async ({
  queryKey,
}): Promise<Country[]> => {
  const [_key, { regionFilter }] = queryKey;
  const res = await axios.get(
    `https://restcountries.com/v3.1/region/${regionFilter}`
  );
  return res.data;
};

export const fetchCountriesByName = async ({
  queryKey,
}): Promise<Country[]> => {
  const [_key, { searchFilter }] = queryKey;
  const res = await axios.get(
    `https://restcountries.com/v3.1/name/${searchFilter}?fullText=true`
  );
  return res.data;
};
