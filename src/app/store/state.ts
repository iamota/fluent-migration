import base_state from '@INF/state';

declare global {
  export interface State extends INF.State {
    project_custom_thing: boolean;
  }
};

const state: State = {
  ...base_state,
  project_custom_thing: true,
};

export default state;