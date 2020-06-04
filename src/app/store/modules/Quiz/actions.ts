import { defineActions } from 'direct-vuex';

export default defineActions({
  nextStep({ commit }, step): void {
    const _gaq = window._gaq || [];
    _gaq.push([`_trackEvent`, `Step`, step]);
    commit(`setStep`, step);
  },
  back({ commit }, step): void {
    commit(`setStep`, step);
  },
});