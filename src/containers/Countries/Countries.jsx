import { useState } from 'react';

import { SearchBar, Alert } from '../../components';

export function Countries() {
  const [error, setError] = useState(null);
  return (
    <div className="flex flex-wrap flex-row text-xl justify-center text-sm font-extralight min-w-min px-10 pb-10 w-screen">
      <Alert error={error} onClose={() => setError(null)} />
      <SearchBar
        onError={setError}
        selectedCountries={[{ name: 'New Caledonia' }]}
        onCountrySelect={(result) => console.log(result)}
      />
    </div>
  );
}
