import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question9a`,
      next_step: `question9`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.family_gender || store.state.Forms.quizForm.family_gender.value === `` || store.state.Forms.quizForm.family_gender.errors.length > 0;
    },
  },
});