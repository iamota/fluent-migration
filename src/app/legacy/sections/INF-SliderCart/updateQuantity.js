import $ from 'jquery';
import refreshCart from './refreshCart';
import handleError from './handleError';

export default function(index, quantity) {
  const updates = [];

  $('[data-cart-products]').children().each((i, product) => {
    if (i === index) {
      updates.push(quantity);
    } else {
      updates.push($(product).find('[name="quantity"]').val());
    }
  });

  $.post({
    url: '/cart/update.js',
    dataType: 'json',
    type: 'post',
    data: { updates },
    success: (cart) => {
      refreshCart(cart);
    },
    error: (XHR) => {
      handleError(XHR);
    },
  });
}