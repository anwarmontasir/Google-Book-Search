import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchFilters from '../SearchFilters/SearchFilters';

export default class SearchForm extends Component {
    render() {
        return (
            <form>
                <SearchBar />
                <SearchFilters />
            </form>
        )
    }
}