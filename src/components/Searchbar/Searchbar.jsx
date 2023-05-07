import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { SearchSection, Form, Input, Button } from './SearchbarStyled';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleQueryChange = e => {
    const queryText = e.currentTarget.value.toLowerCase();
    this.setState({ query: queryText });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Введіть параметри пошуку!', {
        duration: 2000,
        position: 'top-right',
      });
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <SearchSection>
        <Form onSubmit={this.onSubmit}>
          <Button type="submit">
            <ImSearch style={{ margin: '18px', size: '20px' }} />
          </Button>

          <Input
            onChange={this.handleQueryChange}
            className="input"
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
        </Form>
      </SearchSection>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
