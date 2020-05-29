import { defineActions } from 'direct-vuex';
import base_actions from '@INF/modules/Cart/actions';
import { CartActionContext } from './';

export default defineActions({
  ...base_actions,
  toggle (context): void {
    const { commit } = CartActionContext(context);
    console.log(`Forked toggle action sent!`);
    return commit.toggle();
  },
});