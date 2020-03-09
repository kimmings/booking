import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ id, results }) => {
  const [expanded, setExpanded] = React.useState(false);
  React.useEffect(() => {
    setExpanded(results.length > 0);
  }, [results]);

  return (
    <span id={`${id}-results`} aria-expanded={expanded}>
      {results.map(r => {
        return <div key={r.bookingId | r.index}>{r.name}</div>;
      })}
    </span>
  );
};

SearchResults.propTypes = {
  id: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
};

SearchResults.defaultProps = {
  results: [],
};
export default SearchResults;
