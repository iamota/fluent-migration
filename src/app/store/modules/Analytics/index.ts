import { defineModule } from 'direct-vuex';
import { moduleActionContext, moduleGetterContext } from '@INF/store';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const Analytics = defineModule({ namespaced: true, state, getters, mutations, actions });
const AnalyticsGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, Analytics);
const AnalyticsActionContext = (context: any) => moduleActionContext(context, Analytics);

export {
  Analytics,
  AnalyticsGetterContext,
  AnalyticsActionContext,
};