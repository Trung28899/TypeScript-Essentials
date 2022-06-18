import { useReducer } from "react";

/*
    Both useState() and useReducer() are used to manage states within a component

    useState() is used to manage simple states and data structure
    useReducer() is used to manage more complex states

    useReducer() hooks take more steps to manage state but is more efficient 
    when we manage a complicated state. This hook is also used in Redux to manage state

    useState(): 

    1. Initilialize state: 0
    2. Action: state manipulation increment (state + 1) / decrement (state - 1)

    useReducer(): 
    1. Init state: 0
    2. Action: define action name: increment, decrement
    3. Reducer: a function that receive a state and an action. Then reducer will return a new updated state
    4, Dispatch: a function that dispatch an action in the reducer function 

    +, See this video: https://www.youtube.com/watch?v=yn-8PVKBBn0
    +, See this article: 
    https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/#:~:text=type%20is%20dispatched.-,useState%20vs.,managing%20more%20complex%20state%20logic.
*/

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Counter;
