import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question6`,
      next_step: `question8`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.times_sick || store.state.Forms.quizForm.times_sick.value === `` || store.state.Forms.quizForm.times_sick.errors.length > 0;
    },
  },
});