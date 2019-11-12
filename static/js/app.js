
// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var newbod = document.getElementById('newbody')

// YOUR CODE HERE!
// Append the data to the html table
data.forEach(function(table){
    var row = tbody.append('tr')

    Object.entries(table).forEach(function([key, value]){
        var cell = row.append('td')
        cell.text(value);
    })
});

// filter the table
var button = d3.select('#button');
button.on('click', function(){
    
    var inputElement = d3.select('#datetime')

    var inputValue = inputElement.property('value')
    // console.log(inputValue)
    // console.log(tableData)

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    // console.log(filteredData);

    tableHTML = "";
    filteredData.forEach(row => {
      tableHTML += `<tr><td>${row.datetime}</td><td>${row.city}</td><td>${row.state}</td><td>${row.country}</td><td>${row.shape}</td><td>${row.durationMinutes}</td><td>${row.comments}</td></tr>`;
    })
    newbod.innerHTML = tableHTML;
});


function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("ufo-table");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


