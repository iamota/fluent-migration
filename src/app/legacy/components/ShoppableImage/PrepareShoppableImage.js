export default () => {
  $('[data-shoppable-image]').each((i, container) => {
    const $container = $(container);
    $(document).trigger('shoppableImageWillLoad', container);

    $container.append(`
      <div class="ShoppableImage__Button">
        <span>Shop This</span>
      </div>
      `);
  });
};