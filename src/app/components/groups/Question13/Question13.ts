import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({  
  computed: {
    isDisabled(): boolean {
      return (!store.state.Forms.quiz.visit || store.state.Forms.quiz.visit.value === ``) || (!store.state.Forms.quiz.othe_value || store.state.Forms.quiz.othe_value.errors.length > 0);
    },      
    isMyself(): boolean {
      return store.state.Forms.quiz.focus.value === `myself`;
    }, 
    otherValue(): string {
      return store.state.Forms.quiz.othe_value ? store.state.Forms.quiz.othe_value.value : ``;
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