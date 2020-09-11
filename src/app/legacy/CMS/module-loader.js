import _ from 'lodash-es';
import * as CMS from 'infinite/cms/loader';
// import Custom modules below. Add render and pre-render functions to arrays.
import { CMSValuePropsPreRender, CMSValueProps } from './ValueProps';

const preRenderers = [CMSValuePropsPreRender];
const renderers = [CMSValueProps];

const initModules = () => {
  _.each(CMS, (func) => {
    if (func.name.indexOf('PreRender') > -1) {
      preRenderers.push(func);
    } else {
      renderers.push(func);
    }
  });
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