import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isFeverReducerYes(): boolean {
      return store.state.Forms.quizForm.fever_reducer && store.state.Forms.quizForm.fever_reducer.value === `yes`;
    },
    isColdMedicineYes(): boolean {
      return store.state.Forms.quizForm.cold_medicine && store.state.Forms.quizForm.cold_medicine.value === `yes`;
    },
    isDisabled(): boolean {
      return (!store.state.Forms.quizForm.flu_test || store.state.Forms.quizForm.flu_test.value === ``) ||
            (!store.state.Forms.quizForm.antiviral_prescription || store.state.Forms.quizForm.antiviral_prescription.value === ``) ||
            (!store.state.Forms.quizForm.antibiotic_prescription || store.state.Forms.quizForm.antibiotic_prescription.value === ``) ||
            (!store.state.Forms.quizForm.fever_reducer || store.state.Forms.quizForm.fever_reducer.value === ``) ||
            (!store.state.Forms.quizForm.cold_medicine || store.state.Forms.quizForm.cold_medicine.value === ``) ||
            (store.state.Forms.quizForm.fever_reducer.value === `yes` && (!store.state.Forms.quizForm.fever_reducer_purchase || store.state.Forms.quizForm.fever_reducer_purchase.value === ``)) ||
            (store.state.Forms.quizForm.cold_medicine.value === `yes` && (!store.state.Forms.quizForm.cold_medicine_purchase || store.state.Forms.quizForm.cold_medicine_purchase.value === ``));
    },   
    isMyself(): boolean {
      return store.state.Forms.quizForm.focus.value === `myself`;
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