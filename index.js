const trainTestSplit = (() => {
  const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  return (data, train, seed = null, indices = false) => {
    let arr = [...data];

    if (seed !== null) {
      const seedrandom = require('seedrandom');
      Math.seedrandom(seed);
    }

    if (indices) {
      let i = 0;
      arr = arr.map(el => i++);
    }

    // If train < 1, assume percentage
    if (train < 1) {
      train = Math.ceil(train * arr.length);
    }

    const shuffled = shuffle([...arr]);
    const testSet = shuffled.splice(0, arr.length - train);
    const trainSet = shuffled;

    return [trainSet, testSet];
  };
})();

module.exports = trainTestSplit;
