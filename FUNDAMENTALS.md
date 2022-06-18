## 1. What is useReducer() hook ?

    - Both useState() and useReducer() are used to manage states within a component

    useState() is used to manage simple states and data structure
    useReducer() is used to manage more complex states

    useReducer() hooks take more steps to manage state but is more efficient
    when we manage a complicated state. This hook is also used in Redux to manage state

    - useState():

    1. Initilialize state: 0
    2. Action: state manipulation increment (state + 1) / decrement (state - 1)

    - useReducer():

    1. Init state: 0
    2. Action: define action name: increment, decrement
    3. Reducer: a function that receive a state and an action. Then reducer will return a new updated state
    4, Dispatch: a function that dispatch an action in the reducer function

    +, See this video: https://www.youtube.com/watch?v=yn-8PVKBBn0
    +, See this article:
    https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/#:~:text=type%20is%20dispatched.-,useState%20vs.,managing%20more%20complex%20state%20logic.
