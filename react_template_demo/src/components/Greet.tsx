/*
    Use type when building application
    use interface when building library
*/

type GreetProps = {
  name: string;
  message_count?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { message_count = 0, name, isLoggedIn } = props;

  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name} ! You have ${message_count} unread messages`
          : `Welcome Guess`}
      </h2>
    </div>
  );
}

export default Greet;
