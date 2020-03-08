import makeRequest from './';
import nock from 'nock';

describe('makeRequest', () => {
  it('makes a request to api', async () => {
    const response = await makeRequest('Manchester');
    expect(response.length).toBe(6);
  });

  it('handles no results', async () => {
    nock('https://www.rentalcars.com/')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/FTSAutocomplete.do')
      .query(true)
      .reply(200, { results: { docs: [{ name: 'foo' }] } });
    const response = await makeRequest('*&*^%%^$');
    expect(response.length).toBe(1);
  });

  it('handles errors', async () => {
    nock('https://www.rentalcars.com/')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/FTSAutocomplete.do')
      .query(true)
      .reply(500);
    const response = await makeRequest('*&*^%%^$');
    expect(response.length).toBe(0);
  });
});
