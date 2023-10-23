// Get the nyc endpoint
const nyc_api = "/api/v1.0/NewYorkCity";

// Fetch the JSON data and console log it
d3.json(nyc_api).then(function(data) {
  console.log("show nyc data:", data);
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];

  //if (dataset === 'NYC') {
    let barData = {
      type: "bar",
      x: data.date,
      y: data.map(row => row.nyc_prcp)
  };
  let barLayout = {
      title: "Precipition",
      xaxis: { title: "Date" }
  }
 // Note the extra brackets around 'x' and 'y'
 Plotly.newPlot("plot", [barData], barLayout);
//}


});

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  
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
 // Note the extra brackets around 'x' and 'y'
 Plotly.newPlot("plot", [barData], barLayout);
}
}
/*init();

  /*else if (dataset === 'Beijeing') {
      let barLayout = {
          title: "Precipition",
          xaxis: { title: "Date" }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();


// Get the capsules endpoint
const capsules = "https://api.spacexdata.com/v3/capsules";

// Fetch the JSON data and console log it
d3.json(capsules).then(function(data) {
  console.log(data);
});


console.log("show data:",data)

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
