import { ProductHeading } from '@INF/groups/ProductHeading/';
  
interface KitData {
  gradient_class: string;
  image_src_desktop: string | unknown;
  image_src_mobile: string | unknown;
  shopify_product_handle: string;
  product: GenericObject;
}

export default ProductHeading.extend({
  computed: {
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
});