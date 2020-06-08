import { defineActions } from 'direct-vuex';

export default defineActions({
  nextStep({ commit }, step): void {
    try {
      window.ga(`send`, `event`, `Quiz`, `Changing Step`, `Step`, step);
    } catch (error) {
      console.error(`Ga error: `, error);
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: `smooth` });
    }, 1);
    commit(`setStep`, step);
  },
  back({ commit }, step): void {
    commit(`setStep`, step);
  },
});