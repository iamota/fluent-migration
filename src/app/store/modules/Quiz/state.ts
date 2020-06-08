declare global {
  export namespace Quiz {
    interface State {
      step: string;
    }
  }
}

const state: Quiz.State = {
  step: `starter`,
};

export default state;