import $ from 'jquery';
import { keyCodes } from 'infinite/scripts/core/INF-keyCodes';
import closeAllMenus from 'infinite/scripts/core/INF-closeAllMenus';
import addToCart from './addToCart';
import openCart from './openCart';
import refreshCart from './refreshCart';
import updateQuantity from './updateQuantity';
import { plusQuantity, minusQuantity } from './plusMinusQuantity';
import themeEditor from './themeEditor';

const SliderCart = () => {
  // Get the initial cart on load
  refreshCart(null, true);

  // Click the cart toggle and...you guessed it...toggle the cart open or closed
  $(document).on('click keydown', '[data-cart-toggle]', (e) => {
    if (e.keyCode) {
      if (e.keyCode !== keyCodes.enter && e.keyCode !== keyCodes.space) { return; }
      e.preventDefault();
    }

    openCart(true);
  });

  // If someone comes to a page with #cart, open it immediately
  if (window.location.hash === '#cart') {
    $('[data-cart-toggle]').eq(0).trigger('click');
  }

  // may be easier to check all states at once, but could be worse for sending events
  $(document).on('keyup', (e) => {
    if ($('[data-state]').hasClass('State--cart-open') && e.keyCode === keyCodes.esc) {
      closeAllMenus();
    }
  });

  // Readjust position on breakpoint change if cart is open
  $(window).on('breakpointChange', () => {
    if (!$('[data-state]').hasClass('State--cart-open')) {
      return;
    }
    
    // Double click properly recalculates scrollbar where simply using adjustPositioning() would not.
    $('[data-cart-toggle]').eq(0).trigger('click');
    $('[data-cart-toggle]').eq(0).trigger('click');
  });

  // Add to cart form hijacking...this is where the magic happens
  $(document).on('submit', 'form[action^="/cart/add"]', (e) => {
    e.preventDefault();    
    addToCart($(e.currentTarget));
  });

  // Need this again without the dynamic selector to keep Shopify frmo double firing pixels...sigh
  $('form[action^="/cart/add"]').submit((e) => {
    e.preventDefault();
  });

  // Remove button
  $('[data-cart]').on('click keyup', '[data-cart-remove]', (e) => {
    if (e.keyCode) {
      if (e.keyCode !== keyCodes.enter && e.keyCode !== keyCodes.space) { return; }
    }

    updateQuantity($(e.currentTarget).closest('.CartProduct').index(), 0);
  });

  // Change quantity
  $('[data-cart]').on('change', '[name="quantity"]', (e) => {
    updateQuantity($(e.currentTarget).closest('.CartProduct').index(), $(e.currentTarget).val());
  });

  $(document).on('click keyup', '[data-quantity-plus]', (e) => {
    if (e.keyCode) {
      if (e.keyCode !== keyCodes.enter && e.keyCode !== keyCodes.space) { return; }
    }

    plusQuantity(e);
  });
  
  $(document).on('click keyup', '[data-quantity-minus]', (e) => {
    if (e.keyCode) {
      if (e.keyCode !== keyCodes.enter && e.keyCode !== keyCodes.space) { return; }
    }

    minusQuantity(e);
  });

  themeEditor();
};

export {
  SliderCart,
};