// This is how we create a custom type in TS
/*
  This looks like a class in JavaScript. 
  What is the differences between class and interface ?

  - interfaces strictly exist as a way for you to provide type interface to TS
  - they are only used at compile time
  - Interfaces are never available and never appear in your run-time code 
*/

interface Address {
  // The question mark meaning the field optional
  line1?: string;
  line2?: string;
  province?: string;
  region?: string;
  postalCode: string;
}

interface Contact extends Address {
  id: number;
  name: string;
  birthDate?: Date;
}

let primaryContact: Contact = {
  id: 123,
  name: "Trung",
  postalCode: "M5A 3K3",
};

let secondaryContact: Contact = {
  id: 123,
  name: "Trung",
  birthDate: new Date("28-08-1999"),
  postalCode: "M5A 3K3",
};
