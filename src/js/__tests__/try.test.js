import checkProductCount from '../try';

test('Integer', () => {
  expect(checkProductCount(7)).toBe(7);
});

test('Not Integer', () => {
  expect(checkProductCount('7.57')).toEqual(Error('Ввод некорректен'));
});

test('String', () => {
  expect(checkProductCount('seven')).toEqual(Error('Ввод некорректен'));
});

test('Hexademical', () => {
  expect(checkProductCount('0*23')).toEqual(Error('Ввод некорректен'));
});

test('Negative', () => {
  expect(checkProductCount('-3')).toEqual(Error('Ввод некорректен'));
});

test('Symbols and integer', () => {
  expect(checkProductCount('df5')).toEqual(Error('Ввод некорректен'));
});

test('Octagonal', () => {
  expect(checkProductCount('0232')).toEqual(Error('Ввод некорректен'));
});

test('Empty', () => {
  expect(checkProductCount('')).toEqual(Error('Ввод некорректен'));
});
