import style from './Author.module.css';
import PropTypes from 'prop-types';

export const Author = ({image}) => (
  <a className={style.href} href={image.user.links.self}>
    <img src={image.user.profile_image.medium} alt={image.user.name} />
    <p>{image.user.name}</p>
  </a>
);

Author.propTypes = {
  image: PropTypes.object,
};
