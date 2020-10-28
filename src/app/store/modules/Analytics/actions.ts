import { defineActions } from 'direct-vuex';
import { AnalyticsActionContext } from './';

export default defineActions({
  // myAction(context): void {
    // const { commit } = AnalyticsActionContext(context);
    // return commit.myMutation();
  // },
  trackEvent(context, payload): void {
    const { commit } = AnalyticsActionContext(context);

    try {      
      gtag(`event`, payload.type, payload.data); // eslint-disable-line
    } catch (error) {
      throw new EvalError(error);
    }
  },
});