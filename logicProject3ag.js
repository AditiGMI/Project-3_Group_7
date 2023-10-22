let dates = data.map(function(row){
    return row.date
})
    let lineData = {
        type: "line",
        x: dates.slice(),
        y: data.map(row => row.nyc_max_temp),
    };
              
    let lineLayout = {
        title: "Temperature",
        xaxis: { title: "Date" }
    };
    Plotly.newPlot("plot", [lineData], lineLayout);

    let barData = {
        type: "bar",
        x: dates,
        y: data.map(row => row.nyc_prcp)
    };
    let barLayout = {
        title: "Precipition",
        xaxis: { title: "Date" }
    };

    Plotly.newPlot("plot1", [barData], barLayout);
    
   /* // Get the Roadster endpoint
const roadster = "https://127.0.0.1:5000/api/v1.0/NewYorkCity";

// Fetch the JSON data and console log it
d3.json(roadster).then(function(data) {
  console.log(data);
});*/

// Define a function to initialize the webpage
function init() {
  // Reference to the dropdown
  let dropdown = d3.select("#selDataset");
  //console.log(data);
  // Load the JSON data from webpage
  //d3.json(data).then((data) => {
    //console.log(data);
      // to populate the dropdown menu 
      data.forEach((nyc_max_temp) => {
        console.log(nyc_max_temp);
        sampleLocation = nyc_max_temp[nyc_max_temp]

      
      //let sampleLocation = data.nyc_max_temp;
      console.log(sampleLocation);
      sampleLocation.forEach((nyc_max_temp) => {
          dropdown.append("option").text(nyc_max_temp).property("value", nyc_max_temp);
      });
    });
      //console.log(sampleLocation)

      // Initial charts with the first 
      let initialLocation = sampleLocation[0];
      createCharts(initialLocation);
      displayMetadata(initialLocation);
    };


init();
/*
// Get the capsules endpoint
const capsules = "https://127.0.0.1:5000/api/v1.0/NewYorkCity";

// Fetch the JSON data and console log it
d3.json(capsules).then(function(data) {
  console.log(data);
});

console.log("show data:",data)
/*
// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    let x = [];
    let y = [];
  
    if (dataset === 'NYC') {
      let barData = {
        type: "bar",
        x: dates,
        y: data.map(row => row.nyc_prcp)
    };
    let barLayout = {
        title: "Precipition",
        xaxis: { title: "Date" }
    }
  
    else if (dataset === 'Beijeing') {
        let barLayout = {
            title: "Precipition",
            xaxis: { title: "Date" }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();

let dates = data.map(function (row){
    return row.date
});
console.log("Dates:",dates);

let barData = {
    type: "bar",
    x: dates,
    y: data.map(row => row.nyc_prcp)
};
let barLayout = {
    title: "Precipition",
    xaxis: { title: "Date" }
};
Plotly.newPlot("plot", [barData], barLayout);
/*
let lineData = {
    type: "line",
    x: dates,
    y: data.map(row => row.nyc_max_temp),
};
          
let lineLayout = {
    title: "Temperature",
    xaxis: { title: "Date" }
};
Plotly.newPlot("plot", [lineData], lineLayout);
*/
