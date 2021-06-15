// from data.js
var tableData = data;

// YOUR CODE HERE!

var form = d3.select('#form');

form.on('submit',runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

    var sightingdate = filteredData.map(sighting => sighting.datetime);
    var sightingcity = filteredData.map(sighting => sighting.city);
    var sightingstate = filteredData.map(sighting => sighting.state);
    var sightingcountry = filteredData.map(sighting => sighting.country);
    var sightingshape = filteredData.map(sighting => sighting.shape);
    var sightingduration = filteredData.map(sighting => sighting.durationMinutes);
    var sightingcomments = filteredData.map(sighting => sighting.comments);
    
    console.log(sightingcity);

    var table = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];
    
    var Table = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];
    Table.innerHTML = "";  

    var i;
    for (i = 0; i < filteredData.length; i++) {
        var row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = sightingdate[i];
        cell2.innerHTML = sightingcity[i];
        cell3.innerHTML = sightingstate[i];
        cell4.innerHTML = sightingcountry[i];
        cell5.innerHTML = sightingshape[i];
        cell6.innerHTML = sightingduration[i];
        cell7.innerHTML = sightingcomments[i];
    }
}

