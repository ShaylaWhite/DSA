
/* Objects */

/*Objects: Objects in JavaScript are not functions but rather a fundamental data type. 
You can create objects using object literal syntax {}, constructor functions, or the class syntax introduced in ECMAScript 2015 (ES6).
 Objects are used to represent entities or structures with properties and their corresponding values. Objects are highly flexible and versatile, 
 allowing you to store and manipulate data in key-value pairs.*/

// Creating an object
// In JavaScript, there are multiple ways to create objects. Here are some common methods for creating objects:



////////1. Object Literal Syntax:
// This is the simplest way to create an object using curly braces `{}`. You define properties and their values within the object literal using a key-value pair format.

  const person = {
    name: "John",
    age: 30,
  };




/////// //2. Constructor Function:
//You can create objects using constructor functions, which are regular functions used as a blueprint to create multiple instances of objects.
// Inside the constructor function, you define properties using the this keyword.
 
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person = new Person("John", 30);




///////////Object.create() Method:
//The Object.create() method allows you to create a new object with a specified prototype object. You can define properties and their values as an additional argument.
 
 const person = Object.create(null);
 person.name = "John";
 person.age = 30;
 
 
 ////ES6 Class Syntax:
//ECMAScript 2015 (ES6) introduced the class syntax, which provides a more familiar way of creating objects using class-based inheritance. 
//You define a class with properties and methods and use the new keyword to create instances.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const person = new Person("John", 30);
  
