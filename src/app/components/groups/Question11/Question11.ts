import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.take_temperature || store.state.Forms.quizForm.take_temperature.value === `` || store.state.Forms.quizForm.take_temperature.errors.length > 0;
    },
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },
    next_step(): string {
      if (store.state.Forms.quizForm.take_temperature.value === `yes`) {
        return `question12`;
      }

      return `question13`;
    },
  },
});