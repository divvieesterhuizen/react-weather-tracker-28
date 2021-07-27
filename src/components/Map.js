import { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import MarkerPopupBox from './MarkerPopupBox';

const Map = ({ weatherData, center, zoom }) => {
  const [markerPopupText, setMarkerPopupText] = useState(null);

  const GOOGLE_MAP_KEY =
    process.env.GOOGLE_MAP_KEY || process.env.REACT_APP_GOOGLE_MAP_KEY;

  useEffect(() => {
    // set initial city popup message
    setTimeout(() => {
      setMarkerPopupText(weatherData[0]);
      setTimeout(() => {
        setMarkerPopupText(null);
      }, 5000);
    }, 1500);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='mapContainer'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {weatherData.map((item) => (
          <Marker
            key={item.id}
            lat={item.coord.lat}
            lng={item.coord.lon}
            onClick={() => {
              setMarkerPopupText(item);
            }}
          />
        ))}
      </GoogleMapReact>

      {markerPopupText && (
        <MarkerPopupBox
          onClick={() => {
            setMarkerPopupText(null);
          }}
          item={markerPopupText}
        />
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: -33.9633,
    lng: 18.4764,
  },
  zoom: 11,
};

export default Map;
