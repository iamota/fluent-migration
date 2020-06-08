import { defineMutations } from 'direct-vuex';

export default defineMutations<Quiz.State>()({
  setStep(state, newStep: string) {
    state.step = newStep;
  },
});