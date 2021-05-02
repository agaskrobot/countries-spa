import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SpinnerIcon } from '../assets/icons/spinner.svg';
import { getCountry } from '../api';

export function SearchBar({ onCountrySelect, onError }) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const getResult = () => {
    getCountry(value)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => onError(error.message))
      .finally(() => setLoading(false));
  };

  // Wait 2 sec before calling api
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getResult();
    }, 2000);
    return () => clearTimeout(timer);
  }, [value]);

  let resultsComponent;
  if (value !== '' && loading) {
    resultsComponent = (
      <div className="flex rounded-lg w-full h-40 bg-white shadow-lg items-center justify-center">
        <SpinnerIcon className="animate-spin m-3 h-16 w-16 text-indigo-500" />
      </div>
    );
  } else if (value !== '' && results.length) {
    resultsComponent = (
      <div className="flex-col text-base font-extralight shadow-lg rounded-lg w-full h-auto p-5 bg-white text-gray-700 items-center justify-center">
        {results.map((result) => (
          <div
            onClick={() => onCountrySelect(result)}
            className="w-full cursor-pointer py-2 hover:text-indigo-500"
            key={result.episode_id}
          >
            {result.name}
          </div>
        ))}
      </div>
    );
  } else if (value !== '' && !results.length) {
    resultsComponent = (
      <div className="flex text-base font-extralight shadow-lg rounded-lg w-full h-40 bg-white items-center text-gray-700 justify-center">
        No results found
      </div>
    );
  }

  return (
    <div className="z-40 mt-10 w-full text-base font-extralight">
      <input
        autoComplete="off"
        className="w-full rounded-lg text-base font-extralight focus:outline-none h-10 p-2 text-gray-700"
        id="searchBar"
        type="text"
        placeholder="Search country..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {resultsComponent}
    </div>
  );
}
SearchBar.propTypes = {
  onError: PropTypes.func,
  onCountrySelect: PropTypes.func
};
