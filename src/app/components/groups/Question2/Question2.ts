import Vue from 'vue';
import store from 'infinite/src/app/store';
import { get } from 'lodash-es';

  
export default Vue.extend({
  data() {
    return {
      previous_step: `question1`,
      next_step: `question3`,
    };
  },
  computed: {
    isDisabled(): boolean {
      const value = get(store, `state.Forms.quizForm.age.value`, null);
      return !value || isNaN(parseInt(value, 10)) || value === `` || store.state.Forms.quizForm.age.errors.length > 0;
    },
  },
  methods: {
    nextStep(): void {
      if (this.isDisabled) { return; }
      store.dispatch.Quiz.nextStep(this.next_step);
    },
  },
});