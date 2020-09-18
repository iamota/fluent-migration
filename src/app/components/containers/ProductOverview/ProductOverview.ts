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
  },
  methods: {
    ...themeEditor,
  },
});