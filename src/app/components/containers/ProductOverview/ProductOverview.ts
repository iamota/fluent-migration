import { ProductOverview } from '@INF/containers/ProductOverview';
import { default_props, default_css_variables } from './ProductOverview.defaults';
import themeEditor from './ProductOverview.themeEditor';
  
interface KitData {
  gradient_class: string;
  image_src_desktop: string | unknown;
  image_src_mobile: string | unknown;
  shopify_product_handle: string;
  product: GenericObject;
}

export default ProductOverview.extend({
  props: {
    ...default_props,
    assessment_text_title: { type: String },
    assessment_text_description: { type: String },
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
    authorized(): boolean {
      const kit_information = localStorage.getItem(`kit_data`) as string;
      const kit_data: KitData = JSON.parse(kit_information);
      return this.assessment ? this.product_data.handle === kit_data.shopify_product_handle : true;
    },
  },
  methods: {
    ...themeEditor,
  },
});