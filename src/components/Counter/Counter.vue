<template>
  <RenderlessCounter :count="count">
    <template #default="{ countNum, incrementEvent, decrementEvent }">
      <main>
        <h1>{{countNum}}</h1>
        <button v-on="incrementEvent">INCREMENT</button>
        <button v-on="decrementEvent">DECREMENT</button>
      </main>
    </template>
  </RenderlessCounter>
</template>

<script>
import RenderlessCounter from './RenderlessCounter.vue';

export default {
  props: {
    count: {
      type: Object,
    },
  },
  components: {
    RenderlessCounter,
  },
};
</script>

<style>
* {
  border: 1px dashed #eeeeee
}
</style>
