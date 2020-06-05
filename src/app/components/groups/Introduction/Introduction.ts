import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({ 
  mounted(): void {
    setTimeout(() => {
      store.dispatch.Quiz.nextStep(`question1`);
    }, 8000);
  },
});