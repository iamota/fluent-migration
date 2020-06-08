import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isMyself(): boolean {
      return store.state.Forms.quiz.focus.value === `myself`;
    },
  },
  methods: {
    back(): void {
      if (store.state.Forms.quiz.focus.value === `myself`) {
        store.dispatch.Quiz.nextStep(`question9`);
      } else {
        store.dispatch.Quiz.nextStep(`question9c`);
      }
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question11`);
    },
  },
});