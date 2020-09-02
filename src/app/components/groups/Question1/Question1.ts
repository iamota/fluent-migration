import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `starter`,
      next_step: `question2`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.first_name || store.state.Forms.quizForm.first_name.value === `` || store.state.Forms.quizForm.first_name.errors.length > 0;
    },    
  },
  methods: {
    nextStep(): void {
      if (this.isDisabled) { return; }

      store.dispatch.Quiz.nextStep(this.next_step);
    },
  },
});