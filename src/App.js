import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import SearchResults from './SearchResults/SearchResults';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Google Book Search</h1>
          <SearchForm />
        </header>
        <main>
          <SearchResults />
        </main>
        <footer>
          ©2019 this app.
        </footer>
      </div>
    );
  }
}

export default App;