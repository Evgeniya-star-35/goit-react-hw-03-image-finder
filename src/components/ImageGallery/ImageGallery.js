import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={s.imageGallery}>
      {images.map(({ id, name, url }) => (
        <li className={s.imageGalleryItem} key={id}>
          <ImageGalleryItem name={name} url={url} />
        </li>
      ))}
    </ul>
  );
}
