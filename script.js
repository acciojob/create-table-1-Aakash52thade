function insert_Row() {
  const table = document.getElementById("sampleTable");

  // Create a new <tr> element
  const newRow = document.createElement("tr");

  // Create first <td> and add text
  const cell1 = document.createElement("td");
  cell1.textContent = "New Cell1";

  // Create second <td> and add text
  const cell2 = document.createElement("td");
  cell2.textContent = "New Cell2";

  // Append both <td>s to the <tr>
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);

  // Insert new row at the top of the table
  table.insertBefore(newRow, table.rows[0]); // <- safer than firstChild
}
