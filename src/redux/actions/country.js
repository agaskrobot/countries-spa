const APPEND_COUNTRY = 'COUNTRY_APPEND_COUNTRY';
const DELETE_COUNTRY = 'COUNTRY_DELETE_COUNTRY';

const actions = {
  APPEND_COUNTRY,
  DELETE_COUNTRY,

  appendCountry: (country) => ({ type: APPEND_COUNTRY, payload: { country } }),
  deleteCountry: (countryName) => ({ type: DELETE_COUNTRY, payload: { countryName } })
};

export default actions;
