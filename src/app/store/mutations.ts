import { defineMutations } from 'direct-vuex';
import base_mutations from '@INF/mutations';

export default defineMutations<State>()({
  ...base_mutations,
  addFive (state) {
    state.count = state.count + 5;
  },
});