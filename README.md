# Taller Code Challenge

To run this projec you need only feel steps.

1. Clone this github repo.
2. Be sure to have `node` installed in your machine.
3. Run `npm i` to install dependencies
4. Run `npm start` if you want to check the results for this two inputs:
4.1 `S = “5F3Z-2e-9-w”, K = 4"`
4.2 `S = “2-5g-3-J”, K = 2"`

P.S: I added *Jest* to this project to add some unit tests. If you want to run the tests is just to run:
1. `npm run test` -> It will run the test. You will se an output like this: 
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.239 s, estimated 1 s

2. `npm run test:coverage` -> It will run the same test, but in this case will show the code coverage. You will see something like this: 
 PASS  tests/index.spec.ts
  LicenseKeyFormating function
    ✓ testing S = “5F3Z-2e-9-w”, K = 4 (1 ms)
    ✓ testing S = “2-5g-3-J”, K = 2 (1 ms)
    ✓ should throw an error for invalid string input (3 ms)
    ✓ should throw an error for invalid K input
    ✓ should throw an error for missing K input (1 ms)

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.js |     100 |      100 |     100 |     100 |

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.153 s, estimated 1 s
Ran all test suites.

## That's all folks. Thank you very much.