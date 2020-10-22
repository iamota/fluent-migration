import themeEditor from 'infinite/cms/scripts/vendor/shopify/themeEditor';
import { initHook } from 'infinite/cms/scripts/core/CMS-Hooks';
import { render } from './init';

const module_name = `ValueProps`;

const CMSValuePropsPreRender = () => {
  initHook([], module_name, true);
};

const CMSValueProps = () => {
  render(module_name);
  themeEditor(module_name, render);
};

export {
  CMSValuePropsPreRender,
  CMSValueProps,
};