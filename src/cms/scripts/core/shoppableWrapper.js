import _ from 'lodash-es';

export default (content, is_bg_image, height) => {
  let shoppable = ``;
  let max_height = ``;
  let background = ``;
  let background_size = ``;
  let background_position = ``;
  // console.log("CONTENT>>>", content);

  if (content.shoppable_image.is_shoppable && (content.shoppable_image.shoppable_products.length > 0)) {
    const shoppable_products = _.map(content.shoppable_image.shoppable_products, (product) => {
      if (product.variant) {
        return `${product.handle}:${product.variant}`;
      }
      return `${product.handle}`;
    });
    shoppable = `data-shoppable-image="${shoppable_products}"`;
  }

  if (height) {
    max_height = is_bg_image 
      ? `height: ${height}px; ` 
      : `max-height: ${height}px; `;
  }

  if (is_bg_image) {
    background = `background-image: url('${content.image}'); `;
    background_size = `background-size: ${content.image_size}; `;
    background_position = `background-position: ${content.image_alignment}; `;
  }

  // intend to have bg_image use a bg on div but has been implemented differently elsewhere and will need to rework

  const html = `
    <div 
      class="ShoppableImage ${is_bg_image ? `ShoppableImage--full` : ``}" 
      style="${max_height}${background}${background_size}${background_position}" 
      ${shoppable}
    >
      <img 
        data-shoppable-source-image 
        class="ShoppableImage__Image" 
        src="${content.image}" 
        alt="${content.alt_text}" 
      />
    </div>
  `;
  return html;
 };