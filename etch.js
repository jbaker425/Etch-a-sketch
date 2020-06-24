function draw(e) {
    e.target.style.backgroundColor = "black";
}

function clear(){
    console.log("Here");
    var gridSquares = document.getElementsByClassName("grid-item");
    for (var i = 0; i < gridSquares.length; i++) {
        gridSquares.item(i).style.backgroundColor = "lightgray";
      } 
    //document.getElementById("gc1").children.style.backgroundColor = "lightgray";
}

var container = document.getElementById("gc1");
const size = Math.pow(16,2);

for (var i = 0; i < size; i++) {
    var node = document.createElement('div');
    //node.id = 'd' + i.toString();
    node.class = "grid-item";
    //node.innerText = i;
    container.appendChild(node).className = "grid-item";
}

container.addEventListener("mouseover", draw);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);