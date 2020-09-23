import $ from 'jquery';
import { disableBodyScroll } from 'body-scroll-lock';
import { setTempFocus } from 'infinite/scripts/core/INF-setTempFocus';
import closeAllMenus from 'infinite/scripts/core/INF-closeAllMenus';
import adjustPositioning from './adjustPositioning';
import Upsell from '../../components/Upsell/';

export default function(toggle) {
  // Is the cart already open?
  if ($('[data-state]').hasClass('State--cart-open')) {
    // Are we toggling it closed?
    if (toggle) {
      closeAllMenus();
      return $(document).trigger('scroll');
    }
    return false;
  }

  // Open it up
  $(document).trigger('cartWillOpen');
  closeAllMenus();
  adjustPositioning();
  disableBodyScroll($('[data-cart]')[0]);
  let $behind_modal = $('main');

  if (window.theme.breakpoints.current === 'laptop' || window.theme.breakpoints.current === 'desktop') {
    $behind_modal = $('main, [data-header]');
  }

  $behind_modal.attr('aria-hidden', true).attr('tabindex', -1).attr('data-prevent-tab', true);
  $('[data-cart]').attr('aria-hidden', false).removeAttr('data-prevent-tab');
  setTempFocus($('[data-cart]'));
  window.focusedContainer = $('[data-cart]').get(0);
  $('[data-state]').addClass('State--cart-open');
  const $sticky_checkout = $('[data-sticky-checkout]');
  setTimeout(() => {
    $sticky_checkout.css({
      top: 0,
    });
  }, 10);
  setTimeout(() => {
    // Hextom FSB is 44 px tall; Set 'top' to fix Safari's 'interact' bug
    $sticky_checkout.css({
      top: 44 + 32,
    });
  }, 50);
  $(document).trigger('scroll');  
  setTimeout(() => Upsell(), 100);
  return $(document).trigger('cartDidOpen');
}