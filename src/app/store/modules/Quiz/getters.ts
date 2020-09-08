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
  symptom_onset: string,
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

export default defineGetters<Quiz.State>()({
  getCurrentStep(state): string {
    return state.step;
  },
  getCurrentStepNumber(state): number {
    const step = parseInt(state.step.replace(/\D/g, ``), 10);
    return isNaN(step)
      ? 0 
      : step;
  },
  getAssessmentInfo(...args: any): AssessmentData {
    const { rootState } = rootGetterContext(args);
    const { getters } = QuizGetterContext(args);
    const patient_type = get(rootState, `Forms.quizForm.focus.value`, ``);
    const symptoms_over_6_days_self = (get(rootState, `Forms.quizForm.symptom_duration.value`, `6`) !== `6`);
    const symptoms_over_6_days_family = (get(rootState, `Forms.quizForm.family_symptom_duration.value`, `6`) !== `6`);
    const symptoms_onset_self = get(rootState, `Forms.quizForm.symptom_onset.value`, ``);
    const symptoms_onset_family = get(rootState, `Forms.quizForm.family_symptom_onset.value`, ``);
    const symptoms = get(rootState, `Forms.quizForm['symptoms[]'].value`, []);
    const fever_chills = getSymptom(`fever_chills`, symptoms);
    const question = getters.getCurrentStepNumber;
    return {
      patient: {
        first_name: get(rootState, `Forms.quizForm.first_name.value`, ``),
        age: get(rootState, `Forms.quizForm.age.value`, 0),
        gender: get(rootState, `Forms.quizForm.gender.value`, ``),
        patient_type,
        symptoms_over_6_days: patient_type === `self`
          ? symptoms_over_6_days_self
          : symptoms_over_6_days_family,
        symptom_onset: patient_type === `self`
        ? symptoms_onset_self
        : symptoms_onset_family,
        age_under_11: (get(rootState, `Forms.quizForm.family_member_age.value`, 18) < 11),
      },
      symptoms: {
        shortness_of_breath: getSymptom(`shortness_of_breath`, symptoms),
        fever_chills: {
          temperature: fever_chills
          ? get(rootState, `Forms.quizForm.temperature.value`, `t3`)
          : null,
        },
        fatigue_tiredness: getSymptom(`fatigue_tiredness`, symptoms),
        body_aches: getSymptom(`body_aches`, symptoms),
        runny_stuffy_nose: getSymptom(`runny_stuffy_nose`, symptoms),
        thickened_phlegm: getSymptom(`thickened_phlegm`, symptoms),
        sinus_congestion: getSymptom(`sinus_congestion`, symptoms),
        nasal_congestion: getSymptom(`nasal_congestion`, symptoms),
        headache: getSymptom(`headache`, symptoms),
        sore_throat: getSymptom(`sore_throat`, symptoms),
        sneezing: getSymptom(`sneezing`, symptoms),
        coughing: getSymptom(`coughing`, symptoms),
      },
      question,
    };
  },
});