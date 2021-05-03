import PropTypes from 'prop-types';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const LAT = 0;
const LNG = 1;

export function Map({ countries }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  let center = {
    lat: 37.772,
    lng: -122.214
  };

  // Focus on the last added country
  if (countries.length) {
    const lastCountry = countries[countries.length - 1];
    center = { lat: lastCountry.latlng[LAT], lng: lastCountry.latlng[LNG] };
  }

  return (
    <div className="relative w-64 h-64 sm:w-98 sm:h-98 mx-4">
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
          {countries.map((country) => {
            let position = { lat: country.latlng[LAT], lng: country.latlng[LNG] };
            return <Marker key={country.alpha3Code} label={country.name} position={position} />;
          })}
        </GoogleMap>
      )}
    </div>
  );
}

Map.propTypes = {
  countries: PropTypes.array
};
