import { useState } from 'react';

import { SearchBar, Alert, SelectedCountries, Map, Chart } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions/country';

export function Countries() {
  const [error, setError] = useState(null);
  const selectedCountries = useSelector((s) => s.country.items);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap flex-row text-xl justify-center text-sm font-extralight min-w-min px-10 pb-10 w-screen">
      <Alert error={error} onClose={() => setError(null)} />
      <SearchBar
        onError={setError}
        selectedCountries={selectedCountries}
        onCountrySelect={(result) => dispatch(actions.appendCountry(result))}
      />
      <SelectedCountries
        countries={selectedCountries}
        onClick={(countryName) => dispatch(actions.deleteCountry(countryName))}
      />
      <Map countries={selectedCountries} />
      <Chart countries={selectedCountries} />
    </div>
  );
}
