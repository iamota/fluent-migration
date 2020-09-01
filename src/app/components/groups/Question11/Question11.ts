import Vue from 'vue';
import store from 'infinite/src/app/store';
import { get } from 'lodash-es';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question10`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.take_temperature || store.state.Forms.quizForm.take_temperature.value === `` || store.state.Forms.quizForm.take_temperature.errors.length > 0;
    },
    isMyself(): boolean {
      return get(store, `state.Forms.quizForm.focus.value`, null) === `myself`;
    },
    next_step(): string {
      if (get(store, `state.Forms.quizForm.take_temperature.value`, null) === `yes`) {
        return `question12`;
      }

      return `question13`;
    },
  },
});