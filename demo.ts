type ContactName = string;
type ContactStatus = "active" | "inactive" | "new";
type ContactBirthDate = Date | number | string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
  email: string;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  status: "active",
  email: "trevtrinh@gmail.com",
};

/*
    keyof operator expect a variable value to be 
    the key of a certain interface
*/
type ContactFields = keyof Contact;

// function getValue(source, propertyName: keyof Contact) {
//   return source[propertyName];
// }

// function getValue<T>(source: T, propertyName: keyof T) {
//   return source[propertyName];
// }

/*
    This is the same function as the 2 functions above
*/
function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

const value = getValue({ min: 1, max: 200 }, "max");
