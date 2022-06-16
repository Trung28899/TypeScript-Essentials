## RUNNING TYPESCRIPT WITH HTML & CSS:

- Video: https://www.youtube.com/watch?v=iTZ1-85I77c

  For example, we have the sandbox.ts file.
  We need to link the sandbox.js file into index.html by a script tag

  After that we need to run this command on the terminal:

  $ tsc sandbox.ts
  or
  $ tsc sandbox.ts -w

=> The compiler will compile the ts file into js

NOTES: the command down below allow vscode to watch changes that happened in the sandbox.ts
file and restart the server

$ tsc sandbox.ts -w
