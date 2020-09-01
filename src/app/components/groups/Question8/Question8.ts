import Vue from 'vue';
import store from 'infinite/src/app/store';
import { get } from 'lodash-es';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question7`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.focus || store.state.Forms.quizForm.focus.value === `` || store.state.Forms.quizForm.focus.errors.length > 0;
    },
    next_step(): string {
      const times_sick = get(store, `state.Forms.quizForm.times_sick.value`, null);
      const focus = get(store, `state.Forms.quizForm.focus.value`, null);
      
      if (times_sick === `0`) {
        return `question17`;
      }  
  
      if (focus === `myself`) {
        return `question9`;
      }

      return `question9a`;
    },
  },
});