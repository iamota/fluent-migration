import $ from 'jquery';
import { get } from 'lodash-es';
import updateFreeGift from './updateFreeGift';
import { 
  generateImageTag, 
  formatPrice, 
  processSimpleVariables, 
  processOptions, 
  processSKU, 
  processVendor, 
  processDiscountDescription, 
  processQuantities,
} from './helpers';
 
export default function(cart = window.cart) {

  $.each(cart.items, (i, cart_item) => {
    // Deep clone the cart_item so we can make our modifications without affecting the original
    const assessment_item = get(cart_item, `properties.Assessment`, false);
    let item = JSON.parse(JSON.stringify(cart_item));    
    item = generateImageTag(item);
    item = formatPrice(item);

    let html = $('[data-cart-product-template]').html();
    html = processSimpleVariables(item, html);
    html = processOptions(item, html);
    html = processSKU(item, html);
    html = processVendor(item, html);
    html = processDiscountDescription(item, html);
    html = processQuantities(item, html, assessment_item);
    
    $('[data-cart-products]').append(html);
  });

  // New select menus need selectric
  $('[data-cart-products] select').selectric();

  updateFreeGift(cart);
}