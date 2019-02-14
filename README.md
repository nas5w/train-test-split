[!train-test-split][https://imgur.com/hko9ren]

[![Build Status](https://travis-ci.org/nas5w/train-test-split.svg?branch=master)](https://travis-ci.org/nas5w/train-test-split) [![Codecov Status](https://codecov.io/gh/nas5w/train-test-split/branch/master/graph/badge.svg)](https://codecov.io/gh/nas5w/train-test-split/branch/master)

Split your dataset into training and test datasets.

## Parameters

```
trainTestSplit(data, train, seed = null, indices = false);
```

- **data:** the array of data you intend to split.
- **train:** size of training set. If less than 1, assumed to be a fraction. E.g., a value of 0.8 will be interpreted as 80% while a value of 4 will be interpreted as 4 records.
- **seed:** when set, results will be repeatable if the same seed is used. I.e., the same dataset with the same seed will always yield the same train-test split.
- **indices:** indicates whether to return the indices of the provided array or the actual values.

## Example usage

```javascript
const trainTestSplit = require('train-test-split');

const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const [train, test] = trainTestSplit(arr, 0.8, 1234);
console.log(train, test);
// [ 'one', 'seven', 'eight', 'ten', 'six', 'five', 'three', 'four' ] [ 'nine', 'two' ]

const [trainIndices, testIndices] = trainTestSplit(arr, 0.8, 1234, true);
console.log(trainIndices, testIndices);
// [ 0, 6, 7, 9, 5, 4, 2, 3 ] [ 8, 1 ]
```
