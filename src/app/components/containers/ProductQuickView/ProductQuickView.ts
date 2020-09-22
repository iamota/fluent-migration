import ProductQuickView from '@INF/containers/ProductQuickView/ProductQuickView';
import  { get } from 'lodash-es';
  
export default ProductQuickView.extend({
  props: {
    cta: { type: String, default: `Details`},
  },
  computed: {
    product_url(): string {
      const product_data = get(this, `product.product_data`, null);
      if (!product_data) { return ``; }

      return `/products/${this.product.product_data.handle}`;
    },
  },
});