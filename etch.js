/*  
    James Baker
    6/23/20
    jamesbaker425@gmail.com
*/

//Change grid square's color to black
function draw(e) {
    e.target.style.backgroundColor = "black";
}

//Make all of the grid squares the original lightgray color
function clear(){
    var gridSquares = document.getElementsByClassName("grid-item");
    for (var i = 0; i < gridSquares.length; i++) {
        gridSquares.item(i).style.backgroundColor = "lightgray";
    } 
}

//Populate grid-container with grid squares
var container = document.getElementById("gc1");
const size = Math.pow(16,2);

for (var i = 0; i < size; i++) {
    var node = document.createElement('div');
    node.class = "grid-item";
    container.appendChild(node).className = "grid-item";
}

//Set up event listeners for drawing on hover and the clear button
container.addEventListener("mouseover", draw);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
