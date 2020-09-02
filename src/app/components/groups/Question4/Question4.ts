import Vue from 'vue';
import store from 'infinite/src/app/store';
import { get } from 'lodash-es';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question3`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.focus || store.state.Forms.quizForm.focus.value === `` || store.state.Forms.quizForm.focus.errors.length > 0;
    },
    next_step(): string {      
      const focus = get(store, `state.Forms.quizForm.focus.value`, null);
      
  
      if (focus === `self`) {
        return `question5`;
      }

      return `question7`;
    },
  },
});