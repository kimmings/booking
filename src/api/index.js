const maxResults = 6;
const endpoint = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${maxResults}&solrTerm=`;

// TODO: debounce?
const makeRequest = async value => {
  try {
    const { results } = await fetch(`${endpoint}${value}`).then(response =>
      response.json()
    );
    return results.docs;
  } catch (error) {
    // TODO: better errors
    // console.error('Caught API Error', error);
    return [];
  }
};

export default makeRequest;
