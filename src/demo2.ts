/*
    This demo shows that you can define multiple generic
    variables, not only 1
*/

interface ContactDemo2 {
  id: number;
  name: string;
}

/*
    When we use generics in this way. It's hard for TypeScript to infer 
    what the generic variables should be
*/
function cloneDemo<T1, T2>(source: T1): T2 {
  return Object.apply({}, source);
}

const demoVarA: ContactDemo2 = { id: 123, name: "Homer Simpson" };
/*
    we have to explicitly set the types using this syntax 
    because there are 2 generics
*/
const demoVarB = cloneDemo<Contact, Date>(demoVarA);

const dateRangeDemo = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopyDemo = cloneDemo(dateRangeDemo);
