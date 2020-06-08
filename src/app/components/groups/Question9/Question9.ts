import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({  
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quiz.vaccine || store.state.Forms.quiz.vaccine.value === `` || store.state.Forms.quiz.vaccine.errors.length > 0;
    },
    isMyself(): boolean {
      return store.state.Forms.quiz.focus.value === `myself`;
    },
  },
  watch: {
    isDisabled(): void {
      if (store.state.Forms.quiz.vaccine && store.state.Forms.quiz.vaccine.value !== `` && store.state.Forms.quiz.vaccine.errors.length === 0) {      
        setTimeout(() => {
          store.dispatch.Quiz.nextStep(`question10`);   
        }, 1000);       
      }
    },
  }, 
  methods: {
    back(): void {
      if (store.state.Forms.quiz.focus.value === `myself`) {
        store.dispatch.Quiz.nextStep(`question8`);
      } else {
        store.dispatch.Quiz.nextStep(`question9b`);
      }
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question10`);      
    },
  },
});