import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  computed: {
    isFeverReducerYes(): boolean {
      return store.state.Forms.quiz.fever_reducer && store.state.Forms.quiz.fever_reducer.value === `yes`;
    },
    isColdMedicineYes(): boolean {
      return store.state.Forms.quiz.cold_medicine && store.state.Forms.quiz.cold_medicine.value === `yes`;
    },
    isDisabled(): boolean {
      return (!store.state.Forms.quiz.flu_test || store.state.Forms.quiz.flu_test.value === ``) ||
            (!store.state.Forms.quiz.antiviral_prescription || store.state.Forms.quiz.antiviral_prescription.value === ``) ||
            (!store.state.Forms.quiz.antibiotic_prescription || store.state.Forms.quiz.antibiotic_prescription.value === ``) ||
            (!store.state.Forms.quiz.fever_reducer || store.state.Forms.quiz.fever_reducer.value === ``) ||
            (!store.state.Forms.quiz.cold_medicine || store.state.Forms.quiz.cold_medicine.value === ``) ||
            (store.state.Forms.quiz.fever_reducer.value === `yes` && (!store.state.Forms.quiz.fever_reducer_purchase || store.state.Forms.quiz.fever_reducer_purchase.value === ``)) ||
            (store.state.Forms.quiz.cold_medicine.value === `yes` && (!store.state.Forms.quiz.cold_medicine_purchase || store.state.Forms.quiz.cold_medicine_purchase.value === ``));
    },   
    isMyself(): boolean {
      return store.state.Forms.quiz.focus.value === `myself`;
    },   
    purchaseCopy(): string {
      if (store.state.Forms.quiz.focus.value === `myself`) {
        return `Did you purchase?`;
      } else {
        return `Did they purchase?`;
      }
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question13`);
    },
    next(): void {
      store.dispatch.Quiz.nextStep(`question15`);      
    },
  },
});