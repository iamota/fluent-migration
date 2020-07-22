import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },
  },
  methods: {
    back(): void {
      if (store.state.Forms.quizForm.focus.value === `myself`) {
        store.dispatch.Quiz.nextStep(`question9`);
      } else {
        // store.dispatch.Quiz.nextStep(`question9c`);
        store.dispatch.Quiz.nextStep(`question9b`);
      }
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question11`);
    },
  },
});