import { SearchBar } from '../../components';

export function Countries() {
  return (
    <div className="flex flex-wrap flex-row text-xl justify-center text-sm font-extralight min-w-min px-10 pb-10 w-screen">
      <SearchBar onError={() => null} onCountrySelect={() => null} />
    </div>
  );
}
