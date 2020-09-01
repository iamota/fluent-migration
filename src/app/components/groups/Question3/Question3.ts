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
      return !store.state.Forms.quizForm.age || store.state.Forms.quizForm.age.value === `` || store.state.Forms.quizForm.age.errors.length > 0;
    },
  },
});