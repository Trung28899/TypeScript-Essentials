## 1. What is TypeScript ?

    - TypeScript is an extension of JavaScript with some additional details. TypeScript is complied into JavaScript

    - TypeScript adds strong static typing on top of JavaScript. It's able to provide compile time code checking and catch many common issues

    - JavaScript typing is dynamic. This is a big advantage of JavaScript but it also has it's downside => TypeScript is a solution

## 2. What is the differences between class and interface ?

    - interfaces strictly exist as a way for you to provide type interface to TS
    - They are only used at compile time
    - Interfaces are never available and never appear in your run-time code

## 3. What is type alias ?

    - Type alias is simply an alias for another type.
    - They are not a type themself which means they can be used interchangeably with the type that they alias

## 4. What is enum ? What problem does it solves ?

    a. What is enum ?
        - enum is a special type that has a list of hard-coded list of values
        - enum get compiled at compile time. This allows you to refer enum at runtime

    b. What problem does it solve ?

        for example, you have a field named status in an interface
        the values of status can only be "inactive" or "active"

        the problem is when declaring a new instance of this interface,
        developers can mispell the value of status.

        and since it is a string, if the developer has "1nactive", the compiler cannot detect the error

        => this is why we have enum

## 5. Generic Type and Generic Constraint:

    - A generic type is simply a meta type. A type that represent any other type that you want to subtitude in

    - Generic Constraint meaning a setting generic variable to extends a certain class or interface.
      This means setting the rule for the generic type to have the properties of a class or interface.

    - See code in branch section2e-generics for further demonstration

## 6. Modules Basic:

    - JavaScript modules allow you to link codes that is distributed across multiple files

    - Before JS modules, html uses the script tag to download multiple JS files.
      The content of multiple files got shared in the same memory space in the browser

      +, This means when you define a function in 1 file and then define
      another function in another file with the same name. The last function
      to be defined overwrite other functions with the same name

    - With modules, each JS file has it's own memory space. So the content of each file
      stay within its memory space and do not leak out

      +, We can export and import functions from other file to use.
      +, We only has to link 1 file with the script tag in the html content
      +, See the demo for this in this branch: section6a-modules

        > see files in after_modules and before_modules folders
