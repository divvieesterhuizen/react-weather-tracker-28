const Header = ({ appName }) => {
  return (
    <div className='header'>
      <div className='container'>
        <h1>{appName}</h1>
      </div>
    </div>
  );
};

Header.defaultProps = {
  appName: 'Weather Tracking App',
};

export default Header;
