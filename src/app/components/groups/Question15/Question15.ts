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
    previous_step(): string {
      if (store.state.Forms.quizForm.visit && store.state.Forms.quizForm.visit.value === `No visit`) { 
        return `question13`;
      }
      
      return `question14`;      
    },
    next_step(): string {
      if (store.state.Forms.quizForm.contact_online.value === `yes`) {
        return `question16`;
      }

      return `question17`;
    },
  },
});