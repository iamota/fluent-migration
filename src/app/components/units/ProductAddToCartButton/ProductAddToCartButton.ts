import Product from '@INF/mixins/Product';
import store from '@INF/store';

export default Product.extend({
  props: {
    assessment: { type: Boolean, default: false },
    authorized: { type: Boolean, default: true },
  },
  methods: {
    onClick(): void {
      const tracking_data = {
        type: `conversion`,
        data: {
          send_to: `AW-606295050/Qc1zCP_e4uEBEIqojaEC`,
        },
      };
  
      store.dispatch.Analytics.trackEvent(tracking_data);
    },
  },
});