import { CollectionGrid } from '@INF/containers/CollectionGrid/';
import { get } from 'lodash-es';

const enable_quick_view_setting = get(window, `INF.settings.products.quickview_enabled`, false);

export default CollectionGrid.extend({
  props: {
    template_suffix: { type: String, default: `` },
  },
  computed: {
    enable_quick_view(): boolean {
      return this.template_suffix !== `information` && enable_quick_view_setting;
    },
  },
});