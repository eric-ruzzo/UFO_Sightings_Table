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

// Clear the input value
d3.select("#filter-btn").node().value = "";

// Create a function that runs when button is clicked
submit.on("click", function() {

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select input element
    var inputElement = d3.selectAll(".form-control");
    console.log(inputElement);

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

// Create array for additional filters
/*var newFilters = ["City", "State", "Country", "Shape"];

// Select ul tag to append list items for each filter value
var filterSection = d3.select("ul");

// Create function to add filter bars dynamically
function addFilters() {
    
    // Loop through array of filter values
    for (var i = 0; i < newFilters.length; i++) {
        
        // Append an li for each filter value
        var li = filterSection.append("li").attr("class", "filter list-group-item");
        
        // Add label tag to li
        var label = li.append("label").attr("for", newFilters[i].toLowerCase()).text(`Enter a ${newFilters[i]}`);
        
        // Add input tag to li
        var input = li.append("input").attr("class", "form-control").attr("id", `${newFilters[i].toLowerCase()}`).attr("type", "text").attr("placeholder", `${newFilters[i].toLowerCase()}`);
    };
};

addFilters()*/