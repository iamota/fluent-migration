import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.contact_online || store.state.Forms.quizForm.contact_online.value === ``;
    },   
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },    
  },
  methods: {
    back(): void {
      if (store.state.Forms.quizForm.visit && store.state.Forms.quizForm.visit.value === `No visit`) { 
        store.dispatch.Quiz.nextStep(`question13`);
      } else {
        store.dispatch.Quiz.nextStep(`question14`);
      }
    },
    next(): void {
      if (store.state.Forms.quizForm.contact_online.value === `yes`) {
        store.dispatch.Quiz.nextStep(`question16`);
      } else {
        store.dispatch.Quiz.nextStep(`question17`);
      }
    },
  },
});