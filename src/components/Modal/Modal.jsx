import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModaLayer } from './ModalStyled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget !== e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModaLayer>
          <img loading="lazy" src={this.props.image} alt="img" />
        </ModaLayer>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
