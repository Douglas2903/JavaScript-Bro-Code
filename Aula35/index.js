// function expression = a way to define funtions as values or variables

// 1.Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Add Listeners

const hello = function(){
    console.log("Hello");
}

setTimeout(function(){
    console.log("Goodbye");
}, 5000);