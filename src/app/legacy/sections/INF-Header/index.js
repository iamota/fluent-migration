import $ from 'jquery';

const setKitInformation = () => {
  const $recommended_text = $(`[data-recommended-text]`);
  const $recommended_link = $(`[data-recommended-link]`);
  const kit_information = localStorage.getItem(`kit_data`);

  if (!kit_information) { return; }

  const kit_data = JSON.parse(kit_information);

  $recommended_text.text(`Your personalized kit is ready.`);
  $recommended_link.attr(`href`, `/products/${kit_data.shopify_product_handle}`).text(`Shop Now`);
};

const setKitEvent = () => {  
  const event = document.createEvent(`Event`);
  
  event.initEvent(`kit`, true, true);

  window.kit_event = event;
  
  document.addEventListener(`kit`, (e) => {
    setKitInformation();
  }, false);

  // // target can be any Element or other EventTarget.  
  // elem.dispatchEvent(event);
}

export default () => {
  if ($(`[data-section-type="INF-Header"]`).length === 0) { return; }

  if (typeof (Storage) === `undefined`) { return; }
 
  setKitInformation();
  setKitEvent();
};