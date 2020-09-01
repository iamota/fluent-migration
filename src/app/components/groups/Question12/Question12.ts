import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {    
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },     
  },
});