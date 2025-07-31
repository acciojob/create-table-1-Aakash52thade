function insert_Row() {
  const table = document.getElementById("sampleTable");

  // Create a new row
  const newRow = document.createElement("tr");

  // Create and fill the left cell
  const cell1 = document.createElement("td");
  cell1.textContent = "New Cell1";

  // Create and fill the right cell
  const cell2 = document.createElement("td");
  cell2.textContent = "New Cell2";

  // Append both cells to the row
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);

  // Insert the row at the top of the table
  table.insertBefore(newRow, table.firstChild);
}
