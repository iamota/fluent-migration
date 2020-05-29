import base_state from '@INF/modules/Cart/state';

declare global {
  export namespace Cart {
    interface State extends INF.Cart.State {
      extra_thing: string;
    }
  }
};

const state: Cart.State = {
  ...base_state,
  extra_thing: `here it is`,
};

export default state;