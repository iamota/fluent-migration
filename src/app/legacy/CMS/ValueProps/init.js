import $ from 'jquery';

import { useHooks } from 'infinite/cms/scripts/core/CMS-Hooks';
import generateSettings from 'infinite/cms/scripts/core/settings';
import generateBackground from 'infinite/cms/scripts/core/CMS-Background';
import { initSliders } from 'infinite/cms/scripts/core/slider';
import styles from './styles';
import generateContent from './content';

const render = (module_name, container = document) => {
  $(`[data-cms-module-value-props]`, container).each((i, module) => {

    const $module = $(module);
    const container_selector = `#Module-${module_name}--${i}`;
    const settings = generateSettings($module.find(`[data-settings]`).html());
    const hook_package = {$module, settings, module_name, i};
    const hook_events = [`background`, `preSection`, `sectionClass`, `preContainer`, `containerClass`, `preContent`, `content`, `postContent`, `postContainer`, `postSection`];
    const hooks = useHooks(module_name, hook_events, hook_package);
    
    if (!settings) { return; }
    // console.log(`${module_name} Settings:`, settings);
    const styles_html = styles(settings, module_name, i);
    const background_html = generateBackground(settings.background, module_name, i, 0);
    const content_html = generateContent(settings, module_name, i);
    const module_animation = settings.animation.module_animation === `none` ? `` : `Animate Animate--${settings.animation.module_animation}`;
    const inner_animation = settings.animation.inner_animation === `none` ? `` : `Animate Animate--${settings.animation.inner_animation}`;
    const section_width = `Section--${settings.section_width} Section--mobile-${settings[`section_width--mobile`]}`;

    const new_html = `
    ${hooks.background || background_html}
    ${hooks.preSection}
    <section
      id="Module-${module_name}--${i}"
      data-section-id="${module_name}--${i}"
      data-section-type="CMS-Module-${module_name}"
      class="CMS-Module Module-${module_name} Section ${section_width} ${module_animation} ${hooks.sectionClass}"
    >
      ${hooks.preContainer}
      <div class="Section__container ${inner_animation} ${hooks.containerClass}">
        ${hooks.preContent}
        ${hooks.content || content_html}
        ${hooks.postContent}
      </div>
      ${hooks.postContainer}
    </section>
    ${hooks.postSection}
    ${styles_html}
    `;

    $module.html(new_html);
    initSliders(`[data-cms-value-props-carousel]`, container_selector, settings.carousel_settings);
  });
};

export {render};