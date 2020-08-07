import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.focus || store.state.Forms.quizForm.focus.value === `` || store.state.Forms.quizForm.focus.errors.length > 0;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question7`);
    },
    next(): void {
      if (store.state.Forms.quizForm.times_sick.value === `0`) {
        store.dispatch.Quiz.nextStep(`question17`);
        return;
      }  

      if (store.state.Forms.quizForm.focus.value === `myself`) {
        store.dispatch.Quiz.nextStep(`question9`);
      } else {
        store.dispatch.Quiz.nextStep(`question9a`);
      }
    },
  },
});