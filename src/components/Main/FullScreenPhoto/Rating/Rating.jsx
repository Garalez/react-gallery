import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ratingRequest} from '../../../../utils/rating';
import PropTypes from 'prop-types';
import style from './Rating.module.css';

export const Rating = ({image, id}) => {
  const token = useSelector((state) => state.token.token);
  const like = useSelector((state) => state.images.like);
  const [likeCount, setLikeCount] = useState(0);
  const [likeState, setLikeState] = useState(null);

  useEffect(() => {
    setLikeCount(image.likes);
    setLikeState(like);
  }, [image]);

  const handleRating = () => {
    setLikeState(!likeState);
    if (like) {
      setLikeCount((state) => state - 1);
    } else {
      setLikeCount((state) => state + 1);
    }
    ratingRequest(id, like, token);
  };

  return (
    <div className={style.likesWrapper}>
      {token !== '' ? (
        <button
          className={!likeState ? style.likeBtn : style.dislikeBtn}
          onClick={() => handleRating()}
        />
      ) : (
        <p>Авторизуйтесь чтобы ставить лайки</p>
      )}
      <p className={style.likes}>{likeCount}</p>
    </div>
  );
};

Rating.propTypes = {
  image: PropTypes.object,
  id: PropTypes.string,
};
