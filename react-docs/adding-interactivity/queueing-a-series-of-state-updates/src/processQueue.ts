type State = any;

type UpdateFunction = (state: State) => State;
type Update = State | UpdateFunction;

export function getFinalState(baseState: State, queue: Update[]): State {
    let finalState = baseState;

    for (let update of queue) {
      if (typeof update === 'function') {
        finalState = (update as UpdateFunction)(finalState);
      } else {
        finalState = update;
      }
    }

    return finalState;
}
