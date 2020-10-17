/**
 *
 * Learn how to avoid mutating arrays using concat(), slice(), and the ES6 array spread operator.
 *
 */
//

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
const deepFreeze = require('deep-freeze');

/* eslint no-param-reassign: ["error", { "props": false }] */
const toggleTodo = (todo) => ({
  ...todo,
  completed: !todo.completed,
});

test('toggle todo in immutable way', () => {
  const before = {
    id: 0,
    text: 'foo',
    completed: true,
  };
  const after = {
    id: 0,
    text: 'foo',
    completed: false,
  };

  deepFreeze(before);

  expect(toggleTodo(before)).toStrictEqual(after);
});
