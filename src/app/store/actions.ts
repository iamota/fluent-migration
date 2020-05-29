import { defineActions } from 'direct-vuex';
import { rootActionContext } from '@INF/store';
import base_actions from '@INF/actions';

export default defineActions({
  ...base_actions,
  // yourActionName (context): void {
  //   const { state, getters, commit } = rootActionContext(context);
  //   return commit.something();
  // },
});