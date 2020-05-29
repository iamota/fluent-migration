import $ from 'jquery';
import getOffset from '../../core/getOffset';

export default ($trigger = $('[data-shoppable][data-shoppable-active]')) => {    
  const $shoppable_modal = $('[data-shoppable-image-modal]');

  $shoppable_modal.find('[data-modal-content]').css({
    width: $trigger.innerWidth(),
    height: $trigger.innerHeight(),
    left: getOffset($trigger[0]).left,
    top: getOffset($trigger[0]).top,
  });

  if ($trigger.innerWidth() < 540) {
    $shoppable_modal.removeClass('ShoppableImage__modal--desktop-like');
    $shoppable_modal.addClass('ShoppableImage__modal--mobile-like');
  } else {
    $shoppable_modal.removeClass('ShoppableImage__modal--mobile-like');
    $shoppable_modal.addClass('ShoppableImage__modal--desktop-like');
  }
};