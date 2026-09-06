
// Starting value
let count = 0;

// Get the counter from HTML
let counter = document.getElementById("counter");

// Increment button
document.getElementById("increment").onclick = function() {
    count = count + 1;
    counter.textContent = count;
};

// Decrement button
document.getElementById("decrement").onclick = function() {
    count = count - 1;
    counter.textContent = count;
};

// Reset button
document.getElementById("reset").onclick = function() {
    count = 0;
    counter.textContent = count;
};

