import { defineModule } from 'direct-vuex';
import { moduleActionContext, moduleGetterContext } from '@INF/store';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const Cart = defineModule({ namespaced: true, state, getters, mutations, actions });
const CartGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, Cart);
const CartActionContext = (context: any) => moduleActionContext(context, Cart);

export {
  Cart,
  CartGetterContext,
  CartActionContext,
};