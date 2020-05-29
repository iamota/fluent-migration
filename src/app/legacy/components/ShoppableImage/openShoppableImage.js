import $ from 'jquery';
import closeAllMenus from 'infinite/scripts/core/INF-closeAllMenus';

export default ($trigger) => {
  $(document).trigger('shoppableImageWillOpen');

  const $modal = $('[data-shoppable-image-modal]');

  closeAllMenus();

  $trigger.attr('data-shoppable-active', true);
  $trigger.addClass('ShoppableImage__trigger--active');
  $trigger.parent('.ShoppableImage__trigger-parent').addClass('ShoppableImage__trigger-parent--active');
  $('[data-state]').addClass('State--shoppable-image-open');
  $modal.addClass('ShoppableImage__modal--open');
  $modal.addClass('ShoppableImage__modal--loading');
  $modal.find('[data-will-animate]').addClass('Animate').addClass('Animate--slide-up').addClass('Animate--animated');
  
  $(document).trigger('scroll');
  return $(document).trigger('shoppableImageDidOpen');
};