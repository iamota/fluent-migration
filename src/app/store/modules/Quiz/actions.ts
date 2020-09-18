import { defineActions } from 'direct-vuex';
import $ from 'jquery';
import store from '@INF/store';
import ProductGetters from '@INF/modules/Products/getters';
import ProductMutations from '@INF/modules/Products/mutations';
import ProductActions from '@INF/modules/Products/actions';
import { SESSION_EXPIRED } from '../../../components/containers/Quiz/config';
import { QuizActionContext } from './';

export default defineActions({
  previousStep(context, step): void {
    const { commit, dispatch } = QuizActionContext(context);  
    commit.setStep(step);
  },
  async nextStep(context, step): Promise<void> {
    const { state, commit, dispatch, getters } = QuizActionContext(context);  
    const response = await dispatch.getAssessment();
    const goToNext = (): void => {
      try {
        window.ga(`send`, `event`, `Quiz`, `Changing Step`, `Step`, step);
      } catch (error) {
        console.error(`Ga error: `, error);
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: `smooth` });
      }, 1);      
      commit.setStep(step);
    };
    
    if (response && response.type === `advance`) {
      if (response.token && state.token === ``) {
        commit.setToken(response.token);
      }
      goToNext();
      return;
    }

    if (response && response.type === `kit`) {
      const { banner_body_html, banner_title_html, banner_subtitle_html, gradient_class, image_src_desktop, image_src_mobile, shopify_product_handle } = response.kit;

      commit.setBody(banner_body_html);
      commit.setTitle(banner_title_html);
      commit.setSubtitle(banner_subtitle_html);
      commit.setProductHandle(response.kit.shopify_product_handle);           
      
      const product_data = await dispatch.getProduct(state.product_handle);
      const selected_variant_id = product_data.variants[0].id;
      const variant_table: GenericObject = {};

      const session_object = {
        gradient_class,
        image_src_desktop,
        image_src_mobile,
        shopify_product_handle,
        product: product_data,
      };
      const localStorageExists = (typeof Storage !== `undefined`);

      if (localStorageExists) {
        localStorage.setItem(`kit_data`, JSON.stringify(session_object));
      }

      commit.setProductId(product_data.id);
      
      for (const variant of product_data.variants) {
        variant_table[variant.id] = variant;
      }

      const product_state = {
        product_data,
        variant_table,
        selected_variant_id,
        quantity: 1,
      };

      // @ts-ignore
      store.original.registerModule([`Products`, product_data.id], { namespaced: true, state: product_state, mutations: ProductMutations, actions: ProductActions, getters: ProductGetters });
      goToNext(); 
      return;     
    }

    if (response && response.type === `breakout`) {
      const redirect_url = response.path;
      const query_string = getters.getAssessmentQueryString;

      if (!redirect_url) { return; }

      window.location.href = `${response.path}?${query_string}`;
    }
  },
  back(context, step): void {
    const { commit } = QuizActionContext(context);  
    
    commit.setStep(step);
  },
  getProduct(context, handle): Promise<GenericObject> {
    const { commit, dispatch } = QuizActionContext(context);  
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
  getAssessment(context): Promise<GenericObject> {
    const { getters, state } = QuizActionContext(context);  
    return new Promise(async (resolve) => {
      try {
        const data = JSON.stringify(getters.getAssessmentInfo);
        const response = await $.ajax({
          type: `POST`,
          url: `https://fluent-api.vcomm.io/assessment?token=${state.token}`,
          contentType: `application/json; charset=utf-8`,
          crossDomain: true,
          xhrFields: {
            withCredentials: true,
          },
          data,
        });
        resolve(response);
      } catch (error) {
        console.log(`ERROR: `, error);
        if (error && error.status === SESSION_EXPIRED) {
          // Session Expired
          window.location.hash = `quiz_session_expired`;
        } else {
          window.location.hash = `quiz_generic`;
        }
      }
    });
  },
});