import _ from 'lodash-es';
import Cookies from 'js-cookie';
import { formatMoney } from '@shopify/theme-currency';
import getSizedImageURL from 'infinite/scripts/core/INF-getSizedImageURL';

const generateImageTag = (item) => {
  // If no image, use Shopify default 'no-image' asset
  if (!item.image) {
    item.image = 'https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif';
  }

  // We do it like this because having an img tag in the template itself will throw a 404 error since it would have an invalid src
  item.formatted_image = `<img src="${getSizedImageURL(item.image, theme.cart.image_size)}" alt="${item.product_title}">`;

  return item;
};

const formatPrice = (item) => {
  item.formatted_price = formatMoney(item.price, theme.moneyFormat);
  item.discounted = '';

  let compare_at_price = null;
  let cart_items = Cookies.get('cart_items');

  if (cart_items) {
    cart_items = JSON.parse(cart_items);
    
    if (cart_items[item.id]) {
      compare_at_price = cart_items[item.id].compare_at_price;
    }
  }

  if (compare_at_price > item.price || item.original_line_price > item.line_price) {
    item.discounted = 'CartProduct__price--discounted';
    item.formatted_price = formatMoney(item.discounted_price, theme.moneyFormat);
  }

  if (window.theme.show_currency) {
    item.formatted_price += ` <span class="CartProduct__currency">${window.theme.currency}</span>`;
  }
  
  if (compare_at_price > item.price) {
    item.formatted_price += ` <s class="CartProduct__price--compare-at">${formatMoney(compare_at_price, theme.moneyFormat)}</s>`;
  } else if (item.original_line_price !== item.line_price) {
    item.formatted_price += ` <s class="CartProduct__price--original">${formatMoney(item.original_price, theme.moneyFormat)}</s>`;
  }

  return item;
};

const processSimpleVariables = (item, html) => {
  // Loop through all the standard item keys and replace our [[ variables ]] with real values
  // Yes, I basically made a mini templating engine...whatever.
  let updated_html = html;

  _.each(item, (value, key) => {
    if (typeof value === 'object') {
      _.each(value, (subvalue, subkey) => {
        updated_html = updated_html.split(`[[ ${key}.${subkey} ]]`).join(subvalue);
      });
    } else {
      updated_html = updated_html.split(`[[ ${key} ]]`).join(value);
    }
  });

  return updated_html;
};

const processOptions = (item, html) => {
  if (html.indexOf('##OPTIONS##') === -1) {
    return html;
  }

  const updated_html = html.split('##OPTIONS##');
  
  if (!item.variant_title) {
    updated_html.splice(1, 1);
  }

  return updated_html.join('');
};

const processSKU = (item, html) => {
  if (html.indexOf('##SKU##') === -1) {
    return html;
  }

  const updated_html = html.split('##SKU##');
  
  if (!item.sku) {
    updated_html.splice(1, 1);
  }

  return updated_html.join('');
};

const processVendor = (item, html) => {
  if (html.indexOf('##VENDOR##') === -1) {
    return html;
  }

  const updated_html = html.split('##VENDOR##');
  
  if (!item.vendor) {
    updated_html.splice(1, 1);
  }

  return updated_html.join('');
};

const processDiscountDescription = (item, html) => {
  if (html.indexOf('##DISCOUNT_DESCRIPTION##') === -1) {
    return html;
  }

  const updated_html = html.split('##DISCOUNT_DESCRIPTION##');

  if (item.discounts.length === 0) {
    updated_html.splice(1, 1);
  } else {
    // Use the last discount in the array rather than the first...this tends to be the one that is most important.
    updated_html[1] = updated_html[1].split('[[ discount_description ]]').join(item.discounts[(item.discounts.length - 1)].title);
  }

  return updated_html.join('');
};

const processQuantities = (item, html, disabled = false) => {
  if (html.indexOf('##QUANTITIES##') === -1) {
    return html;
  }
  
  if (disabled) {    
    const disabled_html = html.split(`##QUANTITY##`);
    disabled_html[1] = ``;
    return disabled_html.join(``);
  }
  
  const updated_html = html.replaceAll(`##QUANTITY##`, ``).split('##QUANTITIES##');
  let quantities;
  let max_quantity = 10;

  
  if (max_quantity < item.quantity) {
    max_quantity = item.quantity;
  }

  for (let quantity_index = 1; quantity_index <= max_quantity; quantity_index++) {
    let selected = '';

    if (quantity_index === item.quantity) {
      selected = 'selected';
    }

    quantities += updated_html[1].split('[[ quantity_index ]]').join(quantity_index).split('selected=""').join(selected);
  }

  updated_html[1] = quantities;

  return updated_html.join('');
};

export {
  generateImageTag,
  formatPrice,
  processSimpleVariables,
  processOptions,
  processSKU,
  processVendor,
  processDiscountDescription,
  processQuantities,
};