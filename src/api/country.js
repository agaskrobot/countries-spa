import axios from 'axios/index';

// Get country by name
export const getCountry = (name) => axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
