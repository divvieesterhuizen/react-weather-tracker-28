import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Map from './components/Map';

function App() {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);

  const API_KEY = process.env.API_KEY || process.env.REACT_APP_API_KEY;

  if (!API_KEY) {
    alert(
      'API KEY not found in process.env. Application will not work until you add an API key from www.openweathermap.org.'
    );
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/find?lat=-33.9258&lon=18.4232&cnt=50&appid=${API_KEY}&units=metric`
      );
      const { list } = await res.json();
      //const { list } = data;
      //console.log(list);

      setWeatherData(await list);
      setLoading(false);
    };

    fetchWeatherData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className=''>
      <Header />
      {loading && !weatherData ? <Loader /> : <Map weatherData={weatherData} />}
    </div>
  );
}

export default App;
