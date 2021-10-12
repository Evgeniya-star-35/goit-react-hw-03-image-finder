import propTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images, onOpenModal }) {
  // console.log(images);
  return (
    <ul className={s.imageGallery} onClick={onOpenModal}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li className={s.imageGalleryItem} key={id}>
          <ImageGalleryItem
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        </li>
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: propTypes.arrayOf(propTypes.shape).isRequired,
  onOpenModal: propTypes.func,
};
