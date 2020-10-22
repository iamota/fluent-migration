import $ from 'jquery';
import init from './init';

let upsell_carousel = null; 

export default () => { 

  const $container = $(`[data-upsell-container]`);
  if ($container.length === 0) { return; }
  
  if (upsell_carousel) {
    upsell_carousel.destroy();
    $container.removeClass(`Upsell--loaded`);
  }
    
  upsell_carousel = init($container);
  $container.addClass(`Upsell--loaded`);
};