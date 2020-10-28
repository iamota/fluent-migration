declare global {
  export namespace Analytics {
    interface State {
      my_value: boolean;
    }
  }
};

const state: Analytics.State = {
  my_value: true,
};

export default state;