import { ImSearch } from 'react-icons/im';
import { SearchSection, Form, Input, Button } from './SearchbarStyled';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    const queryText = e.currentTarget.value.toLowerCase();
    setQuery(queryText);
  };

  const onSubmitQuery = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Введіть параметри пошуку!', {
        duration: 2000,
        position: 'top-right',
      });
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchSection>
      <Form onSubmit={onSubmitQuery}>
        <Button type="submit">
          <ImSearch style={{ margin: '16px', size: '20px' }} />
        </Button>

        <Input
          onChange={handleQueryChange}
          className="input"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
      </Form>
    </SearchSection>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
