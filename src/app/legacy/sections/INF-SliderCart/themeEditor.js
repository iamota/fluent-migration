import $ from 'jquery';
import generateHTML from './generateHTML';

let cart_open = false;

export default function() {
  $(document).on('shopify:section:select', (e) => {
    if ($(`[data-section-id="${e.detail.sectionId}"]`).data('sectionType') !== 'INF-SliderCart') { return; }

    // If it's not already open, open it
    if (!$('[data-state]').hasClass('State--cart-open')) {
      $('[data-cart-toggle]').eq(0).trigger('click');
    }
  });

  $(document).on('shopify:section:deselect', (e) => {
    if ($(`[data-section-id="${e.detail.sectionId}"]`).data('sectionType') !== 'INF-SliderCart') { return; }

    // If it's not already closed, close it
    if ($('[data-state]').hasClass('State--cart-open')) {
      $('[data-cart-toggle]').eq(0).trigger('click');
    }
  });

  $(document).on('shopify:section:load', (e) => {
    if ($(`[data-section-id="${e.detail.sectionId}"]`).data('sectionType') !== 'INF-SliderCart') { return; }

    // If the cart  was open previously, rebuild and reopen it
    if (cart_open) {
      generateHTML(); 
      $('[data-cart-toggle]').eq(0).trigger('click');
      $('[data-cart-toggle]').eq(0).trigger('click');
      
    }  
  });

  $(document).on('shopify:section:unload', (e) => {
    if ($(`[data-section-id="${e.detail.sectionId}"]`).data('sectionType') !== 'INF-SliderCart') { return; }

    cart_open = false;

    // If it's open, record that so we know on "load" above
    if ($('[data-state]').hasClass('State--cart-open')) {
      cart_open = true;
    }
  });
}