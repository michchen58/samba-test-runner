function generateTest(baseDelay = 100) {
  return function runTest() {
    const delay = baseDelay + (Math.random() * baseDelay);
    const testPassed = Math.random() > 0.5;

    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(testPassed);
        alert(testPassed);
      }, delay);
    });
  };
}

const tests = [
  {
    description: 'This sentence is true',
    run: generateTest()
  },
  {
    description: 'The preceding sentence is false',
    run: generateTest()
  },
  {
    description: 'Achilles never catches the tortoise',
    run: generateTest()
  }
];

export default tests;
