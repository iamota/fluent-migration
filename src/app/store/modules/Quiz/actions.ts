import { defineActions } from 'direct-vuex';

export default defineActions({
  nextStep({ commit }, step): void {
    commit(`setStep`, step);
  },
  back({ commit }, step): void {
    commit(`setStep`, step);
  },
});