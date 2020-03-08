import React from 'react';
import SearchInput from './SearchInput';
import { Widget, Header, Label } from './styles';

const maxResults = 6;
const endpoint = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${maxResults}&solrTerm=`;

// TODO: debounce?
const doApiCall = async value => {
  console.log('DO API CALL', value);
  const results = await fetch(`${endpoint}${value}`);
  console.log(results);
};

const id = 'location-search';

const SearchBox = () => (
  <Widget>
    <Header>Let’s find your ideal car</Header>
    <div>
      <Label htmlFor="search-pickup">Pick-up Location</Label>
      <SearchInput
        callback={doApiCall}
        placeholder="city, airport, station, region, district…"
        id={id}
      />
      <span
        className="rc-search-results"
        id={`${id}-results`}
        aria-live="polite"
        aria-expanded="false"
      ></span>
      <span className="sr-description" id={`${id}-description`}>
        Screen Reader description goes here.
      </span>
    </div>
  </Widget>
);

export default SearchBox;
