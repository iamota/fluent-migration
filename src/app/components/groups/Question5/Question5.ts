import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({  
  data() {
    return {
      next_step: `question6`,
      previous_step: `question4`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.symptom_onset || store.state.Forms.quizForm.symptom_onset.value === `` || store.state.Forms.quizForm.symptom_onset.errors.length > 0;
    },
  },
});