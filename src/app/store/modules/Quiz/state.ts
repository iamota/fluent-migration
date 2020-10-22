declare global {
  export namespace Quiz {
    interface State {
      step: string;
      product_id: number;
      product_handle: string;
      kit_subtitle: string;
      kit_title: string;
      kit_body: string;
      token: string;
      slide_back: boolean;
      loading: boolean;
    }
  }
}

const state: Quiz.State = {
  step: `starter`,
  kit_body: `You have the flu. <br/>We recommend the Adult Flue Relief Pack.`,
  kit_title: `Based on your symptoms...`,
  kit_subtitle: `Based on your symptoms...`,
  product_id: 0,
  product_handle: `dev-test-product-do-not-delete`,
  token: ``,
  slide_back: false,
  loading: false,
};

export default state;