import ProductShortDescription from '@INF/groups/ProductShortDescription/ProductShortDescription';
import store from '@INF/store';
  
export default ProductShortDescription.extend({
  props: {    
    truncate: { type: Number, default: 150},    
  },
  computed: {
    description(): string | null {
      const product_data = store.state.Products[this.product_id].product_data;

      if (product_data && product_data.description) {
        const description = product_data.description;
        const description_length = description.length;

        if (this.truncate && description_length > this.truncate) {          
          return `${description.substring(0, this.truncate)}&hellip;</p>`;          
        }

        return product_data.description;
      }

      return null;
    },
  },
});