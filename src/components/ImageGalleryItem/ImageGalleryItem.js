import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
export default function ImageGalleryItem({ id, name, url }) {
  return (
    <>
      <img src={url} alt={name} className={s.galleryItemImage} />
    </>
  );
}
ImageGalleryItem.propType = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
