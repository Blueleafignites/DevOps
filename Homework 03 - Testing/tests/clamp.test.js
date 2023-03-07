const clamp = require('../src/clamp');

describe('clamp', () => {
  // Test that defaults are applied
  it('should clamp to default values if no min or max provided', () => {
    expect(clamp(2)).toBe(1);
    expect(clamp(-1)).toBe(0);
  });

  // Test that lower clamps are applied
  it('should clamp to lower values if value is below min', () => {
    expect(clamp(-1, -2)).toBe(-1);
    expect(clamp(0.5, 1)).toBe(1);
  });

  // Test that upper clamps are applied
  it('should clamp to upper values if value is above max', () => {
    expect(clamp(2, 0, 1)).toBe(1);
    expect(clamp(-1, -2, 0)).toBe(-1);
  });
});