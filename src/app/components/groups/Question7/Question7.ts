import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question4`,
      next_step: `question8`,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.family_member_age || store.state.Forms.quizForm.family_member_age.value === `` || store.state.Forms.quizForm.family_member_age.errors.length > 0;
    },  
  },
  methods: {
    nextStep(): void { 
      store.dispatch.Quiz.nextStep(this.next_step);
    },
  },
});