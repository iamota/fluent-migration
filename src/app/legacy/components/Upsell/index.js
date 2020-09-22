import $ from 'jquery';
import init from './init';


export default () => {
  let upsell_carousel = null;

  const $container = $(`[data-upsell-container]`);
  if ($container.length === 0) { return; }
  
  if (upsell_carousel) {
    return;
  }
  console.log(`Upsell init`);
  
  upsell_carousel = init($container);
};