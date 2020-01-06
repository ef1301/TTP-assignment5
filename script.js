var rows = 0;
var columns = 0;
var mainGrid = document.getElementById("main-grid");

//References the div that holds the grid
var grid = document.getElementsByTagName("table")[0];
console.log(grid);

function deleteRow(){

}

function deleteColumn(){

}

function addRow(){
  let newRow = document.createElement("tableRow");

  //Populate the row with squares
  for (let i = 0; i < columns; i++){
    let cell = document.createElement("tableCol");
    newRow.appendChild(cell);
    console.log("added row");
  }
  mainGrid.appendChild(newRow);
  rows++;
}

function addCol(){
  let newCol = document.createElement("tableCol");

  //Populate the col with squares
  for(let i = 0; i < rows; i++){
    let cell = document.createElement("tableRow");
    newCol.appendChild(cell);
    console.log("added col");
  }
  mainGrid.appendChild(newCol);
  columns++;
}
