# Samba Test Runner
We've decided to start doing TDD and now we need to run lots and lots of tests. Some of them might even pass - probably about half!

Here's the function to generate tests:

function generateTest(baseDelay = 5000) {
  return function runTest() {
    const delay = baseDelay + (Math.random() * baseDelay);
    const testPassed = Math.random() > 0.5;

    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(testPassed);
      }, delay);
    });
  };
}

Now we need a way to visualize our test results. Build a small React app that takes an array of tests - possibly like the below, but feel free to design your own data structure:
[
  { description: 'This sentence is true',               run: generateTest() },
  { description: 'The preceding sentence is false',     run: generateTest() },
  { description: 'Achilles never catches the tortoise', run: generateTest() }
  ...etc
];

## Feature Requirements:
- Display these tests in a sensible tabular structure of some sort.
- Provide a `Run` button that initiates a run of the entire test suite.
- For each test, display information about that test including its name/description, current status (in progress, failed, succeeded, not run), and a button that reruns just that test
- Report the counts of total tests run and passed, and the percentage that passed
- All of the above should be pleasing to the eye

## Extra credit requirements:
Before attempting any of these make sure your code is in order. It should be clean, DRY, and maintainable, and demonstrate a knowledge of and concern for best practices in both React and JavaScript generally. If you're really confident and up for another challenge, here are some extra credit ideas:
- Display the last run time for each test
- Implement your own test generator which accepts a real test function and returns a promise that resolves to a boolean to indicate success or failure
- If you are familiar with `rxjs`, which we use heavily in our applications, use observables to manage the asynchronous bits

### FAQ:
### How long do I have?
You will have been provided with a due date when you received this file, but you can work on the project for as many hours as you want in between. That said, a good implementation can be achieved in 2-3 hours, not counting build tooling setup.

### What technology should I use?
The only requirement here is that you use React. As long as you include instructions for building and running the project you can use whatever tooling and libraries you see fit to use. Also feel free to use `create-react-app` to get started if that's your jam.

As mentioned above, we use `rxjs` rather heavily, so if you are proficient with it, take a shot at that extra credit requirement. This app shouldn't call for particularly heavy data wrangling, but `ramda.js` is also an important element in our stack and will be viewed favorably if used. Keep in mind that both of these come with steep learning curves, so if you're not already familiar with them, don't sweat it and just write the app with what you know.

### How should I deliver this thing?
Either zip it (don't include node_modules) or create a private repo on GitHub and share it with us.
takehome.md
Displaying takehome.md.