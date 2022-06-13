interface Contact {
  id: number;
  name: ContactName;
  birthDate?: Date;
  status: ContactStatus;
}

/*
  what is the problem that enum solve ?

  for example, you have a field named status in an interface
  the values of status can only be "inactive" or "active"

  the problem is when declaring a new instance of this interface, 
  developers can mispell the value of status. 
  
  and since it is a string, if the developer has "1nactive", the compiler cannot detect the error

  => this is why we have enum

  What is enum ? 

  enum is a special type that has a list of hard-coded list of values
  enum get compiled at compile time. This allows you to refer enum at runtime
*/

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new",
}

let primaryContact: Contact = {
  id: 123,
  name: "Trung",
  status: ContactStatus.Active,
};

/*
  What is type alias ?

  Type alias is simply an alias for another type. They are not a type themself
  which means they can be used interchangeably with the type that they alias
*/
type ContactName = string;
