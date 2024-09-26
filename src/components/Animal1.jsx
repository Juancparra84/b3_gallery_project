import animal1 from '../assets/img/animal_1.jpg';
import PropTypes from 'prop-types';

export const Animal1 = ( {className}) => {
  return (
   <img src={animal1} alt="landscape"
   className={className} />

  );
}

Animal1.propTypes = {
    className: PropTypes.string
};