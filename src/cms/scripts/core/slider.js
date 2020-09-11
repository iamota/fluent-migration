import $ from 'jquery';
import _ from 'lodash-es';
import allSlidesVisible from 'infinite/cms/scripts/components/SimpleCarousel/allSlidesVisible';

const hookedGetDefaultSettings = ($slider) => { return null; };
const hookedPatchSettings = (settings) => { return null; };
const hookedSortSettings = (settings) => { return null; };
const hookedFormatKeys = (settings) => { return null; };
const hookedDestroySlider = (key) => { return null; };
const hookedResizeSliders = () => { return null; };
const hookedBuildSliders = (selector, container, settings, getOverrides) => { return null; };
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