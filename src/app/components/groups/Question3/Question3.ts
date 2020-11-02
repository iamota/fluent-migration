import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question2`,
      next_step: `question4`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.gender || store.state.Forms.quizForm.gender.value === `` || store.state.Forms.quizForm.gender.errors.length > 0 || store.state.Forms.quizForm.gender_text.errors.length > 0;
    },
    gender_text_error(): boolean {
      return !store.state.Forms.quizForm.gender_text || store.state.Forms.quizForm.gender_text.errors.length > 0;
    },
  },
});