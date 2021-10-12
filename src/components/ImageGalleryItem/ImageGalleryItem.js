import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => (
  <>
    <img
      src={webformatURL}
      alt={tags}
      data-url={largeImageURL}
      className={s.galleryItemImage}
    />
  </>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
