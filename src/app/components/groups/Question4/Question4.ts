import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quiz.gender || store.state.Forms.quiz.gender.value === `` || store.state.Forms.quiz.gender.errors.length > 0;
    },
  },
  watch: {
    isDisabled(): void {
      if (store.state.Forms.quiz.gender && store.state.Forms.quiz.gender.value !== `` && store.state.Forms.quiz.gender.errors.length === 0) {
        store.dispatch.Quiz.nextStep(`question5`);
      }
    },
  }, 
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question3`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question5`);
    },
  },
});