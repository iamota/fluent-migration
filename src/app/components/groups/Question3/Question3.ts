import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    getYears(): Array<string> {
      const years = [];
      for (let index = 2020; index > 1919; index--) {
        years.push(String(index));        
      }
      return years;
    },
    isDisabled(): boolean {
      return !store.state.Forms.quiz.birthday || store.state.Forms.quiz.birthday.value === `` || store.state.Forms.quiz.birthday.errors.length > 0;
    },
  },
  methods: {
    next(): void {
      store.dispatch.Quiz.nextStep(`question4`);
    },
  },
});