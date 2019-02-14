const trainTestSplit = require('../index');

test('train test split results in two arrays', () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  expect(trainTestSplit(arr, 0.8).length).toBe(2);
});

test('train test split results in correct train array length', () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  expect(trainTestSplit(arr, 0.8)[0].length).toBe(8);
});

test('train test split results in correct test array length', () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  expect(trainTestSplit(arr, 0.8)[1].length).toBe(2);
});

test('train test split with seed is consistent', () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  expect(trainTestSplit(arr, 0.8, 123)[0][0]).toBe(trainTestSplit(arr, 0.8, 123)[0][0]);
});

test('train test split with indices should be numeric array', () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  expect(typeof trainTestSplit(arr, 0.8, 123, true)[0][0]).toBe('number');
});
