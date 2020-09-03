import { defineActions } from 'direct-vuex';
import $ from 'jquery';

export default defineActions({
  nextStep({ commit }, step): void {
    try {
      window.ga(`send`, `event`, `Quiz`, `Changing Step`, `Step`, step);
    } catch (error) {
      console.error(`Ga error: `, error);
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: `smooth` });
    }, 1);
    commit(`setStep`, step);
  },
  back({ commit }, step): void {
    commit(`setStep`, step);
  },
  getProduct({ commit }, handle): Promise<GenericObject> {
    return new Promise(async (resolve, reject) => {
      const result = await Promise.resolve($.get(`/products/${handle}?view=ajax`));
      const $product_data = $(`<div />`).html(result).find(`[data-vue-props]`);
      const data = JSON.parse($product_data.text());

      if (!data) { 
        reject(Error(`unable to fine product data`));
        return; 
      }

      resolve(data.product_data);
    });
  },
});