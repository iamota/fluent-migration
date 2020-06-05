import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quiz.focus || store.state.Forms.quiz.focus.value === `` || store.state.Forms.quiz.focus.errors.length > 0;
    },
  },
  watch: {
    isDisabled(): void {
      if (store.state.Forms.quiz.focus && store.state.Forms.quiz.focus.value !== `` && store.state.Forms.quiz.focus.errors.length === 0) {
        setTimeout(() => {
          if (store.state.Forms.quiz.focus.value === `myself`) {
            store.dispatch.Quiz.nextStep(`question9`);
          } else {
            store.dispatch.Quiz.nextStep(`question9a`);
          }
        }, 1000);  
      }
    },
  }, 
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question7`);
    },
    next(): void {
      if (store.state.Forms.quiz.focus.value === `myself`) {
        store.dispatch.Quiz.nextStep(`question9`);
      } else {
        store.dispatch.Quiz.nextStep(`question9a`);
      }
    },
  },
});