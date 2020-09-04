import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      next_step: `kit`,
    };
  },
  computed: {
    isMyself(): boolean {
      // return store.state.Forms.quizForm.focus.value === `self`;
      return true;
    },
    previous_step(): string {
      // if (store.state.Forms.quizForm.focus.value === `self`) {
      if (true === `self`) {
        return `question6`;
      }
      
      return `question9`;
    },
  },
});