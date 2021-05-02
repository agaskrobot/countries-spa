import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SpinnerIcon } from '../assets/icons/spinner.svg';
import { getCountry } from '../api';

const Loading = () => (
  <div className="flex rounded-lg w-full h-40 bg-white shadow-lg items-center justify-center">
    <SpinnerIcon className="animate-spin m-3 h-16 w-16 text-indigo-500" />
  </div>
);

const ResultList = ({ results, onCountryClick }) => {
  if (!results.length) {
    return null;
  }
  return (
    <div className="flex-col text-base font-extralight shadow-lg rounded-lg w-full h-auto p-5 bg-white text-gray-700 items-center justify-center">
      {results.map((result) => (
        <div
          onClick={() => onCountryClick(result)}
          className="flex w-full justify-between items-center py-2 cursor-pointer hover:text-indigo-500"
          key={result.alpha3Code}
        >
          <div>{result.name}</div>
          <div className="flex font-light bg-indigo-500 text-white rounded-full w-5 h-5 items-center justify-center">
            +
          </div>
        </div>
      ))}
    </div>
  );
};

ResultList.propTypes = {
  results: PropTypes.array,
  selectedCountries: PropTypes.array,
  onCountryClick: PropTypes.func
};

export function SearchBar({ selectedCountries, onCountrySelect, onError }) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [results, setResults] = useState([]);

  const getResult = () => {
    getCountry(value)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        setResults([]);
        onError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // Wait 2 sec before calling api
  useEffect(() => {
    if (value) {
      setLoading(true);
      const timer = setTimeout(() => {
        getResult();
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [value]);

  const handleSelectCountry = (country) => {
    onCountrySelect(country);
    setResultsVisible(false);
  };

  let resultsComponent;
  if (value !== '' && loading) {
    resultsComponent = <Loading />;
  } else if (value !== '' && results.length) {
    let resultsToShow = results.filter((result) => !selectedCountries.includes(result));
    resultsComponent = <ResultList results={resultsToShow} onCountryClick={handleSelectCountry} />;
  } else {
    resultsComponent = null;
  }

  return (
    <div className="z-40 mt-10 w-full text-base font-extralight">
      <input
        onClick={() => setResultsVisible(true)}
        autoComplete="off"
        className="w-full rounded-lg text-base font-extralight focus:outline-none h-10 p-2 text-gray-700"
        id="searchBar"
        type="text"
        placeholder="Search country..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {resultsVisible && resultsComponent}
    </div>
  );
}
SearchBar.propTypes = {
  selectedCountries: PropTypes.array,
  onError: PropTypes.func,
  onCountrySelect: PropTypes.func
};
