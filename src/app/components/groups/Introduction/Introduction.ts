import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({ 
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`starter`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question1`);
    },
  },
});