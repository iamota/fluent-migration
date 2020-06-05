import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    getName(): string {
      return this.$store.state.Forms.quiz.first_name.value;
    },   
  },
  mounted(): void {
    setTimeout(() => {
      store.dispatch.Quiz.nextStep(`question3`);
    }, 8000);
  },  
});