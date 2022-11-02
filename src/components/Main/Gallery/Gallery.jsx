// import style from './Gallery.module.css';
import {urlAuth} from '../../../api/auth';
import {imagesRequestAsync} from '../../../store/images/imagesAction';
import {useDispatch, useSelector} from 'react-redux';
import Images from './Images';
import Masonry from 'react-masonry-css';

export const Gallery = () => {
  const images = useSelector((state) => state.images.images);
  console.log('images: ', images);
  const dispatch = useDispatch();
  return (
    <>
      <a href={urlAuth}>На сайт</a>
      <button
        onClick={() => {
          dispatch(imagesRequestAsync());
          console.log(images);
        }}
      >
        Запрос
      </button>
      <Masonry
        breakpointCols={5}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {images &&
          images.map((image) => (
            <div key={image.id}>
              <Images image={image} />
            </div>
          ))}
        <div/>
      </Masonry>
    </>
  );
};
