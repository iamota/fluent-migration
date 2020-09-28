import { defineGetters } from 'direct-vuex';
import { rootGetterContext } from '@INF/store';
import { get } from 'lodash-es';
import getSymptom from '../../../utils/getSymptom';
import { QuizGetterContext } from './';

interface AssessmentData {
  patient: Patient;
  symptoms: Symptoms;
  question: number;
} 

interface Patient {
  first_name: string;
  age: number;
  gender: string;
  patient_type: string;
  symptoms_over_6_days: boolean;
  symptom_onset: string;
  age_under_11: boolean;
}

interface Symptoms {
  shortness_of_breath: boolean;
  fever_chills: FeverChills;
  fatigue_tiredness: boolean;
  body_aches: boolean;
  runny_stuffy_nose: boolean;
  thickened_phlegm: boolean;
  sinus_congestion: boolean;
  nasal_congestion: boolean;
  headache: boolean;
  sore_throat: boolean;
  sneezing: boolean;
  coughing: boolean;
}

interface FeverChills {
  temperature: string | unknown;
}

interface Query {
  [index: string]: string | boolean | number;
}

export default defineGetters<Quiz.State>()({
  getSlideBack(state): boolean {
    return state.slide_back;
  },
  getCurrentStep(state): string {
    return state.step;
  },
  getCurrentStepNumber(state): number {
    const step = parseInt(state.step.replace(/\D/g, ``), 10);
    return isNaN(step)
      ? 0 
      : step;
  },
  getAssessmentQueryString(...args: any): string {
    const { rootState } = rootGetterContext(args);
    const first_name = get(rootState, `Forms.quizForm.first_name.value`, ``);
    const age = get(rootState, `Forms.quizForm.age.value`, 0);
    const age_under_11 = (get(rootState, `Forms.quizForm.family_member_age.value`, 18) < 11);
    const patient_type = get(rootState, `Forms.quizForm.focus.value`, ``);
    const gender = get(rootState, `Forms.quizForm.gender.value`, ``);
    const symptoms_over_6_days_self = (get(rootState, `Forms.quizForm.symptom_duration.value`, `6`) !== `6`);
    const symptoms_over_6_days_family = (get(rootState, `Forms.quizForm.family_symptom_duration.value`, `6`) !== `6`);
    const symptoms_onset_self = get(rootState, `Forms.quizForm.symptom_onset.value`, ``);
    const symptoms_onset_family = get(rootState, `Forms.quizForm.family_symptom_onset.value`, ``);
    const symptoms = get(rootState, `Forms.quizForm['symptoms[]'].value`, []);
    const fever_chills = getSymptom(`fever_chills`, symptoms);
    const shortness_of_breath = getSymptom(`shortness_of_breath`, symptoms);
    const temperature = get(rootState, `Forms.quizForm.temperature.value`, `t3`);
    const fatigue_tiredness = getSymptom(`fatigue_tiredness`, symptoms);
    const body_aches = getSymptom(`body_aches`, symptoms);
    const runny_stuffy_nose = getSymptom(`runny_stuffy_nose`, symptoms);
    const thickened_phlegm = getSymptom(`thickened_phlegm`, symptoms);
    const sinus_congestion = getSymptom(`sinus_congestion`, symptoms);
    const nasal_congestion = getSymptom(`nasal_congestion`, symptoms);
    const headache = getSymptom(`headache`, symptoms);
    const sore_throat = getSymptom(`sore_throat`, symptoms);
    const sneezing = getSymptom(`sneezing`, symptoms);
    const coughing = getSymptom(`coughing`, symptoms);
    
    const query_object: Query = {
      first_name,
      age,
      gender,
      patient_type,
      symptoms_over_6_days: patient_type === `self`
        ? symptoms_over_6_days_self
        : symptoms_over_6_days_family,
      symptom_onset: patient_type === `self`
      ? symptoms_onset_self
      : symptoms_onset_family,
      age_under_11,
      shortness_of_breath,
      fever_chills,
      temperature,
      fatigue_tiredness,
      body_aches,
      runny_stuffy_nose,
      thickened_phlegm,
      sinus_congestion,
      nasal_congestion,
      headache,
      sore_throat,
      sneezing,
      coughing,
    };

    const query_string = Object.keys(query_object)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query_object[key])}`)
      .join(`&`);
    
    return query_string;
  },
  getAssessmentInfo(...args: any): AssessmentData | string {
    const { rootState } = rootGetterContext(args);
    const { getters, state } = QuizGetterContext(args);
    const first_name = get(rootState, `Forms.quizForm.first_name.value`, ``);
    const age = get(rootState, `Forms.quizForm.age.value`, 0);
    const age_under_11 = (get(rootState, `Forms.quizForm.family_member_age.value`, 18) < 11);
    const patient_type = get(rootState, `Forms.quizForm.focus.value`, ``);
    const gender = get(rootState, `Forms.quizForm.gender.value`, ``);
    const symptoms_over_6_days_self = (get(rootState, `Forms.quizForm.symptom_duration.value`, `6`) !== `6`);
    const symptoms_over_6_days_family = (get(rootState, `Forms.quizForm.family_symptom_duration.value`, `6`) !== `6`);
    const symptoms_onset_self = get(rootState, `Forms.quizForm.symptom_onset.value`, ``);
    const symptoms_onset_family = get(rootState, `Forms.quizForm.family_symptom_onset.value`, ``);
    const symptoms = get(rootState, `Forms.quizForm['symptoms[]'].value`, []);
    const fever_chills = getSymptom(`fever_chills`, symptoms);
    const shortness_of_breath = getSymptom(`shortness_of_breath`, symptoms);
    const temperature = get(rootState, `Forms.quizForm.temperature.value`, `t3`);
    const fatigue_tiredness = getSymptom(`fatigue_tiredness`, symptoms);
    const body_aches = getSymptom(`body_aches`, symptoms);
    const runny_stuffy_nose = getSymptom(`runny_stuffy_nose`, symptoms);
    const thickened_phlegm = getSymptom(`thickened_phlegm`, symptoms);
    const sinus_congestion = getSymptom(`sinus_congestion`, symptoms);
    const nasal_congestion = getSymptom(`nasal_congestion`, symptoms);
    const headache = getSymptom(`headache`, symptoms);
    const sore_throat = getSymptom(`sore_throat`, symptoms);
    const sneezing = getSymptom(`sneezing`, symptoms);
    const coughing = getSymptom(`coughing`, symptoms);
    const question = getters.getCurrentStepNumber;

    return {
      patient: {
        first_name,
        age,
        gender,
        patient_type,
        symptoms_over_6_days: patient_type === `self`
          ? symptoms_over_6_days_self
          : symptoms_over_6_days_family,
        symptom_onset: patient_type === `self`
        ? symptoms_onset_self
        : symptoms_onset_family,
        age_under_11,
      },
      symptoms: {
        shortness_of_breath,
        fever_chills: {
          temperature: fever_chills
          ? temperature
          : null,
        },
        fatigue_tiredness,
        body_aches,
        runny_stuffy_nose,
        thickened_phlegm,
        sinus_congestion,
        nasal_congestion,
        headache,
        sore_throat,
        sneezing,
        coughing,
      },
      question,
    };
  },
});