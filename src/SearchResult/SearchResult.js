import React from 'react';
import './SearchResult.css';

export default function SearchResults(props) {
    const authors = props.volumeInfo.authors.join(', ');
    const price = props.saleInfo.listPrice ? <p>Price: ${props.saleInfo.listPrice.amount}</p> : '';
    
    return (
        <div className="searchResult">
            <div className="bookImage">
                <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title} />
            </div>
            <div className="bookInfo">
                <h2>{props.volumeInfo.title}</h2>
                <p>Author: {authors}</p>
                {price}
                <p>{props.searchInfo.textSnippet}</p>
            </div>
        </div>
    )
}

