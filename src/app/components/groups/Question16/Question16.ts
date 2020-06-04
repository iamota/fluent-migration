import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isFluTestYes(): boolean {
      return store.state.Forms.quiz.flu_test_online && store.state.Forms.quiz.flu_test_online.value === `yes`;
    },
    isFeverReducerYes(): boolean {
      return store.state.Forms.quiz.fever_reducer_online && store.state.Forms.quiz.fever_reducer_online.value === `yes`;
    },
    isColdMedicineYes(): boolean {
      return store.state.Forms.quiz.cold_medicine_online && store.state.Forms.quiz.cold_medicine_online.value === `yes`;
    },
    isDisabled(): boolean {
      return (!store.state.Forms.quiz.flu_test_online || store.state.Forms.quiz.flu_test_online.value === ``) ||
            (!store.state.Forms.quiz.antiviral_prescription_online || store.state.Forms.quiz.antiviral_prescription_online.value === ``) ||
            (!store.state.Forms.quiz.antibiotic_prescription_online || store.state.Forms.quiz.antibiotic_prescription_online.value === ``) ||
            (!store.state.Forms.quiz.fever_reducer_online || store.state.Forms.quiz.fever_reducer_online.value === ``) ||
            (!store.state.Forms.quiz.cold_medicine_online || store.state.Forms.quiz.cold_medicine_online.value === ``) ||
            (store.state.Forms.quiz.flu_test_online.value === `yes` && (!store.state.Forms.quiz.flu_test_purchase_online || store.state.Forms.quiz.flu_test_purchase_online.value === ``)) ||
            (store.state.Forms.quiz.fever_reducer_online.value === `yes` && (!store.state.Forms.quiz.fever_reducer_purchase_online || store.state.Forms.quiz.fever_reducer_purchase_online.value === ``)) ||
            (store.state.Forms.quiz.cold_medicine_online.value === `yes` && (!store.state.Forms.quiz.cold_medicine_purchase_online || store.state.Forms.quiz.cold_medicine_purchase_online.value === ``));
    }, 
    isMyself(): boolean {
      return store.state.Forms.quiz.focus.value === `myself`;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question15`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question17`);      
    },
  },
});