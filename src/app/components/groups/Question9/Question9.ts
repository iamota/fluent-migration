import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({  
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.vaccine || store.state.Forms.quizForm.vaccine.value === `` || store.state.Forms.quizForm.vaccine.errors.length > 0;
    },
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },
  },
  methods: {
    back(): void {
      if (store.state.Forms.quizForm.focus.value === `myself`) {
        store.dispatch.Quiz.nextStep(`question8`);
      } else {
        store.dispatch.Quiz.nextStep(`question9b`);
      }
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question10`);      
    },
  },
});