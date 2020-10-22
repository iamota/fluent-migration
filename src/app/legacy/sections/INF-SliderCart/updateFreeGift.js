import $ from 'jquery';
import _ from 'lodash-es';
import { formatMoney } from '@shopify/theme-currency';
import refreshCart from './refreshCart';
import handleError from './handleError';

export default function(cart) {
  const $slider_cart = $('[data-cart]');

  if ($slider_cart.data('giftEnabled') === false) {
    return;
  }

  const gift_variant = $slider_cart.data('giftVariant');
  const threshold = $slider_cart.data('giftThreshold') * 100;
  const remaining = threshold - cart.total_price;
  let remaining_html = formatMoney(remaining, theme.moneyFormat);
  
  if (window.theme.show_currency) {
    remaining_html += ` <span class="FreeGift__currency">${window.theme.currency}</span>`;
  }

  $('[data-gift-remaining]').html(remaining_html);
  
  if (remaining > 0) {
    $('[data-gift]').removeClass('FreeGift--qualified');
    return;
  }
  
  $('[data-gift]').addClass('FreeGift--qualified');

  const gift_in_cart = _.find(cart.items, { id: gift_variant });
  
  if (!gift_in_cart) {
    // They need the gift added.  They are above the threshold but it's not in their cart yet
    $.ajax({
      url: '/cart/add.js',
      dataType: 'json',
      type: 'post',
      data: { quantity: 1, id: gift_variant },
      success: () => {
        refreshCart();
      },
      error: (XHR) => {
        handleError(XHR);
      },
    });
  }

}