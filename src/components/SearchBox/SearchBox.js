import React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import makeRequest from '../../api';
import { Widget, Header, Label } from '../../constants/styles';

const id = 'location-search';

const SearchBox = () => {
  const [results, setResults] = React.useState([]);

  const apiCall = React.useCallback(
    async value => {
      if (value.length < 2) return setResults([]);

      const locations = await makeRequest(value);
      setResults(locations);
    },
    [setResults]
  );

  return (
    <Widget>
      <Header>Let’s find your ideal car</Header>
      <div>
        <Label htmlFor="search-pickup">Pick-up Location</Label>
        <SearchInput
          callback={apiCall}
          placeholder="city, airport, station, region, district…"
          id={id}
          aria-describedby={`${id}-description`}
          aria-controls={`${id}-results`}
          aria-autocomplete="list"
          aria-required="true"
        />
        <SearchResults results={results} id={id} />

        <span className="sr-description" id={`${id}-description`}>
          Screen Reader description goes here.
        </span>
      </div>
    </Widget>
  );
};

export default SearchBox;
