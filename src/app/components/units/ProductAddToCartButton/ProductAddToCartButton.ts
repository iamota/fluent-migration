import Product from '@INF/mixins/Product';

export default Product.extend({
  props: {
    assessment: { type: Boolean, default: false },
    authorized: { type: Boolean, default: true },
  },
});