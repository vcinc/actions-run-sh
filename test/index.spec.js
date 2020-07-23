const m = require('../src/index');

describe('getIETFLangTag', () => {
  it('should return en for english language', () => {
    expect(m('english')).toBe('en');
  });

  it('should return ko for korean language', () => {
    expect(m('korean')).toBe('ko');
  });
});
