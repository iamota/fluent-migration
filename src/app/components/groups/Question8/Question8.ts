import Vue from 'vue';
import store from 'infinite/src/app/store';

export default Vue.extend({  
  data() {
    return {
      previous_step: `question7`,
      next_step: `question9`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.family_symptom_onset || store.state.Forms.quizForm.family_symptom_onset.value === `` || store.state.Forms.quizForm.family_symptom_onset.errors.length > 0;
    },
  },
});