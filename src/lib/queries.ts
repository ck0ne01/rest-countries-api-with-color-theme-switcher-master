import axios from 'axios';
import { Country } from '../types/country';

export const fetchAllCountries = (): Promise<Country[]> =>
  axios.get('https://restcountries.com/v3.1/all').then((res) => res.data);

export const fetchRegionCountries = ({ queryKey }): Promise<Country[]> => {
  const [_key, { region }] = queryKey;
  return axios
    .get(`https://restcountries.com/v3.1/region/${region}`)
    .then((res) => res.data);
};
