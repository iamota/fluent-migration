import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      other_value: ``,
    };
  },
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quiz.visit || store.state.Forms.quiz.visit.value === ``;
    },      
    isMyself(): boolean {
      return store.state.Forms.quiz.focus.value === `myself`;
    },  
  },  
  methods: {
    updateRadioInput(e: Event): void {
      const value = (e.target as HTMLInputElement).value;
      this.other_value = value.split(` `).join(`_`);
    },
    back(): void {
      store.dispatch.Quiz.nextStep(`question12`);
    },
    next(): void {      
      store.dispatch.Quiz.nextStep(`question14`);      
    },
  },
});