// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use d3 to select the table
var table = d3.select("table");

// Use d3 to select the table body
var tbody = d3.select("tbody");

// Loop through data with forEach to find values for table
tableData.forEach((sighting) => {
        
    // Append a table row for each data array
    var row = tbody.append("tr");

    // Loop through each key value pair in each array
    Object.entries(sighting).forEach(([key,value]) => {
    
        // Add each value in cell in new row
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Select "filter table" button and store as a variable
var submit = d3.select("#filter-btn");

// Create a function that runs when button is clicked
submit.on("click", function() {

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select input element
    var inputElement = d3.select("#datetime");

    // Get the value property of input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Filter data to match input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    d3.selectAll("td").remove();

    filteredData.forEach((sighting) => {
        console.log(sighting);
        
        // Append a table row for each data array
        var row = tbody.append("tr");
    
        // Loop through each key value pair in each array
        Object.entries(sighting).forEach(([key,value]) => {
        
            // Add each value in cell in new row
            var cell = tbody.append("td");
            console.log(value);
            cell.text(value);
        });
    });
});