/**
 *
 * Learn how to avoid mutating arrays using concat(), slice(), and the ES6 array spread operator.
 *
 *
 * Also refer to https://medium.com/@timhancodes/javascript-array-methods-cheatsheet-633f761ac250
 */
//

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
const deepFreeze = require('deep-freeze');

// list.push(0);
// list.concat([0]);
const addCounter = (list) => [...list, 0];

// list.splice(index, 1);
const removeCounter = (list, index) => [
  ...list.slice(0, index),
  ...list.slice(index + 1),
];

// list[index] += 1;
/* eslint no-param-reassign: ["error", { "props": false }] */
const incrementCounter = (list, index) => [
  ...list.slice(0, index),
  list[index] + 1,
  ...list.slice(index + 1),
];

test('add counter in immutable way', () => {
  const before = [];
  const after = [0];

  deepFreeze(before);

  expect(addCounter(before)).toStrictEqual(after);
});

test('remove counter in immutable way', () => {
  const before = [0, 1, 2];
  const after = [0, 2];

  deepFreeze(before);

  expect(removeCounter(before, 1)).toStrictEqual(after);
});

test('increment counter in immutable way', () => {
  const before = [0, 1, 2];
  const after = [0, 2, 2];

  deepFreeze(before);

  expect(incrementCounter(before, 1)).toStrictEqual(after);
});
