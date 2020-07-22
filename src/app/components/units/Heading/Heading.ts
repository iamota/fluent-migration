import Vue from 'vue';
  
export default Vue.extend({
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    heading: { type: String },
    preheading: { type: String },
    subheading: { type: String },
    heading_type: { type: String, default: `h3` },
    preheading_type: { type: String, default: `p` },
    subheading_type: { type: String, default: `p` },
    heading_class: { type: String, default: `h3` },
    preheading_class: { type: String, default: `h5` },
    subheading_class: { type: String, default: `h4` },
    heading_level: { type: String },
    preheading_level: { type: String },
    subheading_level: { type: String },
  },
});