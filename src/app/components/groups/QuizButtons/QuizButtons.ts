import Vue from 'vue';
import store from 'infinite/src/app/store';
import { get } from 'lodash-es';
import { AGE_MINIMUM } from '../../containers/Quiz/config';
  
export default Vue.extend({
  props: {
    disabled: { type: Boolean, default: false },
    previous_step: { type: String },
    next_step: { type: String },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.previousStep(this.previous_step);
    },
    next(): void {
      setTimeout(() => {
        if (this.disabled) { return;}

        const age = get(store, `state.Forms.quizForm.age.value`, null);      
        if (age && age < AGE_MINIMUM) {
          window.location.hash = `quiz_age_modal`;
          return;
        }
        store.dispatch.Quiz.nextStep(this.next_step);
      }, 10);
    },
  },
});