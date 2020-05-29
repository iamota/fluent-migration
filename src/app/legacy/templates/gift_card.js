/**
 * Gift Card Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Gift Card template.
 */

import $ from 'jquery';
import { keyCodes } from 'infinite/scripts/core/INF-keyCodes';

const config = {
  qrCode: '#QrCode',
  printButton: '#PrintGiftCard',
  giftCardCode: '.giftcard__code',
};

// new QRCode($qrCode[0], {
//   text: $qrCode.attr('data-identifier'),
//   width: 120,
//   height: 120,
// });

$(config.printButton).on('click keyup', (e) => {
  if (e.keyCode) {
    if (e.keyCode !== keyCodes.enter && e.keyCode !== keyCodes.space) { return; }
  }

  window.print();
});

// Auto-select gift card code on click, based on ID passed to the function
$(config.giftCardCode).on('click keyup', {element: 'GiftCardDigits'}, selectText);

function selectText(evt) {
  if (evt.keyCode) {
    if (evt.keyCode !== keyCodes.enter && evt.keyCode !== keyCodes.space) { return; }
  }

  const text = document.getElementById(evt.data.element);
  let range = '';

  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
