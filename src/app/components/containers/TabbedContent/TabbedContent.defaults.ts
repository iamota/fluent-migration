const default_props: INF.DefaultProps = {
  id: { type: String },
  name: { type: String },
  use_background: { type: Boolean, default: false },
  background_color: { type: String, default: `#fff` },
  background_image: { type: String },
  overlay_type: { type: String, default: `dark-overlay` },
  animation: { type: String, default: `fade-in` },
  width_desktop: { type: String, default: `fixed` },
  width_tablet: { type: String, default: `fixed` },
  width_mobile: { type: String, default: `fixed` },
  margin_top_desktop: { type: Number, default: 0 },
  margin_top_tablet: { type: Number, default: 0 },
  margin_top_mobile: { type: Number, default: 0 },
  padding_top_desktop: { type: Number, default: 30 },
  padding_top_tablet: { type: Number, default: 30 },
  padding_top_mobile: { type: Number, default: 20 },
  padding_bottom_desktop: { type: Number, default: 30 },
  padding_bottom_tablet: { type: Number, default: 30 },
  padding_bottom_mobile: { type: Number, default: 20 },
};

const default_css_variables = (container: GenericObject): GenericObject => {
  return {
    '--background-color': container.use_background ? container.background_color : `none`,
    '--background-image': container.use_background ? `url(${container.background_image})` : `none`,
    '--margin-top-desktop': `${container.margin_top_desktop}px`,
    '--margin-top-tablet': `${container.margin_top_tablet}px`,
    '--margin-top-mobile': `${container.margin_top_mobile}px`,
    '--padding-top-desktop': `${container.padding_top_desktop}px`,
    '--padding-top-tablet': `${container.padding_top_tablet}px`,
    '--padding-top-mobile': `${container.padding_top_mobile}px`,
    '--padding-bottom-desktop': `${container.padding_bottom_desktop}px`,
    '--padding-bottom-tablet': `${container.padding_bottom_tablet}px`,
    '--padding-bottom-mobile': `${container.padding_bottom_mobile}px`,
  };
};

export {
  default_props,
  default_css_variables,
};