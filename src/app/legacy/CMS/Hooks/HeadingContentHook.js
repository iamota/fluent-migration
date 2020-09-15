import { configHook } from 'infinite/cms/scripts/core/CMS-Hooks';

const callBack = (data) => {
  const { module_name, settings } = data;

  const html = `
    <div class="Module-${module_name}__Headings Module-${module_name}__Headings--Alignment-${settings.text_alignment} Module-${module_name}__Headings--Alignment-${settings['text_alignment--mobile']}--mobile">
      <h2 class="Module-${module_name}__Preheading ${settings.headings.pre_heading_size}" style="color: ${settings.headings.pre_heading_color};">${settings.headings.pre_heading_text}</h2>
      <h1 class="Module-${module_name}__Heading ${settings.headings.heading_size}"  style="color: ${settings.headings.heading_color};">${settings.headings.heading_text}</h1>
      <h4 class="Module-${module_name}__Subheading ${settings.headings.sub_heading_size}  style="color: ${settings.headings.sub_heading_color};"">${settings.headings.sub_heading_text}</h4>
    </div>
  `;
  return html;
};

export default () => {
  configHook(`HeadingText`, `content`, callBack);
};