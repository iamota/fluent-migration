import 'selectric';
import 'infinite';
import $ from 'jquery';
import _ from 'lodash-es';
import { cookiesEnabled } from '@shopify/theme-cart';
import { wrapTable, wrapIframe } from '@shopify/theme-rte';

import sections from '@shopify/theme-sections';
import Flickity from 'infinite/scripts/vendor/flickity--aria-labeled';
import 'flickity-imagesloaded';
import 'flickity-as-nav-for';
import '../sections/product';

import * as Infinite from 'infinite/scripts';

import { hooks } from 'infinite/cms/scripts/core/CMS-Hooks';
import SimpleCarousel from 'infinite/cms/scripts/components/SimpleCarousel/index';
import { initModules, runPreRenderers, runRenderers } from '../CMS/module-loader';
import VerticalLineHook from '../CMS/Hooks/VerticalLineHook';
import HeadingContentHook from '../CMS/Hooks/HeadingContentHook';
import PodsContentHook from '../CMS/Hooks/PodsContentHook';

import RteVideo from '../components/rte-video';
import ShoppableImage from '../components/ShoppableImage';
import RecentArticlesCarosuel from '../components/RecentArticlesCarousel';
import { FormIframe } from '../components/FormWithIframe';
import AnnouncementBar from '../components/AnnouncementBar';

import ThankYouPods from '../sections/ThankYouPods';
import {SliderCart} from '../sections/INF-SliderCart';

import youtubeIframeApi from '../utils/youtubeIframeApi';
import flickityiOS13Fix from '../utils/flickityiOS13Fix';

// *** Auto-generated imports will be placed below. DO NOT EDIT THIS LINE! ***

window.slate = window.slate || {};
window.theme = window.theme || {};
window.$ = $;
window.jQuery = $;
window.Flickity = Flickity;
window.flickityArrowShape = 'M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z';

$(document).ready(() => {
  sections.load(['product']);
  youtubeIframeApi();  

  // Initialize Infinite CMS Modules
  initModules();
  runPreRenderers();
  // *** ALL Module Hooks must be executed below this line
  VerticalLineHook();
  console.log(hooks);
  HeadingContentHook();
  PodsContentHook();
  // Run Module Renderers
  runRenderers();

  // Components
  RteVideo();
  ShoppableImage();
  SimpleCarousel();
  RecentArticlesCarosuel();
  FormIframe();
  AnnouncementBar();
  ThankYouPods();  

  _.each(Infinite, (component) => {    
    const disabled_components = [`SliderCart`];
    if (disabled_components.indexOf(component.name) > -1) { return; }
    component();
  });

  SliderCart();

  
  // *** Auto-generated imports will be executed below. DO NOT EDIT THIS LINE! ***

  // Fire resize and scroll on page load and section load
  $(window).trigger('resize');
  $(window).trigger('scroll');

  $(document).on('shopify:section:load', () => {
    $(window).trigger('scroll');
    $(window).trigger('resize');
  });

  // Init selectric
  $('select').not('[data-no-selectric], [data-no-selectric] select').selectric();

  // Target tables to make them scrollable
  const tableSelectors = '.rte table';

  wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  const iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper',
  });

  // Should probably move this later...doesn't really belong here, but neither does Shopify's stuff above this
  $(document).on('shopify:section:load', (e) => {
    if (e.detail.sectionId === 'INF-ArticleContent' || e.detail.sectionId === 'INF-PageContent') {
      wrapIframe({
        $iframes: $(iframeSelectors),
        iframeWrapperClass: 'rte__video-wrapper',
      });
    }
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace(
      'supports-no-cookies',
      'supports-cookies',
    );
  }

  // Fix for Flickity sliding on iOS 13
  // Should be called after all carousels have been initialized
  flickityiOS13Fix(); 
});
