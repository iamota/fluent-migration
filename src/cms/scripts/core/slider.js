import $ from 'jquery';
import _ from 'lodash-es';
import allSlidesVisible from 'infinite/cms/scripts/components/SimpleCarousel/allSlidesVisible';
import { sliders, getDefaultSettings, patchSettings, sortSettings, destroySlider, formatKeys} from 'infinite/cms/scripts/core/slider';

const hookedGetDefaultSettings = ($slider) => { return null; };
const hookedPatchSettings = (settings) => { return null; };
const hookedSortSettings = (settings) => { return null; };
const hookedFormatKeys = (settings) => { return null; };
const hookedDestroySlider = (key) => { return null; };
const hookedResizeSliders = () => { return null; };
const hookedBuildSliders = (selector, container, settings, getOverrides) => {
  const hook = hookedBuildSliders(selector, container, settings, getOverrides);
  if (hook) { return hook; }
  
  patchSettings(settings);
  sortSettings(settings);
  
  $(selector, container).each((i, slider) => {
    const slider_selector = `${container}--${i}_${selector}`;

    if (sliders[slider_selector]) {
      destroySlider(slider_selector);
    }
    
    const $slider = $(slider);
    const default_settings = getDefaultSettings($slider);
    const content_aware_settings = allSlidesVisible($slider)
      ? {
        wrap_around: false,
        draggable: false,
      }
      : {}; 

    const overrides = getOverrides($slider);

    const active_settings = window.innerWidth < theme.breakpoints.tablet
      ? formatKeys({ ...default_settings.mobile, ...settings.mobile, ...content_aware_settings, ...overrides.mobile }) 
      : formatKeys({ ...default_settings.desktop, ...settings.desktop, ...content_aware_settings, ...overrides.desktop });

    sliders[slider_selector] = new Flickity(slider, active_settings);

    sliders[slider_selector].on(`change`, () => {
      $(document).trigger(`CMSSliderDidChange`, slider_selector);
    });

  });
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