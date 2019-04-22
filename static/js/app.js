// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use d3 to select the table
var table = d3.select("table");

// Use d3 to select the table body
var tbody = d3.select("tbody");

// Loop through data with forEach to find values for table
tableData.forEach((sighting) => {
    console.log(sighting);
        
    // Append a table row for each set of data
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(([key,value]) => {
    
        // Add data in each cell in new row
        var cell = tbody.append("td");
        cell.text(value);
    });
});