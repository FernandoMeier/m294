document.addEventListener("DOMContentLoaded", () => {
    const decrementButton = document.getElementById("decrementButton");
    const incrementButton = document.getElementById("incrementButton");
    const displaySpan = document.getElementById("displaySpan");

    decrementButton.addEventListener("click", () => {
        displaySpan.innerText = parseInt(displaySpan.innerText) - 1;
    });
    incrementButton.addEventListener("click", () => {
        displaySpan.innerText = parseInt(displaySpan.innerText) + 1;
    });
});