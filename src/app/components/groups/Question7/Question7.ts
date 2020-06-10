import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.times_sick || store.state.Forms.quizForm.times_sick.value === `` || store.state.Forms.quizForm.times_sick.errors.length > 0;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question6`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question8`);
    },
  },
});