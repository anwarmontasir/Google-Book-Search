import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <label for="site-search">Search:</label>
                <input type="search" id="site-search" name="q" aria-label="Search through site content" />
                <button>Search</button>
            </div>
        )
    }
}