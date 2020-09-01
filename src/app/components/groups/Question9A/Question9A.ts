import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question8`,
      next_step: `question9b`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.family_member_age || store.state.Forms.quizForm.family_member_age.value === ``;
    },  
  },
});