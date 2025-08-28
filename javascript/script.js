let count = 0;
let countDisplay = document.getElementById("count");

// get all elements with class "increase"
let increaseButtons = document.getElementsByClassName("increase");

// loop through all 6 elements
for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", function () {
        count++;
        countDisplay.textContent = count;
    });
}
