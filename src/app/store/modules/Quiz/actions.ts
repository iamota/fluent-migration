import { defineActions } from 'direct-vuex';

export default defineActions({
  nextStep({ commit }, step): void {
    try {
      window.ga(`send`, `event`, `Quiz`, `Changing Step`, `Step`, step);
    } catch (error) {
      console.error(`Ga error: `, error);
    }
    commit(`setStep`, step);
  },
  back({ commit }, step): void {
    commit(`setStep`, step);
  },
});