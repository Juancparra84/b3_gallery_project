import food1 from '../assets/img/food_1.jpg';
import PropTypes from 'prop-types';

export const Food1 = ( {className}) => {
  return (
   <img src={food1} alt="pancake + miel"
   className={className} />

  )
}

Food1.propTypes = {
    className: PropTypes.string
}