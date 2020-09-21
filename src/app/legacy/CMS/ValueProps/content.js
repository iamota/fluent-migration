import _ from 'lodash-es';
import getHeadings from 'infinite/cms/scripts/core/getHeadings';

export default (settings, module_name, i) => {
  let prop_html = ``;
  _.each(settings.props, (prop) => {
    prop_html += `
      <div class="Module-${module_name}__Prop">
        <img class="Module-${module_name}__Prop--Icon" src="${prop.icon}" />
        <p class="Module-${module_name}__Prop--Title">${prop.title}</p>
        <p class="Module-${module_name}__Prop--Description">${prop.description}</p>
        <a class="Module-${module_name}__Prop--Link" href="${prop.link}">${prop.link_label}</a>
      </div>
    `;
  });

  const html = `
    <div class="Module-${module_name}__Headings">
      ${getHeadings(settings)}
    </div>
    <div class="Module-${module_name}__Props" data-cms-value-props-carousel>
      ${prop_html}
    </div>
  `;
  return html;
};