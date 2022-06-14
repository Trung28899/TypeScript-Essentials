/*
  This is where generics was used
  we're telling the function to have variable type T for
  parameter values and return values
*/
function clone(source) {
    return Object.apply({}, source);
}
/*
  hover over the clone methods down below to understand
  furthermore about generics

  The generic type holder T is automatically replaced with
  the correct type
*/
const a = { id: 123, name: "Homer Simpson" };
const b = clone(a);
const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone(dateRange);
