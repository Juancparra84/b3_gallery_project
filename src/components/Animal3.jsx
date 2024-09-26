import animal3 from '../assets/img/animal_3.jpg';
import PropTypes from 'prop-types';

export const Animal3 = ( {className} ) => {
  return (
   <img src={animal3} alt="Tigre"
   className={className} />

  )
}

Animal3.propTypes = {
    className: PropTypes.string
}