import animal2 from '../assets/img/animal_2.jpg';
import PropTypes from 'prop-types';

export const Animal2 = ( {className} ) => {
  return (
   <img src={animal2} alt="Colibrí"
   className={className} />

  )
}

Animal2.propTypes = {
    className: PropTypes.string
}