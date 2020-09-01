import Vue from 'vue';
import store from 'infinite/src/app/store';
import { get } from 'lodash-es';
  
export default Vue.extend({
  computed: {
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.contact_online || store.state.Forms.quizForm.contact_online.value === ``;
    },   
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },    
    previous_step(): string {
      if (get(store, `state.Forms.quizForm.visit.value`, null) === `No visit`) { 
        return `question13`;
      }
      
      return `question14`;      
    },
    next_step(): string {
      if (get(store,`state.Forms.quizForm.contact_online.value`, null) === `yes`) {
        return `question16`;
      }

      return `question17`;
    },
  },
});