import $ from 'jquery';

export default () => {
  $(document).on('notShoppableClick', () => {
    // if a HeroImageGallery or ImageGallery also changes slides within time limit, this is not a true shoppable click
    window.shoppablePaused = true;

    setTimeout(() => {
      window.shoppablePaused = false;
    }, 10);
  });
};