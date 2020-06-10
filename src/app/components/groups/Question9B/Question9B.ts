import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.family_gender || store.state.Forms.quizForm.family_gender.value === `` || store.state.Forms.quizForm.family_gender.errors.length > 0;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question9a`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question9`);
    },
  },
});