import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, Outlet} from 'react-router-dom';
import {imagesRequestAsync} from '../../../store/images/imagesAction';
import {ratingRequest} from '../../../utils/rating';
import style from './FullScreenPhoto.module.css';

export const FullScreenPhoto = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.images.images);
  const token = useSelector((state) => state.token.token);
  const [like, setLike] = useState(image.liked_by_user);
  const [likeCount, setLikeCount] = useState(0);
  const {id} = useParams();

  useEffect(() => {
    dispatch(imagesRequestAsync(id));
  }, [id]);

  useEffect(() => {
    setLikeCount(image.likes);
  }, [image]);

  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Intl.DateTimeFormat('ru', options).format(new Date(date));
  };

  const handleRating = () => {
    setLike(!like);
    if (like) {
      setLikeCount((state) => (state -= 1));
    } else {
      setLikeCount((state) => (state += 1));
    }
    ratingRequest(id, like, token);
  };

  return (
    !Array.isArray(image) && (
      <div className={style.wrapper}>
        <img
          className={style.image}
          src={image.urls.small}
          alt={image.user.name}
        />
        <div className={style.dataWrapper}>
          <a className={style.href} href={image.user.links.self}>
            <img src={image.user.profile_image.medium} alt={image.user.name} />
            <p>{image.user.name}</p>
          </a>
          <div className={style.likesWrapper}>
            {token !== '' ?
            <button
              className={!like ? style.likeBtn : style.dislikeBtn}
              onClick={() => handleRating()}
            /> : <p>Авторизуйтесь чтобы ставить лайки</p>}
            <p className={style.likes}>{likeCount}</p>
          </div>
          <p className={style.date}>{formatDate(image.created_at)}</p>
        </div>
        <Outlet />
      </div>
    )
  );
};
