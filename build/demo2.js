/*
    This demo shows that you can define multiple generic
    variables, not only 1
*/
/*
    When we use generics in this way. It's hard for TypeScript to infer
    what the generic variables should be
*/
function cloneDemo(source) {
    return Object.apply({}, source);
}
const demoVarA = { id: 123, name: "Homer Simpson" };
/*
    we have to explicitly set the types using this syntax
    because there are 2 generics
*/
const demoVarB = cloneDemo(demoVarA);
const dateRangeDemo = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopyDemo = cloneDemo(dateRangeDemo);
