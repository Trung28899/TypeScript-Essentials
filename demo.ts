type ContactName = string;

/*
    Combining the 2 types together
    this means that the AddressableContact type will have the 
    properties of both Contact and Address
*/
type AddressableContact = Contact & Address;

/*
    Combining multiple types
    this means that ContactBirthDate can either be 
    a Date, number or a string type
*/
type ContactBirthDate = Date | number | string;

/*
    Combining multiple types
    This is similiar to the enum down below
*/
type ContactStatus = "active" | "inactive" | "new";

// enum ContactStatus {
//   Active = "active",
//   Inactive = "ina0ctive",
//   New = "new",
// }

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
};
