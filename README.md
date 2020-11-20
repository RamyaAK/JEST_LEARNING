# JEST_LEARNING

Running Specific Tests

To run all the tests:
npm run tests

To run single test with its filename:
npm run test <filename>

To run test with only in a file:
precede your test block within a file with .only to run only that specific test Ex: test.only('test multiply',()=>{});

To run test with watch mode:

In your package.json file, Add in Scripts:
{
 "test:watch":"jest --watchAll"
}


