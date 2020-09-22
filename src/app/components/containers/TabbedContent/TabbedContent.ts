import _ from 'lodash';
import CarouselContainers from '@INF/mixins/CarouselContainers';
import { default_props, default_css_variables } from './TabbedContent.defaults';

export default CarouselContainers.extend({
  props: {
    ...default_props,
    tabs: { type: Array },
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
    selectedTab(): number {
      return this.$store.state.Carousels[`TabbedContent--nav`] ? this.$store.state.Carousels[`TabbedContent--nav`].selected_index : 0;
    },
  },
  watch: {
    selectedTab(index): void {
      // @ts-ignore
      this.$refs.TabbedContentDisplay.select(index);
    },
  },
});