/*
    This demo shows how does generic constraint works

    generic constraints allow you to place more restrictive rules
    around the types that you maybe used as generic type in your function
*/

interface ContactGeneric {
  id: number;
  name: string;
}

/*
    Showing that generics are not limited with functions
    they can be applied with interfaces and classes too
*/
interface UserContact<generic_variable> {
  id: number;
  name: string;
  username: string;
  externalId: generic_variable;
  loadExternalId(): generic_variable;
}

/*
    T2 has to match at least the properties of the T1 parameter
*/
function cloneGeneric<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source);
}

const genericVarA: ContactGeneric = { id: 123, name: "Homer Simpson" };
/*
    This is how generic constraint is used
    note that the extends keyword doesn't mean that the second type
    literally has to extend or derive from a given type

    it only has to match it
*/
const genericVarB = cloneGeneric<Contact, UserContact<number>>(genericVarA);

const dateRangeGeneric = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopyGeneric = cloneGeneric(dateRangeGeneric);
