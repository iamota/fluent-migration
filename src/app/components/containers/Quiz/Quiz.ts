import Vue from 'vue';
import store from 'infinite/src/app/store';
import { default_props, default_css_variables } from './Quiz.defaults';

export default Vue.extend({
  props: {
    ...default_props,
    cta: { type: String },
    cta_aria_label: { type: String },
    cta_style: { type: String },
  },
  data() {
    return {
      validators: {
        validZipCode: (zipcode: string): string => {
          const date_regex = /^\d{5}(?:[-\s]\d{4})?$/;
          if (!date_regex.test(zipcode)) {
            return `The zip code needs to be 5 digits`;
          }
          return ``;
        },
        validAge: (age: string): string => {          
          if (age === `Under 18`) {
            return `We can not accept input from someone who is a minor. Thank you for your interest!`;
          }
          return ``;
        },
      },
    };
  },
  computed: {
    cssVariables(): object {
      return {
        ...default_css_variables(this),
      };
    },
    currentStep(): string {
      return store.getters.Quiz.getCurrentStep;
    },
    isDisabled(): boolean {
      return !store.state.Forms.quizForm.q35_email || store.state.Forms.quizForm.q35_email.value === `` || store.state.Forms.quizForm.q35_email.errors.length > 0;
    },
    submited(): boolean {
      const submited = store.state.Forms.quiz && store.state.Forms.quizForm._status.submitted;
      if (submited) {
        window.location.href = `/pages/thankyou`;
      }
      return submited;
    },
    getFirstName(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.first_name ? store.state.Forms.quizForm.first_name.value : ``;
    },
    getage(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.age ? store.state.Forms.quizForm.age.value : ``;
    },
    getGender(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.gender ? store.state.Forms.quizForm.gender.value : ``;
    },
    getHouseholdAdults(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.household_adults ? store.state.Forms.quizForm.household_adults.value : ``;
    },
    getHouseholdChildren(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.household_children ? store.state.Forms.quizForm.household_children.value : ``;
    },
    getZipCode(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.zip_code ? store.state.Forms.quizForm.zip_code.value : ``;
    },
    getTimesSick(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.times_sick ? store.state.Forms.quizForm.times_sick.value : ``;
    },
    getFocus(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.focus ? store.state.Forms.quizForm.focus.value : ``;
    },
    getVaccine(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.vaccine ? store.state.Forms.quizForm.vaccine.value : ``;
    },
    getFamilyMemberAge(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.family_member_age ? store.state.Forms.quizForm.family_member_age.value : ``;
    },
    getFamilyGender(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.family_gender ? store.state.Forms.quizForm.family_gender.value : ``;
    },
    getSymptoms(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz[`symptoms[]`] ? store.state.Forms.quiz[`symptoms[]`].value : [];
    },    
    getTakeTemperature(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.take_temperature ? store.state.Forms.quizForm.take_temperature.value : ``;
    },
    getTemperature(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.temperature ? store.state.Forms.quizForm.temperature.value : ``;
    },
    getVisit(): string {
      if (store.state.Forms.quiz && store.state.Forms.quizForm.visit) {
        return store.state.Forms.quizForm.visit.label === `Other` ? `Other: ${store.state.Forms.quizForm.other_value.value}` : store.state.Forms.quizForm.visit.value;
      }
      return ``;
    },
    getFluTest(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.flu_test ? store.state.Forms.quizForm.flu_test.value : ``;
    },
    getAntiviralPrescription(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.antiviral_prescription ? store.state.Forms.quizForm.antiviral_prescription.value : ``;
    },
    getAntibioticPrescription(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.antibiotic_prescription ? store.state.Forms.quizForm.antibiotic_prescription.value : ``;
    },
    getFeverReducer(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.fever_reducer ? store.state.Forms.quizForm.fever_reducer.value : ``;
    },
    getFeverReducerPurchase(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.fever_reducer_purchase ? store.state.Forms.quizForm.fever_reducer_purchase.value : ``;
    },
    getColdMedicine(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.cold_medicine ? store.state.Forms.quizForm.cold_medicine.value : ``;
    },
    getColdMedicinePurchase(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.cold_medicine_purchase ? store.state.Forms.quizForm.cold_medicine_purchase.value : ``;
    },
    getContactOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.contact_online ? store.state.Forms.quizForm.contact_online.value : ``;
    },
    getFluTestOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.flu_test_online ? store.state.Forms.quizForm.flu_test_online.value : ``;
    },
    getFluTestPurchaseOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.flu_test_purchase_online ? store.state.Forms.quizForm.flu_test_purchase_online.value : ``;
    },
    getAntiviralPrescriptionOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.antiviral_prescription_online ? store.state.Forms.quizForm.antiviral_prescription_online.value : ``;
    },
    getAntibioticPrescriptionOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.antibiotic_prescription_online ? store.state.Forms.quizForm.antibiotic_prescription_online.value : ``;
    },
    getFeverReducerOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.fever_reducer_online ? store.state.Forms.quizForm.fever_reducer_online.value : ``;
    },
    getFeverReducerPurchaseOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.fever_reducer_purchase_online ? store.state.Forms.quizForm.fever_reducer_purchase_online.value : ``;
    },
    getColdMedicineOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.cold_medicine_online ? store.state.Forms.quizForm.cold_medicine_online.value : ``;
    },
    getColdMedicinePurchaseOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.cold_medicine_purchase_online ? store.state.Forms.quizForm.cold_medicine_purchase_online.value : ``;
    },
    getInterestProduct(): string {
      return store.state.Forms.quiz && store.state.Forms.quizForm.interest_product ? store.state.Forms.quizForm.interest_product.value : ``;
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question17`);
    },
    startQuiz(): void {
      store.dispatch.Quiz.nextStep(`introduction`);
    },    
  },
});