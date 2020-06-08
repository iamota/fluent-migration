import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quiz.zip_code || store.state.Forms.quiz.zip_code.value === `` || store.state.Forms.quiz.zip_code.errors.length > 0;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question5`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question7`);
    },
  },
});