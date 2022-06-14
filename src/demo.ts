interface Contact {
  id: number;
  name: string;
  // this is how we declare a method on an interface
  // clone(name: string): Contact;
}

/*
  function that receive an object and return a clone
  of that object
*/
// This is how we declare the type of parameter and return value
function clone(source: Contact): Contact {
  return Object.apply({}, source);
}

// This is how we declare a function as a parameter
// function clone(source: Contact, func: (source: Contact) => Contact) {
//   return Object.apply({}, source);
// }

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a);
