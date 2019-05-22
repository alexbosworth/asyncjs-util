const {test} = require('tap');

const {returnResult} = require('./../');

const tests = [
  {
    args: {of: 'foo'},
    description: 'Return a specific result',
    expected: 'bar',
    result: {err: null, res: 'bar'},
  },
  {
    args: {},
    description: 'Return nothing',
    expected: undefined,
    result: {err: null, res: 'bar'},
  },
  {
    args: {},
    description: 'Failure',
    error: [500, 'Failure'],
    expected: undefined,
    result: {err: [500, 'Failure']},
  },
];

tests.forEach(({args, description, error, expected, result}) => {
  return test(description, ({deepEqual, end, equal}) => {
    return returnResult(args, (err, res) => {
      deepEqual(err, error);
      equal(res, expected);

      return end();
    })(result.err, {foo: result.res});
  });
});
