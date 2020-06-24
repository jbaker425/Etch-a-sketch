/*  
    James Baker
    6/23/20
    jamesbaker425@gmail.com
*/

//Size of one side of the grid we are drawing on 
const GRIDSIZE = 960;

//Create grid-container  and populate it with grid squares.
//Parameter n is the number of squares per side
function createGrid(n){
    //Create container, empty it out if it already exists
    var container = document.getElementById("gc1");
    if(container.hasChildNodes()){
        container.innerHTML = "";
    }
    //Use constant for size of grid
    container.style.height = `${GRIDSIZE}px`;
    container.style.width = `${GRIDSIZE}px`;
    //size is the number of squares and squareSide is the size of the squares' sides
    const size = Math.pow(n,2);
    const squareSide = Math.ceil(GRIDSIZE/n);
    //Use grid template functions to setup the row and column sizes
    container.style.gridTemplateColumns = `repeat(${n}, ${squareSide}px)`;
    container.style.gridTemplateRows = `repeat(${n}, ${squareSide}px)`;
    //Populate the container with grid squares
    for (var i = 0; i < size; i++) {
        var node = document.createElement('div');
        node.style.height = `${squareSide}px`
        node.style.width = `${squareSide}px`
        container.appendChild(node).className = "grid-item";
    }
    //Set up event listeners for drawing on hover and the clear button
    container.addEventListener("mouseover", draw);

    document.getElementById("size").innerHTML = `Size=${n}`;

}

//Change grid square's color to black
function draw(e) {
    e.target.style.backgroundColor = "black";
}

//Make all of the grid squares the original lightgray color 
//and resize the grid based on the input from the user prompt
function clear(){
    //Make whole grid default color
    var gridSquares = document.getElementsByClassName("grid-item");
    for (var i = 0; i < gridSquares.length; i++) {
        gridSquares.item(i).style.backgroundColor = "lightgray";
    }
    //Resizing the grid
    var newSize = prompt("How many squares per side?", Math.sqrt(gridSquares.length));
    if (newSize < 1) {
        alert("Wrong input.")
        createGrid(16);
    }
    else if (newSize > 128) {
        alert("Large inputs will cause poor performance.")
        createGrid(128);
    }
    else {
        createGrid(newSize);
    }
}

createGrid(16);

//Set event listener on clear button
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
