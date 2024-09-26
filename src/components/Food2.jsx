import food2 from '../assets/img/food_2.jpg';
import PropTypes from 'prop-types';

export const Food2 = ( {className} ) => {
  return (
   <img src={food2} alt="Pescado Frito"
   className={className} />

  )
}

Food2.propTypes = {
    className: PropTypes.string
}