import { defineModule } from 'direct-vuex';
import { moduleActionContext, moduleGetterContext } from '@INF/store';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const Quiz = defineModule({ namespaced: true, state, getters, mutations, actions });
const QuizGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, Quiz);
const QuizActionContext = (context: any) => moduleActionContext(context, Quiz);

export {
  Quiz,
  QuizGetterContext,
  QuizActionContext,
};