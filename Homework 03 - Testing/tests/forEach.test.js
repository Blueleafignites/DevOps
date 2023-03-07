const forEach = require('../src/forEach');

describe('forEach', () => {
  // Test that your callback is invoked for each array entry
  it('should call the callback for each array entry', () => {
    const array = [1, 2, 3];
    const cb = jest.fn();

    forEach(array, cb);
    expect(cb).toHaveBeenCalledTimes(array.length);
  });

  // Test that your callback arguments are provided accurately
  it('should pass the correct arguments to the callback', () => {
    const array = [1, 2, 3];
    const cb = jest.fn();
    
    forEach(array, cb);
    expect(cb).toHaveBeenNthCalledWith(1, 1, 0, array);
    expect(cb).toHaveBeenNthCalledWith(2, 2, 1, array);
    expect(cb).toHaveBeenNthCalledWith(3, 3, 2, array);
  });
});