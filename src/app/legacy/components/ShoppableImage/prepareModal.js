import $ from 'jquery';
import closeAllMenus from 'infinite/scripts/core/INF-closeAllMenus';
import initCarousels from 'infinite/cms/scripts/components/SimpleCarousel/initCarousels';
import positionModal from './positionModal';
import openShoppableImage from './openShoppableImage';

export default ($trigger, items_data, img_src) => {

  const $shoppable_modal = $('[data-shoppable-image-modal]');

  $shoppable_modal.find('[data-modal-content]').css({
    backgroundImage: `url(${img_src})`,
  });

  const shoppable_images_url = `/pages/shoppable/${new Date().getTime()}/?products=${items_data}&cache=false`;
  positionModal($trigger);
  openShoppableImage($trigger);

  $.get(shoppable_images_url, (html) => {

    const $content = $('<div />').html(html).find('[data-products-content]');

    if ($content.find('[data-product-tile]').length === 0) { 
      closeAllMenus();
      return; 
    }

    $shoppable_modal.find('[data-products-content]').html('').append($content);
    // positionModal($trigger);
    initCarousels('[data-shoppable-image-modal]');
    // openShoppableImage($trigger);
    window.setTimeout(() => {
      $('[data-shoppable-image-modal]').removeClass('ShoppableImage__modal--loading');
    }, 1000);
  });
};