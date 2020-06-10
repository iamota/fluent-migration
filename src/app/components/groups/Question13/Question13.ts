import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({  
  computed: {
    isDisabled(): boolean {
      return (!store.state.Forms.quizForm.visit || store.state.Forms.quizForm.visit.value === ``) || (!store.state.Forms.quizForm.other_value || store.state.Forms.quizForm.other_value.errors.length > 0);
    },      
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },     
  },
  methods: {
    back(): void {
      if (store.state.Forms.quizForm.take_temperature.value === `yes`) {
        store.dispatch.Quiz.nextStep(`question12`);
      } else {
        store.dispatch.Quiz.nextStep(`question11`);
      }
    },
    next(): void {      
      store.dispatch.Quiz.nextStep(`question14`);      
    },
  },
});