import React from 'react';
import './SearchResult.css';

const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();

export default function SearchResults(props) {
    const authors = props.volumeInfo.authors.join(', ');
    const price = props.saleInfo.listPrice ? <p>Price: ${props.saleInfo.listPrice.amount}</p> : '';
    const textSnippet = props.searchInfo ? entities.decode(props.searchInfo.textSnippet) : entities.decode(props.volumeInfo.description);
    
    return (
        <div className="searchResult">
            <div className="bookImage">
                <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title} />
            </div>
            <div className="bookInfo">
                <h2>{props.volumeInfo.title}</h2>
                <p>Author: {authors}</p>
                {price}
                <p className="textSnippet">{textSnippet}</p>
            </div>
        </div>
    )
}

