import { Gallery } from './ImageGalleryStyled';
import { Item } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <Gallery>
        {images &&
          images.map(image => (
            <Item key={image.id} image={image}>
              <img
                loading="lazy"
                alt={image.tags}
                src={image.webformatURL}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </Item>
          ))}
      </Gallery>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
