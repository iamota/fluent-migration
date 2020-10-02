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
      image: `https://cdn.shopify.com/s/files/1/0399/0008/6429/files/pcp_disrupter_1_1.jpeg?v=1601600246`,
      image_mobile: `https://cdn.shopify.com/s/files/1/0399/0008/6429/files/pcp_disrupter_1_m.jpeg?v=1601600731`,
      gradient_class: `product-color-cold-flu-severe-day`,
      shopify_product_handle: ``,
      cta_text: `Take Assessment`,
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
    background_image(): string {
      if (window.innerWidth <= window.INF.settings.breakpoints.tablet) {
        return this.image_mobile;
      }

      return this.image;
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
      this.cta_text = `Shop Now`;
      this.cta_link = `/products/${this.shopify_product_handle}`;
      this.title = `Your symptom relief kit is ready!`;
      this.description = `Based on your symptoms, 
      we’ve set you up with the <strong>${kit_data.product.title}</strong>`;
      this.product = kit_data.product;
      this.image = kit_data.image_src_desktop;
      this.image_mobile = kit_data.image_src_mobile;
    },
  },
});