import Vue from 'vue';
  
export default Vue.extend({
  data(): GenericObject {
    return {
      image: `https://cdn.shopify.com/s/files/1/0399/0008/6429/files/Little_girl142019450_copy.png?v=1599676697`,
      gradient_class: `product-color-cold-flu-severe-day`,
      shopify_product_handle: ``,
      cta_text: `Take the Quiz`,
      cta_link: `/pages/quiz`,
      description: `Get a personalized <strong>Symptoms Relief Kit</strong> made just for your symptoms.`,
      title: `Not feeling well?`,
    };
  },
  computed: {
    cssClass(): GenericObject {
      return {
        [`${this.gradient_class}`]: true,
      };
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

      const kit_data = JSON.parse(kit_information);

      this.gradient_class = kit_data.gradient_class;
      this.shopify_product_handle = kit_data.shopify_product_handle;
      this.cta_text = `Shop Now`;
      this.cta_link = `/products/${this.shopify_product_handle}`;
      this.title = `Your recommended symptom relief kit is ready!`;
      this.description = `Based on your symptoms, 
      we’ve set you up with the <strong>Adult Flu Relief Pack.</strong>`;
    },
  },
});