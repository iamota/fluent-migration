import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question11`,
      next_step: `question13`,
    };
  },
  computed: {    
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },     
  },
});