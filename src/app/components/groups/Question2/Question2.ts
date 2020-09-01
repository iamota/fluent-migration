import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question1`,
      next_step: `question3`,
    };
  },
  computed: {
    getName(): string {
      return store.state.Forms.quizForm.first_name.value;
    },   
  },
});