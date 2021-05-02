import PropTypes from 'prop-types';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export function Map({ countries }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'API_KEY'
  });

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  let center = {
    lat: 37.772,
    lng: -122.214
  };

  if (countries.length) {
    const lastCountry = countries[countries.length - 1];
    center = { lat: lastCountry.latlng[0], lng: lastCountry.latlng[1] };
  }

  return (
    <div className="relative w-64 h-64 sm:w-98 sm:h-98 md:w-100 md:h-100">
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {countries.map((country) => {
            let position = { lat: country.latlng[0], lng: country.latlng[1] };
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
