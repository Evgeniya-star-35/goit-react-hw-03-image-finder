import { Component } from 'react';
import { toast } from 'react-toastify';
// import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleSearchQueryChange = e => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.error('Please,enter the correct request!');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={s.searchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleSearchQueryChange}
          />
          <button
            className={s.searchFormButton}
            style={{ marginRight: 20, marginLeft: 5 }}
            type="submit"
          >
            {/* <ImSearch style={{ marginRight: 8 }} /> */}
            {/* Find */}
          </button>
        </form>
      </header>
    );
  }
}
