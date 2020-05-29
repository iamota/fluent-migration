import $ from 'jquery';
import init from './init';

export default () => {
  $(document).on('shopify:section:load', (e) => {
    init(`[data-section-id="${e.detail.sectionId}"]`);
  });
};