export default (symptom: string, symptoms: string[]): boolean => {
  return symptoms.indexOf(symptom) !== -1;
};