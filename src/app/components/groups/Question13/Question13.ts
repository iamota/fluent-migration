import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({  
  computed: {
    isDisabled(): boolean {
      return (!store.state.Forms.quiz.visit || store.state.Forms.quiz.visit.value === ``) || (!store.state.Forms.quiz.other_value || store.state.Forms.quiz.other_value.errors.length > 0);
    },      
    isMyself(): boolean {
      return store.state.Forms.quiz.focus.value === `myself`;
    },     
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question12`);
    },
    next(): void {      
      store.dispatch.Quiz.nextStep(`question14`);      
    },
  },
});