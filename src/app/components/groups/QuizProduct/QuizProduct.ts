import { ProductOverview } from '@INF/containers/ProductOverview';
import store from '@INF/store';
  
export default ProductOverview.extend({
  computed: {
    product_id(): number | unknown {
      return store.state.Quiz.product_id;
    },
    product_url(): string {
      return `/products/${store.state.Quiz.product_handle}`;
    },
    recommended_heading(): string {
      return store.state.Quiz.recomendation_custom_message;
    },
  },
});