import style from './FullScreenPhoto.module.css';
import Author from './Author';
import Date from './Date';
import Rating from './Rating';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, Outlet} from 'react-router-dom';
import {imagesRequestAsync} from '../../../store/images/imagesAction';

export const FullScreenPhoto = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.images.images);
  const {id} = useParams();

  useEffect(() => {
    dispatch(imagesRequestAsync(id));
  }, [id]);

  return (
    !Array.isArray(image) && (
      <div className={style.wrapper}>
        <img
          className={style.image}
          src={image.urls.small}
          alt={image.user.name}
        />
        <div className={style.dataWrapper}>
          <Author image={image} />
          <Rating image={image} id={id} />
          <Date image={image} />
        </div>
        <Outlet />
      </div>
    )
  );
};
