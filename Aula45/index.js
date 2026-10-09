// destructuring = extract values from arrays and objects,
//               then assign them to variables in a convenient way
//               [] = to perform array destructuring
//               {} = to perform object destructuring

// ----------- EXAMPLE 5 -----------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person2);