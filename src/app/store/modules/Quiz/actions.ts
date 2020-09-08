import { defineActions } from 'direct-vuex';
import $ from 'jquery';
import {QuizActionContext} from './';

export default defineActions({
  previousStep(context, step): void {
    const { commit } = QuizActionContext(context);  
    commit.setStep(step);
  },
  async nextStep(context, step): Promise<void> {
    const { commit, dispatch } = QuizActionContext(context);  
    const response = await dispatch.getAssessment();

    if (response && response.type === `advance`) {
      try {
        window.ga(`send`, `event`, `Quiz`, `Changing Step`, `Step`, step);
      } catch (error) {
        console.error(`Ga error: `, error);
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: `smooth` });
      }, 1);
      commit.setStep(step);
    }
  },
  back(context, step): void {
    const { commit } = QuizActionContext(context);  
    
    commit.setStep(step);
  },
  getProduct(context, handle): Promise<GenericObject> {
    const { commit, dispatch } = QuizActionContext(context);  
    return new Promise(async (resolve, reject) => {
      const result = await Promise.resolve($.get(`/products/${handle}?view=ajax`));
      const $product_data = $(`<div />`).html(result).find(`[data-vue-props]`);
      const data = JSON.parse($product_data.text());

      if (!data) { 
        reject(Error(`unable to fine product data`));
        return; 
      }

      resolve(data.product_data);
    });
  },
  getAssessment(context): Promise<GenericObject> {
    const { getters } = QuizActionContext(context);  
    return new Promise(async (resolve) => {
      try {
        // const mock = {
        //   patient: {
        //     first_name: `First`,
        //     age: 30,
        //     gender: `male`,
        //     patient_type: `self`,
        //     symptoms_over_6_days: false,
        //     symptom_onset: `sudden`,
        //     age_under_11: false,
        //   },
        //   symptoms: {
        //     shortness_of_breath: false,
        //     fever_chills: {
        //       temperature: null,
        //     },
        //     fatigue_tiredness: false,
        //     body_aches: false,
        //     runny_stuffy_nose: false,
        //     thickened_phlegm: false,
        //     sinus_congestion: false,
        //     nasal_congestion: false,
        //     headache: false,
        //     sore_throat: false,
        //     sneezing: false,
        //     coughing: false,
        //   },
        //   question: 1,
        // };
        const data = JSON.stringify(getters.getAssessmentInfo);
        const response = await $.ajax({
          type: `POST`,
          url: `https://fluent-api.vcomm.io/assessment`,
          contentType: `application/json; charset=utf-8`,
          crossDomain: true,
          xhrFields: {
            withCredentials: true,
          },
          data,
        });
        resolve(response);
      } catch (error) {
        console.log(`ERROR: `, error);
      }
    });
  },
});