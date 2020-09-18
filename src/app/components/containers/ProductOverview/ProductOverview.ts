import { ProductOverview } from '@INF/containers/ProductOverview';
import { default_props, default_css_variables } from './ProductOverview.defaults';
import themeEditor from './ProductOverview.themeEditor';
  
export default ProductOverview.extend({
  props: {
    ...default_props,
  },
  computed: {
    cssVariables(): object {
      return {
        ...default_css_variables(this),
        // '--my-custom-css-variable': this.my_custom_prop,
      };
    },
    assessment(): boolean {
      const tags: string[] = this.product_data.tags;
      
      if (tags.length === 0) { return false; }      

      return tags.map((tag) => tag.toLowerCase()).indexOf(`assessment`) > -1;
    },
  },
  methods: {
    ...themeEditor,
  },
});