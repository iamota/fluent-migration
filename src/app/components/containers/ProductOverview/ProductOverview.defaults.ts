const default_props: INF.DefaultProps = {
  id: { type: String },
  name: { type: String },
  use_background: { type: Boolean, default: false},
  background: { type: String, default: null},
  carousel_type: { type: String, default: null},
  carousel_animation: { type: String, default: null},
  option_type: { type: String, default: null},
  show_share_buttons: { type: Boolean, default: true},
  info_animation: { type: String, default: null},
  short_description_enabled: { type: Boolean, default: true},
  short_description_enabled_mobile: { type: Boolean, default: false},
  use_truncated_description: { type: Boolean, default: false},
  short_description_namespace: { type: String, default: null},
  short_description_key: { type: String, default: null},
  width: { type: String, default: null},
  padding_top: { type: Number, default: 30},
  padding_bottom: { type: Number, default: 30},
  transition: { type: String, default: null},
  carousel_draggable: { type: Boolean, default: true},
  wrapAround: { type: Boolean, default: true},
  filmstrip: { type: Boolean, default: true},
  filmstrip_arrows: { type: Boolean, default: false},
  filmstrip_draggable: { type: Boolean, default: true},
  filmstrip_cellAlign: { type: String, default: null},
  prevNextButtons: { type: Boolean, default: true},
  arrow_color: { type: String, default: null},
  arrow_opacity: { type: Number, default: 100},
  arrow_bg_color: { type: String, default: null},
  arrow_bg_opacity: { type: Number, default: 75},
  pageDots: { type: Boolean, default: false},
  dot_location: { type: String, default: null},
  dot_color_active: { type: String, default: null},
  dot_opacity_active: { type: Number, default: 100},
  dot_color: { type: String, default: null},
  dot_opacity: { type: Number, default: 25},
  width_mobile: { type: String, default: null},
  padding_top_mobile: { type: Number, default: 15},
  padding_bottom_mobile: { type: Number, default: 15},
  transition_mobile: { type: String, default: null},
  carousel_draggable_mobile: { type: Boolean, default: true},
  wrapAround_mobile: { type: Boolean, default: true},
  filmstrip_mobile: { type: Boolean, default: true},
  filmstrip_arrows_mobile: { type: Boolean, default: false},
  filmstrip_draggable_mobile: { type: Boolean, default: true},
  filmstrip_cellAlign_mobile: { type: String, default: null},
  prevNextButtons_mobile: { type: Boolean, default: true},
  arrow_color_mobile: { type: String, default: null},
  arrow_opacity_mobile: { type: Number, default: 100},
  arrow_bg_color_mobile: { type: String, default: null},
  arrow_bg_opacity_mobile: { type: Number, default: 75},
  pageDots_mobile: { type: Boolean, default: false},
  dot_location_mobile: { type: String, default: null},
  dot_color_active_mobile: { type: String, default: null},
  dot_opacity_active_mobile: { type: Number, default: 100},
  dot_color_mobile: { type: String, default: null},
  dot_opacity_mobile: { type: Number, default: 25},
  grid_mobile_max: { type: String, default: `768px`},

  // animation: { type: String, default: `fade-in` },
  // width_desktop: { type: String, default: `fixed` },
  // width_tablet: { type: String, default: `fixed` },
  // width_mobile: { type: String, default: `fixed` },
  // margin_top_desktop: { type: Number, default: 0 },
  // margin_top_tablet: { type: Number, default: 0 },
  // margin_top_mobile: { type: Number, default: 0 },
  // padding_top_desktop: { type: Number, default: 30 },
  // padding_top_tablet: { type: Number, default: 30 },
  // padding_top_mobile: { type: Number, default: 20 },
  // padding_bottom_desktop: { type: Number, default: 30 },
  // padding_bottom_tablet: { type: Number, default: 30 },
  // padding_bottom_mobile: { type: Number, default: 20 },
};

const default_css_variables = (container: any): object => {
  return {
    '--margin-top-desktop': `${container.margin_top}px`,
    '--margin-top-tablet': `${container.margin_top}px`,
    '--margin-top-mobile': `${container.margin_top_mobile}px`,
    '--padding-top-desktop': `${container.padding_top}px`,
    '--padding-top-tablet': `${container.padding_top}px`,
    '--padding-top-mobile': `${container.padding_top_mobile}px`,
    '--padding-bottom-desktop': `${container.padding_bottom}px`,
    '--padding-bottom-tablet': `${container.padding_bottom}px`,
    '--padding-bottom-mobile': `${container.padding_bottom_mobile}px`,
  };
};

export {
  default_props,
  default_css_variables,
};