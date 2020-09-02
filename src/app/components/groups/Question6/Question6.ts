import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({  
  data() {
    return {
      previous_step: `question5`,
      next_step: `question10`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.symptom_duration || store.state.Forms.quizForm.symptom_duration.value === `` || store.state.Forms.quizForm.symptom_duration.errors.length > 0;
    },
  },
});