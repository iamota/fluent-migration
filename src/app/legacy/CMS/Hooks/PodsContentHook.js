import _ from 'lodash-es';
import buttons from 'infinite/cms/scripts/core/CMS-Button';
import { configHook } from 'infinite/cms/scripts/core/CMS-Hooks';
import shoppableWrapper from '../../../../cms/scripts/core/shoppableWrapper';

let module_name = '';
let index = '';

const extractImage = (content, link) => {
  const shoppable_html = shoppableWrapper(content, true);
  const common_attrs = `class="Module-${module_name}__Image" style="height:${content.max_height}px"`;
  const html = content.shoppable_image.is_shoppable 
    ? `<div ${common_attrs}>
        ${shoppable_html}
       </div>`
    : `<a href="${link}" ${common_attrs}>
        ${shoppable_html}
       </a>`;
  return html;
};

const callBack = (data) => {
  // console.log('DATA>>>', data);
  const { settings } = data;
  module_name = data.module_name;
  index = data.i;

  let pods_html = '';

  _.each(settings.pods, (pod) => {
    const on_image_classes = [];
    if (settings.pod_adjustments.position === 'on') {
      on_image_classes.push(`Module-${module_name}__Image--Overlay Module-${module_name}__Image--Overlay-${settings.pod_adjustments.overlay}`);
      on_image_classes.push(`Module-${module_name}__Image--VAlignment Module-${module_name}__Image--VAlignment-${settings.pod_adjustments.vertical_alignment}`);
    }

    const position_html = `
    <div class="Module-${module_name}__Content Module-${module_name}__Content--Alignment-${pod.text_alignment}">
      <h3 class="h5" style="color: ${pod.text_color}">${pod.heading}</h3>
      <p  style="color: ${pod.text_color}">${pod.description}</p>
      <div class="Module-${module_name}__Buttons">
        ${buttons(pod.buttons, module_name, index, 'Pod__button')}
        </div>
    </div>
    `;

    const upper_content = settings.pod_adjustments.position === 'on' 
      ? `
        <div class="Module-${module_name}__Image ${on_image_classes.join(' ')}" style="height:${settings.height}px; background-image:url('${pod.image}')">
          ${settings.pod_adjustments.position === 'on' ? position_html : ''}
        </div>`
      : extractImage(pod.shoppable_image, pod.link);

    pods_html += `
      <div class="Module-${module_name}__Pod">
        ${upper_content}
        ${settings.pod_adjustments.position === 'below' ? position_html : ''}
      </div>
    `;
  });

  const html = `
    <div class="Module-${module_name}__Pods">
      ${pods_html}
    </div>
  `;

  return html;
};

export default () => {
  configHook(`Pods`, `content`, callBack);
};