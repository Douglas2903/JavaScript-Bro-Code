
let buttons = document.querySelectorAll(".myButtons");

/* buttons.forEach((button) => {
    button.style.backgroundColor = "green";
    button.textContent += "😁";
}); */

/* buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "tomato";
    });
}); */

/* buttons.forEach((button) => {
    button.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach((button) => {
    button.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
}); */

/* const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton); */

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})