import $ from 'jquery';

export default (product_url) => {
  const $modal = $('#ShoppableImage');

  $modal.addClass('ShoppableImage__modal--loading');
  
  $.get(product_url, (response) => {
    const $product = $('<div />').html(response).find('[data-shoppable-container]');

    // Remove any special animation classes and replace them with a simple fade in
    $product.find('.Animate, .AnimateOnLoad').attr('class', (i, class_name) => {
      return class_name.replace(/(^|\s)Animate--\S+/g, '');
    });
    $product.find('.Animate, .AnimateOnLoad').addClass('Animate--fade-in');
  });
};