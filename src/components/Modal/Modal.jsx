import { createPortal } from 'react-dom';
import { Backdrop, ModaLayer } from './ModalStyled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, image }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget !== e.target) {
      onClose();
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModaLayer>
        <img loading="lazy" src={image} alt="img" />
      </ModaLayer>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
