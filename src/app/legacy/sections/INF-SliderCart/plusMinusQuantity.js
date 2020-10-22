import $ from 'jquery';
import _ from 'lodash-es';

const status = { debouncing: false };
const quantity_debouncers = {};
const quantities = {};

const plusMinusQuantity = (e, action) => {
  const $quantity = $(e.currentTarget).siblings('[data-quantity-input]');
  const debounce_key = $quantity.data('quantityDebounce');
  let quantity = Number($quantity.val());

  if (action === 'plus') {
    quantity += 1;
  } else {
    quantity -= 1;

    if (quantity < Number($quantity.attr('min'))) {
      quantity = $quantity.attr('min');
    }
  }

  $quantity.val(quantity);

  if (debounce_key) {
    quantities[debounce_key] = quantity;

    if (!quantity_debouncers[debounce_key]) {
      quantity_debouncers[debounce_key] = _.debounce(() => {
        // We set the value again to make sure it doesn't glitch if another AJAX request just completed
        $(`[data-quantity-debounce="${debounce_key}"]`).val(quantities[debounce_key]).trigger('change');
        status.debouncing = false;
      }, 150);
    }

    quantity_debouncers[debounce_key]();
    status.debouncing = true;
  }
};

const plusQuantity = (e) => {
  plusMinusQuantity(e, 'plus');
};

const minusQuantity = (e) => {
  plusMinusQuantity(e, 'minus');
};

export {
  plusQuantity,
  minusQuantity,
  status,
};