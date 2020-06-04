import $ from 'jquery';
import { standardizeHeights } from 'infinite/scripts/core/INF-gridAlignment';

const child_selectors = [
  `[data-pod-heading]`,
  `[data-pod-subheading]`,
];

export default () => {
  const $grid_item_selector = $(`[data-pod-tile]`);
  
  setTimeout(() => {
    standardizeHeights($grid_item_selector, child_selectors); 
    window.dispatchEvent(new CustomEvent(`resize`));
  }, 100);
};


