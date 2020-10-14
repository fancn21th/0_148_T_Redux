<template>
  <main>
    <h1>{{ count }}</h1>
    <button @click="INCREMENT">INCREMENT</button>
    <button @click="DECREMENT">DECREMENT</button>
  </main>
</template>

<script>
// import { createStore } from 'redux';

// 自定义实现
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // 初始化 state
  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
  };
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  counter,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    INCREMENT() {
      store.dispatch({ type: 'INCREMENT' });
    },
    DECREMENT() {
      store.dispatch({ type: 'DECREMENT' });
    },
  },
  mounted() {
    console.log(store.getState());

    store.subscribe(() => {
      this.count = store.getState();
    });
  },
};
</script>

<style scoped>
* {
  border: 1px solid black;
}
</style>
