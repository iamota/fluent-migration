import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    getName(): string {
      return this.$store.state.Forms.quiz.first_name.value;
    },   
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question1`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question3`);
    },
  },
});