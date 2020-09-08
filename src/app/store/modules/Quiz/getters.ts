import { defineGetters } from 'direct-vuex';

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
  temperature: string;
}

export default defineGetters<Quiz.State>()({
  getCurrentStep(state): string {
    return state.step;
  },
  getAssessmentInfo(state):
});