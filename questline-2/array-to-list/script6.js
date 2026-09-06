
// Create an array
let things = [
    "Reading Books",
    "Coding",
    "Watching Movies and Dramas",
    "Listening to Music"
];

// Get the list from HTML
let list = document.getElementById("myList");

// Go through each item in the array
things.forEach(function(item) {

    // Create a new list item
    let listItem = document.createElement("li");

    // Add the item to the list
    listItem.textContent = item;

    // Display it on the webpage
    list.appendChild(listItem);
});

