import { CollectionFilters } from '@INF/groups/CollectionFilters/';
import { each, debounce, isEmpty } from 'lodash-es';

// Flickity doesn't work properly with import...no time to deal with this right now.
const Flickity = require(`flickity`); // eslint-disable-line

  
export default CollectionFilters.extend({
  data() {
    return {
      flickity_carousels: {} as GenericObject,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        contain: true,
        adaptiveHeight: false,
        cellAlign: ``,
      } as Flickity.Options,
      current_breakpoint: ``,
    };
  },
  mounted() {
    this.current_breakpoint = this.getBreakPoint();

    $(window).on(`resize`, debounce(() => {
      this.current_breakpoint = this.getBreakPoint();
      this.handleCarousels();
    }, 50));

  },
  methods: {
    getBreakPoint(): string {
      return window.innerWidth < 768 ? `mobile` : `desktop`;
    },
    handleCarousels(): void {
      if (this.current_breakpoint === `desktop`) { 
        if (!isEmpty(this.flickity_carousels)) { 
          each(this.flickity_carousels, (carousel: GenericObject) => {
            carousel.destroy();
          });           
        }

        return; 
      }

      const containers = this.$refs.filterContainer as HTMLElement[];
      each(containers, (container) => {
        const id = container.id;
        
        if (this.flickity_carousels[id]) { 
          this.flickity_carousels[id].destroy(); 
          delete this.flickity_carousels[id];
        }

        this.flickity_carousels[id] = new Flickity(container, this.flickityOptions);
        
      });
    },
  },
});