import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    currentStep(): number {
      return Number(store.getters.Quiz.getCurrentStep.replace(/\D/g, ``));
    },
  },
});