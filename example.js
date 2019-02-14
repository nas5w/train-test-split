const trainTestSplit = require('./index');

const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const [train, test] = trainTestSplit(arr, 0.8, 1234, true);
console.log(train, test);
