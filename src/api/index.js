import { api } from '../constants';
const endpoint = `${api.API_BASE}${api.API_PATH}&solrRows=${api.MAX_RESULTS}&solrTerm=`;

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
