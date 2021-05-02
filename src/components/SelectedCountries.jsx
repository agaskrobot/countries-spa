import PropTypes from 'prop-types';

const Item = ({ country, onClick }) => (
  <div
    onClick={() => onClick(country)}
    className="flex rounded-full text-sm w-auto py-1 px-2 m-2 bg-indigo-500 text-white items-center cursor-pointer"
  >
    <div className="mr-2">{country}</div>
    <div className="font-normal"> ×</div>
  </div>
);

Item.propTypes = {
  country: PropTypes.string,
  onClick: PropTypes.func
};

export function SelectedCountries({ countries, onClick }) {
  return (
    <div className="flex flex-wrap w-full py-3 items-center">
      {countries.map((country) => (
        <Item key={country.alpha3Code} country={country.name} onClick={onClick} />
      ))}
    </div>
  );
}
SelectedCountries.propTypes = {
  onClick: PropTypes.func,
  countries: PropTypes.array
};
