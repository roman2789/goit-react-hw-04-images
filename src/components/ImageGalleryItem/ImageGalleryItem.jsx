import { GalleryItem, ItemRef } from './ImageGalleryItemStyled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Item extends Component {
  state = {
    showModal: false,
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    return (
      <GalleryItem>
        <ItemRef onClick={this.onToggleModal}>
          {this.props.children}
          {this.state.showModal && (
            <Modal
              onClose={this.onToggleModal}
              image={this.props.image.largeImageURL}
            />
          )}
        </ItemRef>
      </GalleryItem>
    );
  }
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
