import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question4`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question6`);
    },
  },
});