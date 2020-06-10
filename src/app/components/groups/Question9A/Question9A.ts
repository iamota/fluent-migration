import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.family_member_age || store.state.Forms.quizForm.family_member_age.value === ``;
    },  
  },  
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question8`);
    },
    next(): void {      
      store.dispatch.Quiz.nextStep(`question9b`);      
    },
  },
});