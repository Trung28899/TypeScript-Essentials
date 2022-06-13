// TypeScript Primitives and Built-in Type:

let x: number;
let y: string;
// array of string
let m: string[];
let z: boolean;
let a: Date;
let b: any;

// b can be any type of variable like in JavaScript
b = "Hello";
b = 1234;

let c: number;

c = "this is a string but we cast any to it" as any;

/*
  NOTES: the any type can destroy the purpose of TypeScript so... watch out !
*/
