/* eslint-disable id-length */
import $ from 'jquery';
import _ from 'lodash-es';
import Flickity from 'flickity';
import 'flickity-imagesloaded';
import { formatMoney } from '@shopify/theme-currency';

import addToCart from '../../sections/INF-SliderCart/addToCart';

export default ($container) => {
  let carousel = null;

  const handleCarousel = () => {
    const $upsell_list = $('[data-upsell-items]', $container);

    if ($('[data-product-tile]', $upsell_list).length > 0) {
      // Flickity the items!
      carousel = new Flickity($upsell_list[0], {
        wrapAround: true,
        pageDots: false,
        dragThreshold: window.theme.flickity.dragThreshold,
        adaptiveHeight: false,
        contain: true,
        imagesLoaded: true,
        draggable: true,
      });
    }
  };

  // Run selectric on upsell item option selectors
  // $('[data-upsell-item]', $container).each((i, item) => {
  //   const $item = $(item);
  //   const $variant_selector = $('[data-product-state="size"]', item);
  //   const $variant_list = $('[data-product-state="size"] option', $item);
  //   const type = $('[data-upsell-product-type]', $item).val();

  //   $variant_list.each((j, option) => {
  //     const $option = $(option);
  //     const match = type === 'one-time' ? '|' : '/';
  //     if ($option.val().indexOf(match) > -1) {
  //       $option.attr('disabled', '');
  //     }
  //   });
    
  //   $('[data-product-state="size"]', $item).on('change', (e) => {
  //     lookupVariant($(e.currentTarget).val(), $item, type);
  //   });
    
  //   const $filtered_options = $variant_list.filter((i, option) => $(option).attr('disabled') !== 'disabled');
  //   const first_valid_value = $filtered_options.first().val();
    
  //   $variant_selector.val(first_valid_value).trigger('change');
  //   $('[data-upsell-option-selector]').selectric();
  // });
  handleCarousel();
  
  $container.off('submit', 'form[action="/cart/add"]');
  $container.on('submit', 'form[action="/cart/add"]', (e) => {
    e.preventDefault();
    addToCart($(e.currentTarget));
  });
  
  return carousel;
};