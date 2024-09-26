import food3 from '../assets/img/food_3.jpg';
import PropTypes from 'prop-types';

export const Food3 = ( {className} ) => {
  return (
   <img src={food3} alt="Banano"
   className={className} />

  )
}

Food3.propTypes = {
    className: PropTypes.string
}