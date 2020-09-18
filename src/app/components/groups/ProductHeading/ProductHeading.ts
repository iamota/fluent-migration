import { ProductHeading } from '@INF/groups/ProductHeading/';

export default ProductHeading.extend({
  props: {
    assessment: { type: Boolean, default: false },
    authorized: { type: Boolean, default: true },
  },
});