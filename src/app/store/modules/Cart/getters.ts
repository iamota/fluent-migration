import { defineGetters } from 'direct-vuex';
import base_getters from '@INF/modules/Cart/getters';
import { CartGetterContext } from './';

export default defineGetters<Cart.State>()({
  ...base_getters,
  displayedToggle (state) {
    return state.test ? `1` : `0`;
  },
});