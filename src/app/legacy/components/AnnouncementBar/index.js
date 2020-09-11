export default () => {
  if ($('.Announcement').length === 0) { return; }

  $('.Announcement').each((i, announcement) => {
    const announcement_container_height = $(announcement).height();
    const announcement_mobile_height = $(announcement).find('.Announcement__mobile').height();
  
    let scrolling = 0;
    const speed = 8000;
    let length_text = 250;

    const scrollLeft = (pixels, timeout, animation_time) => {
      window.setTimeout(() => {
        $(announcement).find('.Announcement__mobile').animate({left: pixels}, animation_time, 'linear');
        if (scrolling === 0) {
          scrolling = 1;
          scrollLeft(`${$(announcement).width()}px`, 0, 0);
        } else if (scrolling === 1) {
          scrolling = 0;
          scrollLeft(`-${length_text}px`, 0, 2 * speed);
        } else {
          scrolling = 0;
          scrollLeft(`-${length_text}px`, speed, speed);
        }
      }, timeout);
    };
    
    if (announcement_mobile_height > announcement_container_height + 5) {
      $(announcement).find('.Announcement__mobile').css('white-space', 'nowrap');
      length_text = $(announcement).find('.Announcement__mobile').width() + 10;      
      $(announcement).find('.Announcement__mobile').css('width', `${length_text}px`);
      $(announcement).find('.Announcement__mobile').css('position', 'absolute');
      scrollLeft(`-${length_text}px`, 0, speed);
    } else {
      $(announcement).find('.Announcement__mobile').css('position', 'relative');
    }
  });
};