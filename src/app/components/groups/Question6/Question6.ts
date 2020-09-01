import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question5`,
      next_step: `question7`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.zip_code || store.state.Forms.quizForm.zip_code.value === `` || store.state.Forms.quizForm.zip_code.errors.length > 0;
    },
  },
});