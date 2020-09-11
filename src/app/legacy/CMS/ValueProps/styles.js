export default (settings, module_name, index) => {
  let custom_css = ``;
  let custom_css_tablet = ``;
  let custom_css_mobile = ``;

  custom_css += `
    .rte #Module-${module_name}--${index} .Section__container {
      background: linear-gradient(211deg, #00aca0, #9aca3c);
    }
  `;

  custom_css += `
    .rte #Module-${module_name}--${index} .Module-${module_name}__Headings *,
    .rte #Module-${module_name}--${index} .Module-${module_name}__Prop * {
      color: ${settings.theme === `dark` ? `var(--text-color-dark)` : `var(--text-color-light)`};
    }
  `;
  
  return `
    <style>
      .rte #Module-${module_name}--${index} .Section__container {
        padding-top: ${settings.padding.padding_top || 30}px;
        padding-right: ${settings.padding.padding_right || 50}px;
        padding-bottom: ${settings.padding.padding_bottom || 20}px;
        padding-left: ${settings.padding.padding_left || 20}px;
      }
      ${custom_css}
      @media only screen and (max-width: ${window.theme.breakpoints.laptop - 1}px) {
        ${custom_css_tablet}
      }
      @media only screen and (max-width: ${window.theme.breakpoints.tablet - 1}px) {
        .rte #Module-${module_name}--${index} .Section__container {
          padding-top: ${settings[`padding--mobile`].padding_top || 20}px;
          padding-right: ${settings[`padding--mobile`].padding_right || 30}px;
          padding-bottom: ${settings[`padding--mobile`].padding_bottom || 0}px;
          padding-left: ${settings[`padding--mobile`].padding_left || 0}px;
        }
        ${custom_css_mobile}
      }
    </style>
  `;
};