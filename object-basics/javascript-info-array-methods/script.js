"use strict";

// 1. Map to names
const getUserNames = (arrayOfUserObjects) => {
    const result = [];
    arrayOfUserObjects.forEach(object => {
        result.push(object.name);
    });
    return result;
};

const getUserNames2 = (arrayOfUserObjects) => {
    return arrayOfUserObjects.map(object => {
        return object.name;
    });
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = getUserNames(users);
let names2 = getUserNames2(users);

console.log(names);
console.log(names2);




// 2. Map to objects
// 3. Sort users by age
// 4. Get average age
// 5. Create keyed object from array