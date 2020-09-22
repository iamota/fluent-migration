import { defineGetters } from 'direct-vuex';
import { rootGetterContext } from '@INF/store';
import base_getters from '@INF/getters';

export default defineGetters<State>()({
  ...base_getters,
  // simpleGetter (state) {
  //   return state.something; // local root state only
  // },
  // complexGetter (...args: any) {
  //   const { state } = rootGetterContext(args);
  //   state.ModuleName.something; // entire state, including modules
  // }, 
}); 