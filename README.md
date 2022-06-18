## React.js with TypeScript

1.  Commands & Resources:

    - Video series:
      https://www.youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK

    - Command to start the React.js TypeScript app:  
      $ npx create-react-app folder_name --template typescript

    - useReducer():
      +, See this video: https://www.youtube.com/watch?v=yn-8PVKBBn0
      +, See this article: https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/#:~:text=type%20is%20dispatched.-,useState%20vs.,managing%20more%20complex%20state%20logic.

2.  Commit History:

    a. Commit name: "PROP TYPES PART 1":

         - Commit about typing for props in React.js

         - Types and Demonstration in React.js:
             +, Primitives Typing for Props:
                /components/Greet.tsx

             +, Array Typing for Props:
                /components/PersonList.tsx

             +, Custom Object for Props:
                /components/Person.tsx

             +, React.js Component for Props / children props:
                /components/Oscar.tsx

             +, Enum values typing for Props
                /components/Status.tsx

    b. Commit name: "PROP TYPES PART 2":

         - Commit about event and styles typing for props in React.js

         - NOTES: you can export and import types
            > See file: Types.ts
            > /components/Container.tsx

         - Event and Styles Typing for props in React.js:
            +, Event Typing:
               /components/Input.tsx
               /components/Button.tsx

            +, Style Typing:
               /component/Container.tsx

    c. Commit name: "useState and state Typing"

         - Commit about the useState() hook and typing for state

         - See the files down below:
            > /components/state/LoggedIn.tsx
            > /components/state/User.tsx

    d. Commit name: "useReducer() Hook"

         - Commit about the useReducer() hook and typing for it

         - What is useReducer() hook ?
            +, See FUNDAMENTAL.md
            +, See /component/state/Counter.tsx
