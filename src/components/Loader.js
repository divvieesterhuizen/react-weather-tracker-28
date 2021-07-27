import Spinner from './loading.gif';

const Loader = () => {
  return (
    <div>
      <img
        alt='loader'
        style={{ margin: '0 auto', display: 'block' }}
        src={Spinner}
      />
      <h1 style={{ textAlign: 'center' }}>Fetching Data ...</h1>
    </div>
  );
};

export default Loader;
