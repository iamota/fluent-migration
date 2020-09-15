/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { configHook } from 'infinite/cms/scripts/core/CMS-Hooks';

export default () => {
  const verticalLine = (data) => {
    const { settings } = data;
  
    console.log(`verticalLine:`, settings);
  
    if (!settings || !settings.vertical_line || !settings.vertical_line.vertical_line) { return ``; }
  
    const { vertical_line_color } = settings.vertical_line;
  
    return `<div data-vertical-line data-vertical-line-color=${vertical_line_color}></div>`;
  };

  configHook(`Banner`, `postContainer`, verticalLine);
  configHook(`BlockquoteV3`, `postContainer`, verticalLine);
  configHook(`Buttons`, `postContainer`, verticalLine);
  configHook(`Collection`, `postContainer`, verticalLine);
  configHook(`EmbeddedContent`, `postContainer`, verticalLine);
  configHook(`Faq`, `postContainer`, verticalLine);
  configHook(`Group`, `postContainer`, verticalLine);
  configHook(`HeadingText`, `postContainer`, verticalLine);
  configHook(`Media`, `postContainer`, verticalLine);
  configHook(`Pods`, `postContainer`, verticalLine);
  configHook(`RelatedContent`, `postContainer`, verticalLine);
  configHook(`SplitContent`, `postContainer`, verticalLine);
};