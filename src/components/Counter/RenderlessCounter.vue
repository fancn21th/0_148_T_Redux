<script>
export default {
  props: {
    count: {
      type: Object,
    },
  },
  data() {
    return {
      countNum: 0,
    };
  },
  methods: {
    incrementEvent() {
      this.count.dispatch({ type: 'INCREMENT' });
    },
    decrementEvent() {
      this.count.dispatch({ type: 'DECREMENT' });
    },
  },
  render() {
    return this.$scopedSlots.default({
      countNum: this.countNum,
      incrementEvent: {
        click: this.incrementEvent,
      },
      decrementEvent: {
        click: this.decrementEvent,
      },
    });
  },
  watch: {
    count: {
      handler(count) {
        if (count) {
          count.subscribe(() => {
            this.countNum = count.getState();
          });
        }
      },
      immediate: true,
    },
  },
};
</script>
