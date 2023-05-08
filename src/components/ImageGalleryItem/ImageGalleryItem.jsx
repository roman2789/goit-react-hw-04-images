import { GalleryItem, ItemRef } from './ImageGalleryItemStyled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Item = ({ image: { largeImageURL }, children }) => {
  const [showModal, setShowModal] = useState(false);
  const onToggleModal = e => {
    setShowModal(!showModal);
  };

  return (
    <GalleryItem>
      <ItemRef onClick={onToggleModal}>
        {children}
        {showModal && <Modal onClose={onToggleModal} image={largeImageURL} />}
      </ItemRef>
    </GalleryItem>
  );
};

Item.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
