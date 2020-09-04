import Vue from 'vue';
import store from 'infinite/src/app/store';
  
export default Vue.extend({
  props: {
    mobile: { type: Boolean, default: false},
    show: { type: Boolean, default: false},
  },
  computed: {
    cssClass(): GenericObject {
      return {
        [`QuizTemp--mobile`]: this.mobile,
        [`QuizTemp--desktop`]: !this.mobile,
      };
    },
  },
});