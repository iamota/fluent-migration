import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question3`,
      next_step: `question5`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.gender || store.state.Forms.quizForm.gender.value === `` || store.state.Forms.quizForm.gender.errors.length > 0;
    },
  },
});