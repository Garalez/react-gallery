import {formatDate} from '../../../../utils/formatDate';
import PropTypes from 'prop-types';
import style from './Date.module.css';

export const Date = ({image}) => (
  <p className={style.date}>{formatDate(image.created_at)}</p>
);

Date.propTypes = {
  image: PropTypes.object
};
