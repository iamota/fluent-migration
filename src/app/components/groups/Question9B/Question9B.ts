import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quiz.family_gender || store.state.Forms.quiz.family_gender.value === `` || store.state.Forms.quiz.family_gender.errors.length > 0;
    },
  },
  watch: {
    isDisabled(): void {
      if (store.state.Forms.quiz.family_gender && store.state.Forms.quiz.family_gender.value !== `` && store.state.Forms.quiz.family_gender.errors.length === 0) {
        setTimeout(() => {
          store.dispatch.Quiz.nextStep(`question9`);
        }, 1000);  
      }
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