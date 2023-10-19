
const url = "https://archive-api.open-meteo.com/v1/archive?latitude=40.71,34.05,39.9,51.5,23.55&longitude=74,118.24,116.4,0.12,46.63&start_date=2010-01-01&end_date=2019-12-31&hourly=temperature_2m"

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

d3.json(url).then(function(data){
    console.log(data);
});


// Define a function to initialize the webpage
function init() {
  // Reference to the dropdown
  let dropdown = d3.select("#selDataset");
  // Load the JSON data from webpage
  d3.json("https://archive-api.open-meteo.com/v1/archive?latitude=40.71,34.05,39.9,51.5,23.55&longitude=74,118.24,116.4,0.12,46.63&start_date=2010-01-01&end_date=2019-12-31&hourly=temperature_2m").then((data) => {
      // to populate the dropdown menu 
      let sampleLocation = data.location;
      sampleLocation.forEach((location) => {
          dropdown.append("option").text(location).property("value", location);
      });
      console.log(sampleLocation)

      // Initial charts with the first 
      let initialLocation = sampleLocation[0];
      createCharts(initialLocation);
      displayMetadata(initialLocation);
    });
};


init();

// Function to update all the plots when new dropdown selection made
function optionChanged(newLocation) {
    createCharts(newLocation);
    displayMetadata(newLocation);
};


// Define a function to create Bar charts based on the top ten sample
function createCharts(location) {
  d3.json("https://archive-api.open-meteo.com/v1/archive?latitude=40.71,34.05,39.9,51.5,23.55&longitude=74,118.24,116.4,0.12,46.63&start_date=2010-01-01&end_date=2019-12-31&hourly=temperature_2m").then((data) => {
      // Filter data for the selected latitude
      let selectedLocation = data.locations.filter(s => s.id === location)[0];
      console.log(selectedLocation)

      // Horizontal bar chart for top 10 data for each samples
      let barData = [{
          type: "bar",
          x: selectedLocation.precipittion.slice(0, 10).reverse(),
          y: selectedLocation.time.slice(0, 10).map(id => `OTU ${id}`).reverse(),
          orientation: "v"
      }];
      let barLayout = {
          title: "Precipition",
          xaxis: { title: "Time" }
      };
      Plotly.newPlot("bar", barData, barLayout);

      let lineData = [{
          type: "line",
          x: selectedLocation.temperature_2m,
          y: selectedLocation.time
      }];
          
      let lineLayout = {
          title: "Temperature",
          xaxis: { title: "Time" }
      };
      Plotly.newPlot("bar", lineData, lineLayout);
    });
};

    /*
      const config = {
        type: 'polarArea',
        data: data,
        options: {}
      };
    
 
      /*
         // Bubble chart to see all data in each sample
         let bubbleData = [{
          type: "scatter",
          x: selectedSample.otu_ids,
          y: selectedSample.sample_values,
          text: selectedSample.otu_labels,
          mode: "markers",
          marker: {
              size: selectedSample.sample_values,
              color: selectedSample.otu_ids
          }
      }];
      let bubbleLayout = {
          title: "OTU Bubble Chart",
          xaxis: { title: "OTU ID" },
          yaxis: { title: "Sample Values" }
      };
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
};

// Define a function to display demographic info
function displayMetadata(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let metadata = data.metadata.filter(m => m.id == sample)[0];
      console.log(metadata)
      let metadataPanel = d3.select("#sample-metadata");
      // to only show the current data in the panel
      metadataPanel.html("");
      Object.entries(metadata).forEach(([name, value]) => {
          metadataPanel.append("p").text(`${name}: ${value}`);
      });
  });
}


// Function to update all the plots when new dropdown selection made
function optionChanged(newLocation) {
  createCharts(newLocation);
  displayMetadata(newLocation);
}
*/