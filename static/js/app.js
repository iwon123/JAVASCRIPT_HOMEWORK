
// from data.js
var tableData = data;
var tbody = d3.select('tbody');

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
var insert = d3.select('#datetime')
var button = d3.select('#filter-btn')

function filtered(){
  var newtable = tableData.filter(table => table.datetime === insert.property('value'))

  newtable.forEach(function(newtable2){
    var row = tbody.append('tr')

    Object.entries(newtable2).forEach(function([key,value]){
      var cell = row.append('td')
      cell.text(value)
    })
  })
}



