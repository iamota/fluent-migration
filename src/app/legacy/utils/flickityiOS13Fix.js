import $ from 'jquery';
import _ from 'lodash-es';

let startX = 0;

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  if (e.touches.length > 1) { return; }

  if (Math.abs(e.touches[0].clientX - startX) > 5 && e.cancelable) {
    e.preventDefault();
  }
};

const initEventListeners = _.debounce(() => {
  $('.flickity-enabled').each((i, item) => {
    item.removeEventListener('touchstart', handleTouchStart);
    item.removeEventListener('touchmove', handleTouchMove);

    item.addEventListener('touchstart', handleTouchStart);
    item.addEventListener('touchmove', handleTouchMove);
  });
}, 500);

export default () => {
  initEventListeners();

  $(document).on('carouselDidInit', initEventListeners);
};
