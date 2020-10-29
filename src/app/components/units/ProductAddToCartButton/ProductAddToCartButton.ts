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

      const pintrk_data = {
        type: `addtocart`,
        data: {
          value: (this.getters.price * this.product.quantity) / 100,
          order_quantity: this.product.quantity,
          currency: `USD`,
        },
      };
  
      store.dispatch.Analytics.trackEvent(tracking_data);
      store.dispatch.Analytics.trackPinterest(pintrk_data);
      store.dispatch.Analytics.linkedInPixel(`https://px.ads.linkedin.com/collect/?pid=2890969&conversionId=3060834&fmt=gif`);
    },
  },
});