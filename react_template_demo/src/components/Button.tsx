/*
    This button type shows how to pass in a function with an event object 
    and how to pass in a functino without an event object
*/
import { ButtonProps } from "../Types";

function Button(props: ButtonProps) {
  return (
    <button onClick={(event) => props.handleClick2(event, 1)}>Click</button>
  );
}

export default Button;
