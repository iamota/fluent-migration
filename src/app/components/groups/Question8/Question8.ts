import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.focus || store.state.Forms.quizForm.focus.value === `` || store.state.Forms.quizForm.focus.errors.length > 0;
    },
    next_step(): string {
      if (store.state.Forms.quizForm.times_sick.value === `0`) {
        return `question17`;
      }  
  
      if (store.state.Forms.quizForm.focus.value === `myself`) {
        return `question9`;
      }

      return `question9a`;
    },
  },
});