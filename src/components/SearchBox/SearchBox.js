import React from 'react';
import SearchInput from './SearchInput';
import makeRequest from '../../api';
import { Widget, Header, Label } from './styles';

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

  console.log({ results });
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
        <span
          className="rc-search-results"
          id={`${id}-results`}
          aria-expanded={results.length ? true : false}
        >
          {results.map(r => {
            return <div key={r.bookingId | r.index}>{r.name}</div>;
          })}
        </span>
        <span className="sr-description" id={`${id}-description`}>
          Screen Reader description goes here.
        </span>
      </div>
    </Widget>
  );
};

export default SearchBox;
