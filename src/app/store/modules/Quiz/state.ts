declare global {
  export namespace Quiz {
    interface State {
      step: string;
      product_id: number | unknown;
      product_handle: string;
    }
  }
}

const state: Quiz.State = {
  step: `starter`,
  product_id: 5574461685917,
  product_handle: `dev-test-product-do-not-delete`,
};

export default state;