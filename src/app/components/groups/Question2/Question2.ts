import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    getName(): string {
      return store.state.Forms.quizForm.first_name.value;
    },   
  },
});