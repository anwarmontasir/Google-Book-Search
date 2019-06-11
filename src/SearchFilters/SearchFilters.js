import React, { Component } from 'react';
import './SearchFilters.css';

export default class SearchFilters extends Component {
    render(props) {
        return (
            <div className="searchFilters">
                <label htmlFor="printType">Print Type: </label>
                <select id="printType" name="printType" value={this.props.printType} onChange={e => this.props.valueChanged('printType', e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="bookType">Book Type: </label>
                <select id="bookType" name="bookType" value={this.props.bookType} onChange={e => this.props.valueChanged('bookType', e.target.value)}>
                    <option value=""></option>
                    <option value="full">Full</option>
                    <option value="partial">Partial</option>
                    <option value="ebooks">eBooks</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="paid-ebooks">Paid eBooks</option>
                </select>
            </div>
        )
    }
}