import { defineActions } from 'direct-vuex';

export default defineActions({
  nextStep({ commit }, step): void {
    const new_url = `${window.location.protocol}//${window.location.host}${window.location.pathname}#${step}`;    
    window.history.pushState({ path: new_url }, ``, new_url);
    commit(`setStep`, step);
  },
  back({ commit }, step): void {
    commit(`setStep`, step);
  },
});