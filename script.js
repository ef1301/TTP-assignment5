let rows = 0;
let columns = 0;
let grid = document.getElementsByTagName("table")[0];
let currentColor = document.getElementById("myColor").value;

function changeColor(){
    currentColor = document.getElementById("myColor").value;
}

function bgColor(element){
    element.style.backgroundColor = currentColor;
}

function addRow(){
    let newRow = document.createElement("tr");
    
    // edge case: the table is empty
    if (columns == 0) columns = 1;
    
    // Populate the row with squares
    for (let i = 0; i < columns; i++){
	let cell = document.createElement("td");
	cell.onclick = function () { cell.style.backgroundColor = currentColor;};
	newRow.appendChild(cell);
    }
    grid.appendChild(newRow);
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
	cell.onclick = function () { cell.style.backgroundColor = currentColor;};
	tableRows[i].appendChild(cell);
    }
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
    console.log(rows);
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

function uncoloredFill(){
    let tableRows = document.getElementsByTagName("tr");
    //console.log(tableRows[0].children[0]);
    for(let i = 0; i < rows; i++){
	for(let j = 0; j < columns; j++){
	    if(tableRows[i].children[j].style.backgroundColor == ""){
		tableRows[i].children[j].style.backgroundColor = currentColor;
	    }
	}
    }
}

function fill(){
    let tableRows = document.getElementsByTagName("tr");
    console.log(tableRows[0].children[0]);
    for(let i = 0; i < rows; i++){
	for(let j = 0; j < columns; j++){
	    tableRows[i].children[j].style.backgroundColor = currentColor;
	}
    }
}

document.getElementById("addRow").addEventListener(onclick, addRow);
document.getElementById("addColumn").addEventListener(onclick, addCol);

document.getElementById("removeRow").addEventListener(onclick, deleteRow);
document.getElementById("removeColumn").addEventListener(onclick, deleteColumn);
document.getElementById("clear").addEventListener(onclick, clearAll);

document.getElementById("fillAll").addEventListener(onclick, fill);
document.getElementById("fillUncolored").addEventListener(onclick, uncoloredFill);
document.getElementById("myColor").addEventListener("change", changeColor);
