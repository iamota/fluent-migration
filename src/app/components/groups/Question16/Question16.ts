import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  data() {
    return {
      previous_step: `question15`,
      next_step: `question17`,
    };
  },
  computed: {
    isFluTestYes(): boolean {
      return store.state.Forms.quizForm.flu_test_online && store.state.Forms.quizForm.flu_test_online.value === `yes`;
    },
    isFeverReducerYes(): boolean {
      return store.state.Forms.quizForm.fever_reducer_online && store.state.Forms.quizForm.fever_reducer_online.value === `yes`;
    },
    isColdMedicineYes(): boolean {
      return store.state.Forms.quizForm.cold_medicine_online && store.state.Forms.quizForm.cold_medicine_online.value === `yes`;
    },
    isDisabled(): boolean {
      return (!store.state.Forms.quizForm.flu_test_online || store.state.Forms.quizForm.flu_test_online.value === ``) ||
            (!store.state.Forms.quizForm.antiviral_prescription_online || store.state.Forms.quizForm.antiviral_prescription_online.value === ``) ||
            (!store.state.Forms.quizForm.antibiotic_prescription_online || store.state.Forms.quizForm.antibiotic_prescription_online.value === ``) ||
            (!store.state.Forms.quizForm.fever_reducer_online || store.state.Forms.quizForm.fever_reducer_online.value === ``) ||
            (!store.state.Forms.quizForm.cold_medicine_online || store.state.Forms.quizForm.cold_medicine_online.value === ``) ||
            (store.state.Forms.quizForm.flu_test_online.value === `yes` && (!store.state.Forms.quizForm.flu_test_purchase_online || store.state.Forms.quizForm.flu_test_purchase_online.value === ``)) ||
            (store.state.Forms.quizForm.fever_reducer_online.value === `yes` && (!store.state.Forms.quizForm.fever_reducer_purchase_online || store.state.Forms.quizForm.fever_reducer_purchase_online.value === ``)) ||
            (store.state.Forms.quizForm.cold_medicine_online.value === `yes` && (!store.state.Forms.quizForm.cold_medicine_purchase_online || store.state.Forms.quizForm.cold_medicine_purchase_online.value === ``));
    }, 
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
    },  
    getTestCopy(): string {
      if (store.state.Forms.quizForm.focus.value === `myself`) {
        return `Did you get the test?`;
      } else {
        return `Did they get the test?`;
      }
    },       
    purchaseCopy(): string {
      if (store.state.Forms.quizForm.focus.value === `myself`) {
        return `Did you purchase?`;
      } else {
        return `Did they purchase?`;
      }
    },
  },
});