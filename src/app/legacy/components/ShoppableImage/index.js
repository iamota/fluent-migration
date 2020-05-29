import $ from 'jquery';
import _ from 'lodash-es';
import prepareModal from './prepareModal';
import positionModal from './positionModal';
import handleShoppablePause from './handleShoppablePause';
import initCarousels from 'infinite/cms/scripts/components/SimpleCarousel/initCarousels';
// import getProduct from './getProduct';
import PrepareShoppableImages from './PrepareShoppableImage';
import { standardizeHeights } from 'infinite/scripts/core/INF-gridAlignment';

const child_selectors = [
  '[data-product-tile-image]',
  '[data-product-tile-title]',
  '[data-product-tile-price]',
];

export default () => {
  handleShoppablePause();
  PrepareShoppableImages();

  $(document).on('click keyup', '[data-shoppable-image]', (e) => {

    e.preventDefault();
    const $shoppableTrigger = $(e.currentTarget);
    const items_data = $shoppableTrigger.data('shoppableImage');
    const img_src = $shoppableTrigger.find('[data-shoppable-source-image]').attr('src');

    if (!img_src || !items_data) { return; }

    if (!window.shoppablePaused) {
      prepareModal($shoppableTrigger, items_data, img_src);
    }
  });

  $(window).on('resize', () => {
    if (!$('[data-state]').hasClass('State--shoppable-image-open')) { return; }
    positionModal();
    _.debounce(() => {
      const $grid_item_selector = $('[data-product-tile]', '[data-shoppable-image-modal]');

      initCarousels('[data-shoppable-image-modal]');
      standardizeHeights($grid_item_selector, child_selectors);
    }, 100, { maxWait: 100 })();
  });

  let shoppable_is_closing = false;

  $(document).on('menusWillClose', () => {
    shoppable_is_closing = $('#ShoppableImage').hasClass('ShoppableImage__modal--open');

    $('[data-shoppable-image-modal]').removeClass('ShoppableImage__modal--open');
    $('.ShoppableImage__trigger--active').removeClass('ShoppableImage__trigger--active');
    $('.ShoppableImage__trigger-parent--active').removeClass('ShoppableImage__trigger-parent--active');
    $('[data-shoppable-active]').removeAttr('data-shoppable-active');
    $('[data-shoppable-image-modal] [data-bottom-view]').removeClass('ShoppableImage__bottom-view--phase-2');
    $('[data-shoppable-image-modal]').find('[data-will-animate]').removeClass('Animate').removeClass('Animate--slide-up').removeClass('Animate--animated');
    $('[data-shoppable-image-modal]').find('[data-add-to-cart-content]').empty();
    $('[data-state]').removeClass('State--shoppable-image-open');
  });

  $(document).on('menusDidClose', () => {
    if (shoppable_is_closing) {
      setTimeout(() => {
        // Stupid check necessary because we need to check if the modal is closing "for real" and not just faking us out with the closeAllMenus on open.
        if ($('#ShoppableImage').hasClass('ShoppableImage__modal--open') && !$('#ShoppableImage').hasClass('ShoppableImage__modal--loading')) { return; }

        $('#ShoppableImage video').each((i, video) => {
          video.pause();
        });
      }, 10);
    }

    shoppable_is_closing = false;
  });

  $(window).on('scroll', () => {
    if (!$('[data-state]').hasClass('State--shoppable-image-open')) { return; }

    const $modal_content = $('[data-shoppable-image-modal] [data-modal-content]');
    const content_bottom = $modal_content.offset().top + $modal_content.height();
    const scroll_top = $(window).scrollTop();
    const scroll_bottom = scroll_top + $(window).height();

    if (content_bottom < scroll_top || content_bottom > scroll_bottom) {
      $('[data-close-modal]').trigger('click');
    }
  });
};