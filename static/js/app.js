// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //empty tbody
    tbody.html("");

    //iterate through data, add values(td) to rows(tr)
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
	});

}

function handleClick() {

  
  function inputFilter(category){
    // Grab the input value from the filtered category
    let inputValue = d3.select(`#${category}`).property("value");

    // Check to see if an input was entered and filter the
    // data using that input value.
    if (inputValue) {
    // Apply `filter` to the table data to only keep the
    // rows where the data value matches the filter value
    filteredData = filteredData.filter(row => row[category] === inputValue);
    }
  };
  

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  let filteredData = tableData;
  var categories = ["datetime", "city", "state", "country", "shape"]
  categories.forEach(i => inputFilter(i));


  buildTable(filteredData);
};

  
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);