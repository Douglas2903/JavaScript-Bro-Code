// rest parameters = (...rest) allow a function work with a variable number of arguments by building them into a array
//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);