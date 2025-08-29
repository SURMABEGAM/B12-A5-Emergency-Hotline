let count = 0;
let countDisplay = document.getElementById("count");

// classNAME "increase"
let increaseButtons = document.getElementsByClassName("increase");

for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", function () {
        count++;
        countDisplay.textContent = count;
    });
}
let copyCount = 0; // copy counter
const copyCountDisplay = document.getElementById("copy-icon");
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {
  button.addEventListener("click", function() {
    const card = button.closest(".bg-white");
    const serviceNumber = card.querySelector("p.text-xl").innerText;

    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`${serviceNumber} number copied!`);


      copyCount+=3;
      copyCountDisplay.textContent = copyCount;
    }).catch(err => {
      alert("Failed to copy!");
    });
  });
});



let coins =110; 
const coinDisplay = document.getElementById("coin");

const callButtons = document.querySelectorAll(".decrease");
const callHistory = document.getElementById("call-history");

callButtons.forEach(button => {
  button.addEventListener("click", function() {
    if (coins < 20) {
      alert("You do not have enough coins.");
      return;
    }

    const card = button.closest(".bg-white");
    const serviceName = card.querySelector("h2").innerText;
    const serviceNumber = card.querySelector("p.text-xl").innerText;

    // Alert দেখানো
    alert(`Calling ${serviceName} at ${serviceNumber}`);
    coins -= 20;
    coinDisplay.textContent = coins;

    // Call History-name + number + time)
    const historyItem = document.createElement("div");
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    historyItem.innerHTML = `<strong>${serviceName}</strong> - ${serviceNumber} <span class="time">(${timeString})</span>`;
    callHistory.appendChild(historyItem);
  });
});

// Clear History button
const clearBtn = document.getElementById("clear-history");
const callHistorys = document.getElementById("call-history");

clearBtn.addEventListener("click", function() {
  callHistory.innerHTML = ""; 
});

