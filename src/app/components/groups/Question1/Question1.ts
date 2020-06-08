import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quiz.first_name || store.state.Forms.quiz.first_name.value === `` || store.state.Forms.quiz.first_name.errors.length > 0;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`introduction`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question2`);
    },
  },
});