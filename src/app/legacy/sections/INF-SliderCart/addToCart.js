import $ from 'jquery';
import refreshCart from './refreshCart';
import toastr from 'infinite/scripts/vendor/toastr';
import handleError from './handleError';
import cartCookies from './cartCookies';
import store from 'infinite/src/app/store';

export default ($form) => {
  store.dispatch.Cart.setLoading(true);
  
  $.ajax({
    url: `/cart/add.js`,
    dataType: `json`,
    type: `post`,
    data: $form.serialize(),
    success: () => {
      refreshCart();
      store.dispatch.Cart.setLoading(false);
    },
    error: (XHR) => {
      // handleError(XHR);
      if (window.toastr && window.toastr.error) {
        window.toastr.error(XHR.responseJSON.description);
      }
      store.dispatch.Cart.setLoading(false);
    },
  });

  cartCookies($form);
};