import _ from 'lodash-es';
import { PreRenderers, Renderers } from 'infinite/cms/loader';
// import Custom modules below. Add render and pre-render functions to arrays.

const preRenderers = [];
const renderers = [];

const initModules = () => {
  _.each(PreRenderers, (preRenderer) => { preRenderers.push(preRenderer); });
  _.each(Renderers, (renderer) => { renderers.push(renderer); });
};

const runPreRenderers = () => {
  _.each(preRenderers, (pre_renderer) => {
    pre_renderer();
  });
};
const runRenderers = () => {
  _.each(renderers, (renderer) => {
    renderer();
  });
};

export {
  initModules,
  runPreRenderers,
  runRenderers,
};