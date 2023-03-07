const queryNetwork = require('../src/queryNetwork');
const fetch = require('../dependencies/fetch');

// Mock fetch.js
jest.mock('../dependencies/fetch');

describe('queryNetwork', () => {
  // Test that fetch is invoked
  it('should call fetch with the correct URL', async () => {
    const url = 'https://testinghomework.com';
    const mockResponse = { myData: 'goes here', thisIsReturned: 'from invoked json()' };
    
    fetch.mockResolvedValueOnce({ status: 200, json: () => mockResponse });
    
    await queryNetwork(url);

    expect(fetch).toHaveBeenCalledWith(url);
  });

  // Test that the returned promise resolves into the object your mock is using for the json() method
  it('should return the parsed JSON response from fetch', async () => {
    const url = 'https://testinghomework.com';
    const mockResponse = { myData: 'goes here', thisIsReturned: 'from invoked json()' };

    fetch.mockResolvedValueOnce({ status: 200, json: () => mockResponse }); 
    
    const result = await queryNetwork(url);

    expect(result).toEqual(mockResponse);
  });
});