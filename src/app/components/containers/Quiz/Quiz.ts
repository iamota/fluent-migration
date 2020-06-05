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
      return !store.state.Forms.quiz.q35_email || store.state.Forms.quiz.q35_email.value === `` || store.state.Forms.quiz.q35_email.errors.length > 0;
    },
    submited(): boolean {
      const submited = store.state.Forms.quiz && store.state.Forms.quiz._status.submitted;
      if (submited) {
        window.location.href = `/pages/thankyou`;
      }
      return submited;
    },
    getFirstName(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.first_name ? store.state.Forms.quiz.first_name.value : ``;
    },
    getBirthday(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.birthday ? store.state.Forms.quiz.birthday.value : ``;
    },
    getGender(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.gender ? store.state.Forms.quiz.gender.value : ``;
    },
    getHouseholdAdults(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.household_adults ? store.state.Forms.quiz.household_adults.value : ``;
    },
    getHouseholdChildren(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.household_children ? store.state.Forms.quiz.household_children.value : ``;
    },
    getZipCode(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.zip_code ? store.state.Forms.quiz.zip_code.value : ``;
    },
    getTimesSick(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.times_sick ? store.state.Forms.quiz.times_sick.value : ``;
    },
    getFocus(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.focus ? store.state.Forms.quiz.focus.value : ``;
    },
    getVaccine(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.vaccine ? store.state.Forms.quiz.vaccine.value : ``;
    },
    getFamilyMemberAge(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.family_member_age ? store.state.Forms.quiz.family_member_age.value : ``;
    },
    getFamilyGender(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.family_gender ? store.state.Forms.quiz.family_gender.value : ``;
    },
    getSymptomFever(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_fever ? store.state.Forms.quiz.symptoms_fever.value : ``;
    },
    getSymptomChills(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_chills ? store.state.Forms.quiz.symptoms_chills.value : ``;
    },
    getSymptomRunnyNose(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_runny_nose ? store.state.Forms.quiz.symptoms_runny_nose.value : ``;
    },
    getSymptomSneezing(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_sneezing ? store.state.Forms.quiz.symptoms_sneezing.value : ``;
    },
    getSymptomSoreThroat(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_sore_throat ? store.state.Forms.quiz.symptoms_sore_throat.value : ``;
    },
    getSymptomCough(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_cough ? store.state.Forms.quiz.symptoms_cough.value : ``;
    },
    getSymptomMucus(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_mucus ? store.state.Forms.quiz.symptoms_mucus.value : ``;
    },
    getSymptomShortness(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_shortness ? store.state.Forms.quiz.symptoms_shortness.value : ``;
    },
    getSymptomHeadache(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_headache ? store.state.Forms.quiz.symptoms_headache.value : ``;
    },
    getSymptomJointPain(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_joint_pain ? store.state.Forms.quiz.symptoms_joint_pain.value : ``;
    },
    getSymptomExhausted(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_exhausted ? store.state.Forms.quiz.symptoms_exhausted.value : ``;
    },
    getSymptomLostAppetite(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_lost_appetite ? store.state.Forms.quiz.symptoms_lost_appetite.value : ``;
    },
    getSymptomNausea(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_nausea ? store.state.Forms.quiz.symptoms_nausea.value : ``;
    },
    getSymptomVomiting(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_vomiting ? store.state.Forms.quiz.symptoms_vomiting.value : ``;
    },
    getSymptomDiarrhea(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.symptoms_diarrhea ? store.state.Forms.quiz.symptoms_diarrhea.value : ``;
    },
    getTakeTemperature(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.take_temperature ? store.state.Forms.quiz.take_temperature.value : ``;
    },
    getTemperature(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.temperature ? store.state.Forms.quiz.temperature.value : ``;
    },
    getVisit(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.visit ? store.state.Forms.quiz.visit.value : ``;
    },
    getFluTest(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.flu_test ? store.state.Forms.quiz.flu_test.value : ``;
    },
    getAntiviralPrescription(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.antiviral_prescription ? store.state.Forms.quiz.antiviral_prescription.value : ``;
    },
    getAntibioticPrescription(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.antibiotic_prescription ? store.state.Forms.quiz.antibiotic_prescription.value : ``;
    },
    getFeverReducer(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.fever_reducer ? store.state.Forms.quiz.fever_reducer.value : ``;
    },
    getFeverReducerPurchase(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.fever_reducer_purchase ? store.state.Forms.quiz.fever_reducer_purchase.value : ``;
    },
    getColdMedicine(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.cold_medicine ? store.state.Forms.quiz.cold_medicine.value : ``;
    },
    getColdMedicinePurchase(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.cold_medicine_purchase ? store.state.Forms.quiz.cold_medicine_purchase.value : ``;
    },
    getContactOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.contact_online ? store.state.Forms.quiz.contact_online.value : ``;
    },
    getFluTestOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.flu_test_online ? store.state.Forms.quiz.flu_test_online.value : ``;
    },
    getFluTestPurchaseOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.flu_test_purchase_online ? store.state.Forms.quiz.flu_test_purchase_online.value : ``;
    },
    getAntiviralPrescriptionOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.antiviral_prescription_online ? store.state.Forms.quiz.antiviral_prescription_online.value : ``;
    },
    getAntibioticPrescriptionOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.antibiotic_prescription_online ? store.state.Forms.quiz.antibiotic_prescription_online.value : ``;
    },
    getFeverReducerOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.fever_reducer_online ? store.state.Forms.quiz.fever_reducer_online.value : ``;
    },
    getFeverReducerPurchaseOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.fever_reducer_purchase_online ? store.state.Forms.quiz.fever_reducer_purchase_online.value : ``;
    },
    getColdMedicineOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.cold_medicine_online ? store.state.Forms.quiz.cold_medicine_online.value : ``;
    },
    getColdMedicinePurchaseOnline(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.cold_medicine_purchase_online ? store.state.Forms.quiz.cold_medicine_purchase_online.value : ``;
    },
    getInterestProduct(): string {
      return store.state.Forms.quiz && store.state.Forms.quiz.interest_product ? store.state.Forms.quiz.interest_product.value : ``;
    },
  },
  watch: {
    
  },
  methods: {
    startQuiz(): void {
      store.dispatch.Quiz.nextStep(`introduction`);
    },    
  },
});