const APPEND_COUNTRY = 'COUNTRY_APPEND_COUNTRY';
const LOAD_COUNTRY_LIST = 'COUNTRY_LOAD_COUNTRY_LIST';
const DELETE_COUNTRY = 'COUNTRY_DELETE_COUNTRY';

const actions = {
  APPEND_COUNTRY,
  LOAD_COUNTRY_LIST,
  DELETE_COUNTRY,

  appendCountry: (country) => ({ type: APPEND_COUNTRY, payload: { country } }),
  deleteCountry: (countryName) => ({ type: DELETE_COUNTRY, payload: { countryName } }),
  loadCountryList: (countryList) => ({ type: LOAD_COUNTRY_LIST, payload: { countryList } })
};

export default actions;
