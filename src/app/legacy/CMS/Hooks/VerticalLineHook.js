/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { configHook } from 'infinite/cms/scripts/core/CMS-Hooks';

const verticalLine = (data) => {
  const { settings } = data;

  console.log(`verticalLine:`, settings);

  if (!settings || !settings.vertical_line || !settings.vertical_line.vertical_line) { return ``; }

  const { vertical_line_color } = settings.vertical_line;

  return `<div data-vertical-line data-vertical-line-color=${vertical_line_color}></div>`;
};

export default () => {

  configHook(`Banner`, `postSection`, verticalLine);
  configHook(`BlockquoteV3`, `postSection`, verticalLine);
  configHook(`Buttons`, `postSection`, verticalLine);
  configHook(`Collection`, `postSection`, verticalLine);
  configHook(`EmbeddedContent`, `postSection`, verticalLine);
  configHook(`Faq`, `postSection`, verticalLine);
  configHook(`Group`, `postSection`, verticalLine);
  configHook(`HeadingText`, `postSection`, verticalLine);
  configHook(`Media`, `postSection`, verticalLine);
  configHook(`Pods`, `postSection`, verticalLine);
  configHook(`RelatedContent`, `postSection`, verticalLine);
  configHook(`SplitContent`, `postSection`, verticalLine);
};