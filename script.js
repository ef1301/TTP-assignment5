var rows = 0;
var columns = 0;
var mainGrid = document.getElementById("main-grid");

//References the div that holds the grid
var grid = document.getElementsByTagName("table")[0];

function addRow(){
  rows += 1;
  let newRow = document.createElement("tr");

  //Populate the row with squares
  for (let i = 0; i < columns; i++){
    let cell = document.createElement("td");
    newRow.appendChild(cell);
    console.log("added row");
  }
  grid.appendChild(newRow);
}


function addCol(){
  columns += 1;
  let newCol = document.createElement("tr");

  //Populate the col with squares
  for(let i = 0; i < rows; i++){
    let cell = document.createElement("td");
    newCol.appendChild(cell);
    console.log("added col");
  }
  grid.appendChild(newCol);
}


function deleteRow(){
  if(rows > 0){
    grid.deleteRow(0);
    rows--;
  }
  alert("You don't have any more rows to remove!");
}

function deleteColumn(){
    let rows = document.getElementsByTagName("tr");
    if(columns > 0){
	for(let i = 0; i < rows.length; i++){
	    rows[i][rows.length - 1].removeCell();
	}
	columns -= 1;
    }
    alert("You don't have any more columns to remove!");
    
}

function clearAll(){
    let rows = document.getElementsByTagName("tr");
    for(let i = 0; i < rows.length; i++){
	grid.deleteRow(i);
    }
    rows = 0;
    columns = 0;
}

document.getElementById("addRow").addEventListener(onclick, addRow);
document.getElementById("addColumn").addEventListener(onclick, addCol);

document.getElementById("removeRow").addEventListener(onclick, deleteRow);
document.getElementById("removeColumn").addEventListener(onclick, deleteColumn);
document.getElementById("clear").addEventListener(onclick, clearAll);
