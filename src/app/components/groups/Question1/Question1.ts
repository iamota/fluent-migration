import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.first_name || store.state.Forms.quizForm.first_name.value === `` || store.state.Forms.quizForm.first_name.errors.length > 0;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`starter`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question2`);
    },
  },
});