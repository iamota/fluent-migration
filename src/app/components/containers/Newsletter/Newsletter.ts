import Vue from 'vue';
import { default_props, default_css_variables } from './Newsletter.defaults';
import translate from '../../../../../node_modules/infinite/src/app/filters/translate';

declare global {
  interface Window {
    fbq: CallableFunction;
  }
}

export default Vue.extend({
  props: {
    ...default_props,
    submit_label: { type: String },
    submit_placement: { type: String, default: `nested` },
    content_width: {type: Number, default: 470 },
  },
  data() {
    return {
      form_id: `201555005195045` as string,
      loading: false,
      success: false,
    };
  },
  computed: {
    cssVariables(): GenericObject {
      return {
        ...default_css_variables(this),
        '--content-width': `${this.content_width}px`,
      };
    },
    formSubmitted(): boolean {
      return this.$store.state.Forms[this.form_id] ? this.$store.state.Forms[this.form_id]._status.submitted : false;      
    },
    placement_class(): string {
      const classes = [`Newsletter__input-wrapper`];

      if (this.submit_placement === `nested`) {
        classes.push(`Newsletter__input-wrapper--nested`);
      }

      return classes.join(`, `);
    },
    submit_label_with_default(): string {
      return this.submit_label || translate(`general.newsletter_form.submit`);
    },
  },
  beforeCreate() {
    this.$store.subscribe((mutation) => {
      if (mutation.type.indexOf(`Forms/${this.$data.form_id}/submit`) !== 0) { return; }
      this.$data.loading = true;
    });
  },
  methods: {
    submitForm(): void {      
      if (window.fbq) {
        window.fbq(`track`, `lead`);
      }
      setTimeout(() => {
        this.$store.dispatch(`Forms/${this.form_id}/clear`);
      }, 200);
      setTimeout(() => {
        this.$store.state.Forms[this.form_id]._status.submitted = false;
      }, 3500);
    },
  },
});
