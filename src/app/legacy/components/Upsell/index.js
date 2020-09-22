import $ from 'jquery';

export default () => {
  if ($(`[data-upsell]`).length === 0) { return; }

  console.log(`Upsell init`);
};