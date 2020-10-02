import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  props: {
    disabled: { type: Boolean, default: false },
    previous_step: { type: String },
    next_step: { type: String },
  },
  computed: {
    loading(): boolean {
      return store.state.Quiz.loading;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.previousStep(this.previous_step);
    },
    next(): void {
      setTimeout(() => {
        if (this.disabled) { return; }
                
        store.dispatch.Quiz.nextStep(this.next_step);
      }, 10);
    },
  },
});