import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({  
  computed: {
    isDisabled(): boolean {
      return (!store.state.Forms.quizForm.visit || store.state.Forms.quizForm.visit.value === ``) || (!store.state.Forms.quizForm.other_value || store.state.Forms.quizForm.other_value.errors.length > 0);
    },      
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },
    previous_step(): string {
      if (store.state.Forms.quizForm.take_temperature.value === `yes`) {
        return `question12`;
      } 

      return `question11`;
    },
    next_step(): string {
      if (store.state.Forms.quizForm.visit && store.state.Forms.quizForm.visit.value === `No visit`) {
        return `question15`;
      }

      return `question14`;
    },
  },
});