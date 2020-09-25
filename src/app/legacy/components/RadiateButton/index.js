import $ from 'jquery';

// Lame fix for Safari 14.0. The browser occasionally fails to position the radiating pseudo element correctly on page load, hence the SetTimeout. 
export default () => {
  const $radiate_buttons = $(`[data-button-radiate]`);
  if ($radiate_buttons.length === 0) { return; }

  setTimeout(() => {
    $radiate_buttons.each((i, button) => {
      $(button).addClass(`radiate`);
    });
  }, 1000);
};