/* Maps 

Maps: implemented as a built-in class in JavaScript called Map. 
It is part of the standard library and provides a data structure for key-value pairs. 
The Map class is instantiated using the new keyword, like new Map(), and offers various methods for interacting with the data stored within the map.*/

// maps provide more specific functionality for key-value pair management.
// maps are iterable, which means they can be looped over.

// Creating a map
const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);

console.log(myMap.get("name")); // Output: "John"