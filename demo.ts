type ContactStatus = "active" | "inactive" | "new";

interface Address {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact {
  id: number;
  name: string;
  status: ContactStatus;
  address: Address;
}

// THIS IS HOW TO USE INDEXED ACCESS TYPE
type Awesome = Contact["address"]["postalCode"];

interface ContactEvent {
  contactId: Contact["id"];
}

// THIS IS HOW WE USE typeof operator
const myType = { min: 32, max: 55 };
function save(number: typeof myType) {
  return 32;
}

const minIs = save({ min: 11, max: 32 });

interface ContactDeletedEvent extends ContactEvent {}

interface ContactStatusChangedEvent extends ContactEvent {
  oldStatus: Contact["status"];
  newStatus: Contact["status"];
}

interface ContactEvents {
  deleted: ContactDeletedEvent;
  statusChanged: ContactStatusChangedEvent;
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

function handleEvent<T extends keyof ContactEvents>(
  eventName: T,
  handler: (evt: ContactEvents[T]) => void
) {
  if (eventName === "statusChanged") {
    handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" });
  }
}

handleEvent("statusChanged", (evt) => evt);
