
let boxes = document.getElementById("boxes");

let horizontalButton = document.getElementById("horizontal");
let verticalButton = document.getElementById("vertical");

// Horizontal button
horizontalButton.onclick = function() {

    boxes.classList.remove("vertical");
    boxes.classList.add("horizontal");

};

// Vertical button
verticalButton.onclick = function() {

    boxes.classList.remove("horizontal");
    boxes.classList.add("vertical");

};
