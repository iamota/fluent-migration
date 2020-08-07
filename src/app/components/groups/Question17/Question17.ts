import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  methods: {
    back(): void {
      if (store.state.Forms.quizForm.times_sick.value === `0`) {
        store.dispatch.Quiz.nextStep(`question8`);
        return;
      }  

      if (store.state.Forms.quizForm.contact_online.value === `yes`) {
        store.dispatch.Quiz.nextStep(`question16`);
      } else {
        store.dispatch.Quiz.nextStep(`question15`);
      }
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`email`); 
      store.state.Forms.quizForm._status.submitted = null;
    },
  },
});