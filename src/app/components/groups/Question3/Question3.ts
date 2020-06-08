import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    getYears(): Array<string> {
      const years = [`Under 18`];
      for (let index = 18; index < 106; index++) {
        years.push(String(index));        
      }
      return years;
    },
    isDisabled(): boolean {
      return !store.state.Forms.quiz.age || store.state.Forms.quiz.age.value === `` || store.state.Forms.quiz.age.errors.length > 0;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question2`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question4`);
    },
  },
});