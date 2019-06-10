import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import SearchResults from './SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printType: '',
      bookType: '', 
      searchResults: []
    }
  }

  /* https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/ */
  valueChanged(objKey, objVal) {
    this.setState({
        [objKey]: objVal
    });
  }

  searchBooks(e) {
    e.preventDefault();
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = cors + 'https://www.googleapis.com/books/v1/volumes';
    const key = process.env.REACT_APP_KEY;
    const params = {
      q: this.state.searchTerm,
      key: key
    }
    const queryString = this.formatQueryParams(params);
    const search = `${url}?${queryString}`;
    fetch(search)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchResults: data.items
        })
      })
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    console.log('queryItems',queryItems)
    return queryItems.join('&');
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Google Book Search</h1>
          <SearchForm onSearch={this.searchBooks.bind(this)} valueChanged={this.valueChanged.bind(this)} searchTerm={this.state.searchTerm} />
        </header>
        <main>
          <SearchResults searchResults={this.state.searchResults} />
        </main>
        <footer>
          ©2019 this app.
        </footer>
      </div>
    );
  }
}

export default App;