import $ from 'jquery';
import _ from 'lodash-es';
import allSlidesVisible from 'infinite/cms/scripts/components/SimpleCarousel/allSlidesVisible';
import { sliders } from 'infinite/cms/scripts/core/slider';

const hookedGetDefaultSettings = ($slider) => {
  return {
    desktop: {
      initial_index: 0,
      adaptive_height: false,
      contain: true,
      images_loaded: true,
      drag_threshold: window.theme.flickity.dragThreshold,
      arrow_shape: window.flickityArrowShape,
      prev_next_buttons: true,
      page_dots: true,
      wrap_around: true,
      cell_align: `center`,
      draggable: true,
      on: {
        ready: () => {
          $slider.addClass(`AnimateOnLoad--loaded`);
        },
      },
    },
    mobile: {
      initial_index: 0,
      adaptive_height: false,
      contain: true,
      images_loaded: true,
      drag_threshold: window.theme.flickity.dragThreshold,
      arrow_shape: window.flickityArrowShape,
      prev_next_buttons: true,
      page_dots: true,
      wrap_around: true,
      cell_align: `center`,
      draggable: true,
      on: {
        ready: () => {
          $slider.addClass(`AnimateOnLoad--loaded`);
        },
      },
    },
  };
};
const hookedPatchSettings = (settings) => {
  const map = {
    navigation_arrows: `prev_next_buttons`,
    'navigation_arrows--mobile': `prev_next_buttons--mobile`,
  };

  _.each(map, (new_key, old_key) => {
    if (settings.hasOwnProperty(new_key) || !settings.hasOwnProperty(old_key)) { return; }

    settings[new_key] = settings[old_key];
    delete settings[old_key];
  });
};
const hookedSortSettings = (settings) => {
  const new_mobile_settings = {};
  const new_desktop_settings = {};

  _.each(settings, (value, key) => {
    if (key === `desktop` || key === `mobile`) { return; }

    if (key.indexOf(`--mobile`) > -1) {
      const new_key = key.split(`--mobile`)[0];
      new_mobile_settings[new_key] = value;
    } else {
      new_desktop_settings[key] = value;
    }
  });

  settings.mobile = settings.mobile ? { ...settings.mobile, ...new_mobile_settings } : new_mobile_settings;
  settings.desktop = settings.desktop ? { ...settings.desktop, ...new_desktop_settings } : new_desktop_settings;
};
const hookedFormatKeys = (settings) => {
  return _.mapKeys(settings, (value, key) => {
    return _.camelCase(key);
  });
};
const hookedDestroySlider = (key) => {
  if (!sliders[key]) { return false; }
  
  sliders[key].destroy();
  delete sliders[key];
};
const hookedResizeSliders = () => { return null; };
const hookedBuildSliders = (selector, container, settings, getOverrides) => {
  hookedPatchSettings(settings);
  hookedSortSettings(settings);
  
  $(selector, container).each((i, slider) => {
    const slider_selector = `${container}--${i}_${selector}`;

    if (sliders[slider_selector]) {
      hookedDestroySlider(slider_selector);
    }
    
    const $slider = $(slider);
    const default_settings = hookedGetDefaultSettings($slider);
    const content_aware_settings = allSlidesVisible($slider)
      ? {
        wrap_around: false,
        draggable: false,
      }
      : {}; 

    const overrides = getOverrides($slider);

    const active_settings = window.innerWidth < theme.breakpoints.tablet
      ? hookedFormatKeys({ ...default_settings.mobile, ...settings.mobile, ...content_aware_settings, ...overrides.mobile }) 
      : hookedFormatKeys({ ...default_settings.desktop, ...settings.desktop, ...content_aware_settings, ...overrides.desktop });

    sliders[slider_selector] = new Flickity(slider, active_settings);

    sliders[slider_selector].on(`change`, () => {
      $(document).trigger(`CMSSliderDidChange`, slider_selector);
    });

  });
  return true;
};
const hookedInitSliders = (...args) => { return null; };

export {
  hookedGetDefaultSettings,
  hookedPatchSettings,
  hookedSortSettings,
  hookedFormatKeys,
  hookedDestroySlider,
  hookedResizeSliders,
  hookedBuildSliders,
  hookedInitSliders,
};