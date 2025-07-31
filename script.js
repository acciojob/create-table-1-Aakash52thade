function insert_Row() {
    //Write your code here
	
  const table = document.getElementById("sampleTable");


  let newRow = document.createElement("tr");

  let Cell1 = document.createElement("td");
  Cell1.textContext = "New Cell1";

   let newRow2 = document.createElement("tr");
   let Cell2 = document.createElement("td");
   Cell1.textContext = "New Cell2";

	newRow.appendChild(cell1);
    newRow.appendChild(cell2);

	table.insertBefore(newRow, table.firstChild);
  
  
}
