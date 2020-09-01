import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({  
  data() {
    return {
      next_step: `question10`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.vaccine || store.state.Forms.quizForm.vaccine.value === `` || store.state.Forms.quizForm.vaccine.errors.length > 0;
    },
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },
    previous_step(): string {
      if (store.state.Forms.quizForm.focus.value === `myself`) {
        return `question8`;
      }

      return `question9b`;      
    },
  },
});