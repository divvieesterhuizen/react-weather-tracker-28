import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const MarkerPopupBox = ({ item, onClick }) => {
  return (
    <div className='marker-popup-box'>
      <FaWindowClose
        onClick={onClick}
        className='marker-icon'
        style={{ color: 'white' }}
      />

      <h3>Location: {item.name}</h3>
      <p>
        Latitude: {item.coord.lat}, Longetude: {item.coord.lon}
      </p>
      <p>
        Temp Min: {item.main.temp_min} &#8451;, Temp Max: {item.main.temp_max}{' '}
        &#8451;
      </p>
      <p>
        Weather: {item.weather[0].main}, {item.weather[0].description}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt='weather icon'
      />
    </div>
  );
};

export default MarkerPopupBox;
