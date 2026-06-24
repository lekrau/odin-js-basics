"use strict";

// 1. Map to names //
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

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = getUserNames(users);
// let names2 = getUserNames2(users);

// console.log(names);
// console.log(names2);

// 2. Map to objects //
const mapUsers = (users) => {
    return users.map(user => ({
            fullName: user.name + " " + user.surname,
            id: user.id,
        }));
};

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = mapUsers(users);

/*
usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
    ]
    */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// 3. Sort users by age //
const sortByAge = (users) => {
    // Modifies the argument, return is not needed
    return users.sort((a, b) => a.age - b.age);
};

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// 4. Get average age


// 5. Create keyed object from array