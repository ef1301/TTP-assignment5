var rows = 0;
var columns = 0;
var grid = document.getElementsByTagName("table")[0];
var currentColor = document.getElementById("myColor");

// References the div that holds the grid
var grid = document.getElementsByTagName("table")[0];

function addRow(){
    let newRow = document.createElement("tr");
    
    // edge case: the table is empty
    if (columns == 0) columns = 1;
    
    // Populate the row with squares
    for (let i = 0; i < columns; i++){
	let cell = document.createElement("td");
	newRow.appendChild(cell);
    }
    grid.appendChild(newRow);
    console.log("added row");
    rows += 1;
}


function addCol(){
    let tableRows = document.getElementsByTagName("tr");

    // edge case: there are no rows to add a cell to
    if (rows == 0) {
	    grid.appendChild(document.createElement("tr"));
	    rows++;
    }
    
    // Populate the col with squares
    for(let i = 0; i < rows; i++){
	let cell = document.createElement("td");
	tableRows[i].appendChild(cell);
    }
    console.log("added col");
    columns += 1;
}


function deleteRow(){
    if(rows > 0){
	grid.deleteRow(0);
	rows--;
	if(rows == 0){
	    columns = 0;
	}
    }
    else{
	alert("You don't have any more rows to remove!");
    }
}

function deleteColumn(){
    let rows = document.getElementsByTagName("tr");
    if(columns > 0){
	for(let i = 0; i < rows.length; i++){
	    rows[i].deleteCell(0);
	}
	columns--;
	if(columns == 0){
	    rows = 0;
	}
    }
    else{
	alert("You don't have any more columns to remove!");
    }
}

function clearAll(){
    for(let i = 0; i < rows; i++){
	grid.deleteRow(0);
    }
    rows = 0;
    columns = 0;
}

function fillAll(){
  //let parent = document.getElementsByTagName("table");
  //var arr = Array.prototype.slice.call( document.getElementsByTagName("table") )
  console.log(Array.prototype.slice.call( document.getElementsByTagName("table") ));
}

document.getElementById("addRow").addEventListener(onclick, addRow);
document.getElementById("addColumn").addEventListener(onclick, addCol);

document.getElementById("removeRow").addEventListener(onclick, deleteRow);
document.getElementById("removeColumn").addEventListener(onclick, deleteColumn);
document.getElementById("clear").addEventListener(onclick, clearAll);

document.getElementById("fillAll").addEventListener(onclick, fillAll);

//console.log(Array.prototype.slice.call( document.getElementsByTagName("table") ));

