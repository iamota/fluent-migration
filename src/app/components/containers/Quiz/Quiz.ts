import Vue from 'vue';
import store from '@INF/store';
import { get } from 'lodash-es';
import getters from '@INF/modules/Products/getters';
import mutations from '@INF/modules/Products/mutations';
import actions from '@INF/modules/Products/actions';
import { default_props, default_css_variables } from './Quiz.defaults';

export default Vue.extend({
  props: {
    ...default_props,
    cta: { type: String },
    cta_aria_label: { type: String },
    cta_style: { type: String },
    disclaimer_text: { type: String },
    body_text: { type: String },
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
            return `We cannot accept input from anyone under the age of 18. Thank you for your interest!`;
          }
          return ``;
        },
        validNumericalAge: (age: string): string => {
          const age_number = parseInt(age);
          const focus = get(store, `state.Forms.quizForm.focus.value`, ``);
          if (age_number > 120 || age_number < 1) {
            return `Please input an age that is between 1 and 120`;
          }
          if (focus !== `other` && age_number < 18) {
            return `We cannot accept input from anyone under the age of 18. Thank you for your interest!`;
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
      if (!store.state.Forms.quizForm) {
        return true;
      }
      return !store.state.Forms.quizForm.q35_email || store.state.Forms.quizForm.q35_email.value === `` || store.state.Forms.quizForm.q35_email.errors.length > 0;
    },
    submitted(): boolean {
      const submitted = store.state.Forms.quizForm && store.state.Forms.quizForm._status.submitted;      
      return submitted;
    },
    getFirstName(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.first_name ? store.state.Forms.quizForm.first_name.value : ``;
    },
    getAge(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.age ? store.state.Forms.quizForm.age.value : ``;
    },
    getGender(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.gender ? store.state.Forms.quizForm.gender.value : ``;
    },
    getFocus(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.focus ? store.state.Forms.quizForm.focus.value : ``;
    },
    getFamilyMemberAge(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.family_member_age ? store.state.Forms.quizForm.family_member_age.value : ``;
    },
    getFamilySymptomOnset(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.family_symptom_onset ? store.state.Forms.quizForm.family_symptom_onset.value : ``;
    },
    getFamilySymptomDuration(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.family_symptom_duration ? store.state.Forms.quizForm.family_symptom_duration.value : ``;
    },
    getSymptoms(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm[`symptoms[]`] ? store.state.Forms.quizForm[`symptoms[]`].value : [];
    },    
    getSymptomOnset(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.symptom_onset ? store.state.Forms.quizForm.symptom_onset.value : ``;
    },   
    getSymptomDuration(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.symptom_duration ? store.state.Forms.quizForm.symptom_duration.value : ``;
    },   
    getTemperature(): string {
      return store.state.Forms.quizForm && store.state.Forms.quizForm.temperature ? store.state.Forms.quizForm.temperature.value : ``;
    },
  },
  watch: {
    submitted(new_value): void {
      if (new_value) {
        this.handleSubmit();
      }
    },
  },
  methods: {
    back(): void {
      store.dispatch.Quiz.nextStep(`question17`);
    },
    handleSubmit(): void {      
      // @ts-ignore
      document.quizKlaviyo[0].action = `https://manage.kmail-lists.com/subscriptions/subscribe`;
      // @ts-ignore
      document.quizKlaviyo[0].submit();
      setTimeout(() => {
        window.location.href = `/pages/thankyou`;
      }, 1500);
    },
    startQuiz(): void {
      store.dispatch.Quiz.nextStep(`question1`);
    },
    async getProduct(): Promise<void> {
      const product_data = await store.dispatch.Quiz.getProduct(store.state.Quiz.product_handle);

      const selected_variant_id = product_data.variants[0].id;
      const variant_table: GenericObject = {};
      
      for (const variant of product_data.variants) {
        variant_table[variant.id] = variant;
      }
  
      const state = {
        product_data,
        variant_table,
        selected_variant_id,
        quantity: 1,
      };

      // @ts-ignore
      this.$store.registerModule([`Products`, product_data.id], { namespaced: true, state, mutations, actions, getters });
      
    }, 
  },
  mounted() {
    this.getProduct();
  },
});