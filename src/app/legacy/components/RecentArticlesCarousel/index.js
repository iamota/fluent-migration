import $ from 'jquery';
import Flickity from 'flickity';

const carousels = [];

export default () => {
  const $carouselElements = $('[data-recent-articles-carousel]');

  if ($carouselElements.length === 0) { return; }

  $carouselElements.each((i, el) => {
    const $el = $(el);

    const carousel = new Flickity($el[0], {
      contain: true,
      groupCells: false,
      cellAlign: `left`,
      prevNextButtons: true,
      pageDots: true,
      wrapAround: true,
    });

    carousels.push(carousel);

    window.triggerResize();
  });
};


