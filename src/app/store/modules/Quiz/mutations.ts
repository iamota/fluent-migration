import { defineMutations } from 'direct-vuex';

export default defineMutations<Quiz.State>()({
  setStep(state, newStep: string) {
    state.step = newStep;
  },
  setProductHandle(state, handle: string) {
    state.product_handle = handle;
  },
  setProductId(state, id: number) {
    state.product_id = id;
  },
  setTitle(state, title: string) {
    state.kit_title = title;
  },
  setBody(state, body: string) {
    state.kit_body = body;
  },
});