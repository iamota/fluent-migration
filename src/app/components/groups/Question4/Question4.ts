import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.gender || store.state.Forms.quizForm.gender.value === `` || store.state.Forms.quizForm.gender.errors.length > 0;
    },
  },
});