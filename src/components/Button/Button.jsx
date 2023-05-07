import { SearchButton } from './ButtonStyled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <>
      <SearchButton onClick={onClick}>Load more</SearchButton>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
