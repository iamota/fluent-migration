import Vue from 'vue';
import store from 'infinite/src/app/store';
import { get } from 'lodash-es';

export default Vue.extend({
  data() {
    return {
      next_step: `kit`,
    };
  },
  computed: {
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `self`;
    },
    showTemp(): boolean {
      const symptoms = get(store, `state.Forms.quizForm['symptoms[]'].value`, []);
      if (symptoms.length === 0) { return false; }

      return symptoms.indexOf(`Fever`) !== -1;
    },
    previous_step(): string {
      if (store.state.Forms.quizForm.focus.value === `self`) {      
        return `question6`;
      }
      
      return `question9`;
    },
  },
});