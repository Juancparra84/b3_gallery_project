import landscape from '../assets/img/landscape.jpg';
import PropTypes from 'prop-types';

export const Landscape = ( {className} ) => {
  return (
   <img src={landscape} alt="Tigre"
   className={className} />

  )
}

Landscape.propTypes = {
    className: PropTypes.string
}