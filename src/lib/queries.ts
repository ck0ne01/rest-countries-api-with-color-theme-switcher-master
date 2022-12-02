import axios from 'axios';
import { Country } from '../types/country';

export const fetchAllCountries = (): Promise<Country[]> =>
  axios.get('https://restcountries.com/v3.1/all').then((res) => res.data);

export const fetchCountriesByRegion = ({ queryKey }): Promise<Country[]> => {
  const [_key, { regionFilter }] = queryKey;
  return axios
    .get(`https://restcountries.com/v3.1/region/${regionFilter}`)
    .then((res) => res.data);
};

export const fetchCountriesByName = ({ queryKey }): Promise<Country[]> => {
  const [_key, { searchFilter }] = queryKey;
  return axios
    .get(`https://restcountries.com/v3.1/name/${searchFilter}?fullText=true`)
    .then((res) => res.data);
};
