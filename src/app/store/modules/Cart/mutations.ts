import { defineMutations } from 'direct-vuex';
import base_mutations from '@INF/modules/Cart/mutations';

export default defineMutations<Cart.State>()({
  ...base_mutations,
  toggle (state) {
    // Not really a toggle anymore
    return state.test = true;
  },
});