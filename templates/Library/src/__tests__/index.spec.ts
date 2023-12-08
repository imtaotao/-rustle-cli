import { log } from '../index';

describe('Test', () => {
  it('Check `log`', () => {
    expect(typeof log === 'function').toBe(true);
  });
});
