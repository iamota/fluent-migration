import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      next_step: `email`,
    };
  },
  computed: {
    previous_step(): string {
      if (store.state.Forms.quizForm.times_sick.value === `0`) {
        return `question8`;
      }  

      if (store.state.Forms.quizForm.contact_online.value === `yes`) {
        return `question16`;
      } 
      
      return `question15`;
      
    },
    // next(): void {
    //   store.dispatch.Quiz.nextStep(`email`); 
    //   store.state.Forms.quizForm._status.submitted = null;
    // },
  },
});