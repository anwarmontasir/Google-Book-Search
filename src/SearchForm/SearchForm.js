import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchFilters from '../SearchFilters/SearchFilters';

export default class SearchForm extends Component {
    render(props) {
        return (
            <form onSubmit={e => this.props.onSearch(e)}>
                <SearchBar valueChanged={this.props.valueChanged} searchTerm={this.props.searchTerm} />
                <SearchFilters valueChanged={this.props.valueChanged} />
            </form>
        )
    }
}