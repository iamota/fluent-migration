import Vue from 'vue';

interface KitData {
  gradient_class: string;
  image_src_desktop: string | unknown;
  image_src_mobile: string | unknown;
  shopify_product_handle: string;
  product: GenericObject;
}
  
export default Vue.extend({
  props: {
    collection_handle: { type: String },
  },
  data(): GenericObject {
    return {
      image: `https://cdn.shopify.com/s/files/1/0399/0008/6429/files/Little_girl142019450_copy.png?v=1599676697`,
      gradient_class: `product-color-cold-flu-severe-day`,
      shopify_product_handle: ``,
      cta_link: `/pages/quiz`,
      description: `Get a personalized <strong>Symptoms Relief Kit</strong> made just for your symptoms.`,
      title: `Not feeling well?`,
      product: {},
    };
  },  
  computed: {
    overlay_class(): GenericObject {
      return {
        [`${this.gradient_class}`]: true,
      };
    },
    container_class(): GenericObject {
      return {
        'ProductRecommendation--kit': this.shopify_product_handle !== ``,
      };
    },
    recommended(): boolean {
      return this.shopify_product_handle !== ``;
    },
  },
  mounted(): void {
    this.checkKit();
  },
  methods: {
    checkKit(): void {
      if (typeof Storage === `undefined`) { return; }
      const kit_information = localStorage.getItem(`kit_data`) as string;

      if (!kit_information) { return; }

      const kit_data: KitData = JSON.parse(kit_information);

      this.gradient_class = kit_data.gradient_class;
      this.shopify_product_handle = kit_data.shopify_product_handle;
      this.cta_link = `/products/${this.shopify_product_handle}`;
      this.title = `Your symptom relief kit is ready!`;
      this.description = `Based on your symptoms, 
      we’ve set you up with the <strong>${kit_data.product.title}</strong>`;
      this.product = kit_data.product;
    },
  },
});