import _ from 'lodash-es';
import Cookies from 'js-cookie';

export default ($form) => {
  let variant_id = $form.find('[name="id"]').val();
  let product_json = $form.closest('[data-section-type="product"]').find('[data-product-json]').html();
  
  if (!variant_id || !product_json) { return; }

  variant_id = Number(variant_id);
  product_json = JSON.parse(product_json);
  
  const variant = _.find(product_json.variants, { id: variant_id });

  let cart_items = Cookies.get('cart_items');

  if (cart_items) {
    cart_items = JSON.parse(cart_items);
  } else {
    cart_items = {};
  }

  cart_items[variant_id] = {
    compare_at_price: variant ? variant.compare_at_price : 0,
    product_options: product_json.options,
    barcode: variant ? variant.barcode : '',
  };

  Cookies.set('cart_items', cart_items);
};