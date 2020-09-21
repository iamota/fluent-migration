import $ from 'jquery';
import { formatMoney } from '@shopify/theme-currency';
import generateHTML from './generateHTML';
import openCart from './openCart';
import { status } from './plusMinusQuantity';

const updateCartView = (cart, in_background) => {
  if (status.debouncing) { return; }

  if (!in_background) {
    $(document).trigger('cartWillUpdate', cart);
  }

  const cart_count_label = cart.item_count >= 3 
    ? window.theme.strings.cartCount.other 
    : window.theme.strings.cartCount[cart.item_count];
    
  $('[data-cart-count-label]').text(cart_count_label);
  $('[data-cart-count]').attr('data-cart-count', cart.item_count).text(cart.item_count);
  $('[data-cart-total]').text(formatMoney(cart.total_price, theme.moneyFormat));
  $('[data-cart-products]').empty();

  if (cart.item_count === 0) {
    $('[data-cart]').addClass('SliderCart--empty');
  } else {
    $('[data-cart]').removeClass('SliderCart--empty');
    generateHTML(cart);
  }

  window.cart = cart;

  if (!in_background) {
    openCart();
    $(document).trigger('cartDidUpdate', cart);
  }
};

export default function(cart, in_background = false) {
  if (cart) {
    return updateCartView(cart, in_background);
  }
  
  return $.getJSON('/cart.js', (json) => {
    updateCartView(json, in_background);
  });
}