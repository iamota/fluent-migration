import { defineActions } from 'direct-vuex';
import { AnalyticsActionContext } from './';

export default defineActions({
  // myAction(context): void {
    // const { commit } = AnalyticsActionContext(context);
    // return commit.myMutation();
  // },
  trackEvent(context, payload): void {    
    try {      
      gtag(`event`, payload.type, payload.data); // eslint-disable-line
    } catch (error) {
      throw new Error(error);
    }
  },
  trackPinterest(context, payload): void {
    try {
      // @ts-ignore
      pintrk(`track`, payload.type, payload.data);
    } catch (error) {
      throw new Error(error);
    }
  },
  linkedInPixel(context, payload): void {
    const linked_in_pixel = new Image();
    linked_in_pixel.src = payload;
    linked_in_pixel.style.display = `none`;
    document.body.appendChild(linked_in_pixel);
  },
});