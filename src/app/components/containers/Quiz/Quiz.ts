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
            return `The zip code needs to have at least 5 digits`;
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
  },
  methods: {
    startQuiz(): void {
      store.dispatch.Quiz.nextStep(`introduction`);
    },
  },
});