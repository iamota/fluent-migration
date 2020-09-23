import $ from 'jquery';

export default function() {
  const $slider_cart = $('[data-cart]');
  const $sticky_checkout_wrapper = $('[data-sticky-checkout-wrapper]');
  const $header = $('[data-header]');
  const $pre_header = $('[data-pre-header]');
  // This is seriously the coolest scrollbar detection ever...so simple
  const scrollbar_width = window.innerWidth - document.body.offsetWidth;
  let height_above = 0;
  
  if (theme.breakpoints.current === 'mobile' || theme.breakpoints.current === 'tablet') {
    if ($('[data-header]').offset().top - $(window).scrollTop() >= 0) {
      // Mobile and header isn't hidden via headroom
      height_above = $header.height();
    }
  } else if ($pre_header.height() > 0 && $pre_header.css('transform') === 'none' && !$pre_header.hasClass('PreHeader--hide-desktop')) {
    // Desktop with preheader and preheader isn't hidden via headroom
    height_above = $pre_header.height();
  } else if ($header.css('transform') === 'none') {
    // Desktop without preheader and main header isn't hidden via headroom
    height_above = $header.height();
  }
  
  $slider_cart.css('padding-top', height_above);
  $sticky_checkout_wrapper.css('padding-right', 20 + scrollbar_width);
  $pre_header.css('right', scrollbar_width);
  $header.css('right', scrollbar_width);

  /** CRAZY SCROLLBAR
    * After the menu slides out, remove the scrollbar from the page and add it to the slider cart at the same time.
    * Then pad other elements accordingly to replace the space the scrollbar took up.
    * This is extremely tricky, but it removes the jump when the scrollbar goes away.
    * It's also dynamic, as the scrollbar width is calculated above.  If the scrollbar width is 0, the padding is basically doing nothing.
    **/
  // setTimeout(() => {
  //   window.requestAnimationFrame(() => {
  //     $('[data-state]').addClass('State--no-scroll');
  //     $slider_cart.addClass('SliderCart--scroll');
      
  //   });
  // }, 195);
}