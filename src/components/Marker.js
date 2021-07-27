import { FaMapMarkerAlt } from 'react-icons/fa';

const Marker = ({ onClick }) => {
  return (
    <div className='marker-div' onClick={onClick}>
      <FaMapMarkerAlt className='marker-icon'></FaMapMarkerAlt>
    </div>
  );
};

export default Marker;
