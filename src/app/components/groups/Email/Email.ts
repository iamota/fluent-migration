import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quiz.email || store.state.Forms.quiz.email.value === `` || store.state.Forms.quiz.email.errors.length > 0;
    },
  },
});