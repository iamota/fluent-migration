import { defineGetters } from 'direct-vuex';

export default defineGetters<Quiz.State>()({
  getCurrentStep(state): string {
    return state.step;
  },
});