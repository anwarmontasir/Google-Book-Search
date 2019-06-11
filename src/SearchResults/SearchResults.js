import React, { Component } from 'react';
import './SearchResults.css';
import SearchResult from '../SearchResult/SearchResult';

export default class SearchResults extends Component {
    render(props) {
        const searchResults = this.props.searchResults.map(
            (searchResult, i) => <SearchResult {...searchResult} key={i} />
        )

        return (
            <div className="searchResults">
                {searchResults}
            </div>
        )
    }
}

SearchResults.defaultProps = {
    searchResults: []
}