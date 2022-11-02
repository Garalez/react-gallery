// import style from './Images.module.css';
import PropTypes from 'prop-types';

export const Images = ({image}) => <img src={image.urls.small} />;

Images.propTypes = {
  image: PropTypes.object,
};
