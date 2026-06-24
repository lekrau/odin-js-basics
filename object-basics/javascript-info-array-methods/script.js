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

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// 4. Get average age
const getAverageAge = (users) => {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    const userCount = users.length;
    return totalAge / userCount;
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// 5. Create keyed object from array
const groupById = (arr) => {
    const result = {};
    arr.forEach(user => result[user.id] = user);
    return result;
}

const groupById2 = (arr) => {
    const result = arr.reduce((accumulator, user) => {
        accumulator[user.id] = user;
        return accumulator;
    }, {});
    return result;
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById2(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

console.log(users);
console.log(usersById);
