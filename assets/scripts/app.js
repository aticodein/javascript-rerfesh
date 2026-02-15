import * as utils from "./util.js";

console.log(utils.apiKey);
console.log(utils.default);
console.log(utils.name);

console.log(utils);
console.log("Hello from app.js! " + " This is a test.");

let firstName = "Attila";
let lastName = "Szaloki";


const getFullName = (firstName, lastName) => {
    console.log("getFullName called with arguments: " + firstName + " " + lastName);
}

getFullName(firstName, lastName="Szaloki II");

