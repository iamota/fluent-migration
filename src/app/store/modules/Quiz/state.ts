declare global {
  export namespace Quiz {
    interface State {
      step: string;
      product_id: number | unknown;
      product_handle: string;
      recomendation_custom_message: string;
    }
  }
}

const state: Quiz.State = {
  step: `starter`,
  recomendation_custom_message: `You have the flu. <br/>We recommend the Adult Flue Relief Pack.`,
  product_id: 5574461685917,
  product_handle: `dev-test-product-do-not-delete`,
};

export default state;