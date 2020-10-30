import { CollectionGrid } from '@INF/containers/CollectionGrid/';
import { get } from 'lodash-es';

const enable_quick_view_setting = get(window, `INF.settings.products.quickview_enabled`, false);

export default CollectionGrid.extend({
  props: {
    template_suffix: { type: String, default: `` },
  },
  data() {
    return {
      sort_options: [{label: `Featured`, value: `manual`}, {label: `Price: Low to High`, value: `price-ascending`}, {label: `Price: High to Low`, value: `price-descending`}, {label: `A-Z`, value: `title-ascending`}, {label: `Z-A`, value: `title-descending`}, {label: `Best Selling`, value: `best-selling`}],
    };
  },
  computed: {
    enable_quick_view(): boolean {
      return this.template_suffix !== `information` && enable_quick_view_setting;
    },
  },
});