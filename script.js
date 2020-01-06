var rows = 0;
var columns = 0;

//References the div that holds the grid
var grid = document.getElementsByTagName("table")[0];
//console.log(grid);

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
	    rows[i][rows.length - 1].remove;
	}
	columns--;
    }
    alert("You don't have any more columns to remove!");
    
}

function clearAll(){
    let rows = document.getElementsByTagName("tr");
    for(let i = 0; i < rows.length; i++){
	rows[i].remove;
    }
}

document.getElementById("removeRow").addEventListener(onclick, deleteRow);
document.getElementById("removeColumn").addEventListener(onclick, deleteColumn);
document.getElementById("clear").addEventListener(onclick, clearAll);
