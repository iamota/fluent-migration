import _ from 'lodash';
import Vue from 'vue';
import { default_props, default_css_variables } from './TabbedContent.defaults';

export default Vue.extend({
  props: {
    ...default_props,
    tabs: { type: Array },
  },
  data() {
    return {
      current_tab: `tab`,
    };
  },
  computed: {
    cssVariables(): GenericObject {
      return {
        ...default_css_variables(this),
        // '--my-custom-css-variable': this.my_custom_prop,
      };
    },
    tabTitles(): Array<string> {
      const titles = _.map(this.$props.tabs, (tab): string => { return tab.tab_title; });
      return titles;
    },
  },
  mounted() {
    const tabs = this.tabTitles;
    this.current_tab = tabs[0];
  },
  methods: {
    changeTab(tab_name: string): void {
      this.current_tab = tab_name;
    },
  },
});