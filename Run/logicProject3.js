let nycdata = 'nycdata.json';
let beijingdata = 'bjgdata.json';
let londondata = 'lnddata.json';
let tokyodata = 'tkydata.json';
let mexicocitydata = 'mxcdata.json';

// Define an object to store weather data
const weatherData = {
  NewYorkCity: {
      metadata: {
          city: "New York City",
          country: "USA",
      },
      data: [nycdata],
  },
  Beijing: {
      metadata: {
          city: "Beijing",
          country: "China",
      },
      data: [beijingdata],
  },
  London: {
      metadata: {
          city: "London",
          country: "UK",
      },
      data: [londondata],
  },
  Tokyo: {
      metadata: {
          city: "Tokyo",
          country: "Japan",
      },
      data: [tokyodata],
  },
  MexicoCity: {
      metadata: {
          city: "Mexico City",
          country: "Mexico",
      },
      data: [mexicocitydata],
  },
};

// Function to create a bar chart
function createBarChart(cityData) {
  // Define x and y values for the bar chart
  const x = cityData.data.map(d => d.date);
  const y = cityData.data.map(d => d.prcp);
  
  const barData = {
      type: "bar",
      x: x,
      y: y,
  };
  
  const barLayout = {
      title: "Precipitation",
      xaxis: { title: "Date" },
  };
  
  Plotly.newPlot("barChart", [barData], barLayout);
}

// Function to create a line chart
function createLineChart(cityData) {
  // Define x and y values for the line chart
  const x = cityData.data.map(d => d.date);
  const y = cityData.data.map(d => d.temp);
  
  const lineData = {
      type: "line",
      x: x,
      y: y,
  };
  
  const lineLayout = {
      title: "Temperature",
      xaxis: { title: "Date" },
  };
  
  Plotly.newPlot("lineChart", [lineData], lineLayout);
}

// Function to display metadata
function displayMetadata(metadata) {
  const metadataDiv = document.getElementById("metadata");
  metadataDiv.innerHTML = ""; // Clear previous metadata

  for (const key in metadata) {
      const p = document.createElement("p");
      p.textContent = `${key}: ${metadata[key]}`;
      metadataDiv.appendChild(p);
  }
}

// Function to handle dropdown change
function onCityChange() {
  const selectedCity = document.getElementById("cityDropdown").value;
  const cityData = weatherData[selectedCity];
  createBarChart(cityData);
  createLineChart(cityData);
  displayMetadata(cityData.metadata);
}

// Event listener for dropdown change
document.getElementById("cityDropdown").addEventListener("change", onCityChange);

// Initial setup using the first city (e.g., New York City)
onCityChange();


/*
console.log(data)


// Fetch the JSON data and console log it
d3.json(data).then(function(data) {
  console.log("show nyc data:", data);
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  dropdownMenu.on("change", updatePlotly); 

  // Initialize x and y arrays
  let a = data.date;
  let b = data.map(row => row.nyc_max_temp);

  let lineData = {
    type: "line",
    x: a,
    y: b
  }
  let lineLayout = {
    title: "Maximum Temperature",
    xaxis: { title: "Date" }
  }
  Plotly.newPlot("plot1", [lineData], lineLayout);

    // Initialize x and y arrays
  let x = data.date;
  let y = data.map(row => row.nyc_prcp);
  
    let barData = {
      type: "bar",
      x: x,
      y: y
  }
  let barLayout = {
      title: "Precipition",
      xaxis: { title: "Date" }
  }
  Plotly.newPlot("plot", [barData], barLayout);
  


/*
// This function is called when a dropdown menu item is selected
function updatePlotly() {
  let dropdownMenu = d3.select("#selDataset");
  let dataset = dropdownMenu.property("value");

  if(dataset === 'New York City'){
    var c = data.date;
    var d = data.map(row => row.nyc_prcp);
  
    let barData = {
      type: "bar",
      x: c,
      y: d
    }
    let barLayout = {
      title: "Precipition",
      xaxis: { title: "Date" }
    }

    Plotly.newPlot("plot", [barData], barLayout);
    // Initialize x and y arrays
    let e = data.date;
    let f = data.map(row => row.nyc_max_temp);

    let lineData = {
      type: "line",
      x: e,
      y: f
    }
    let lineLayout = {
      title: "Maximum Temperature",
      xaxis: { title: "Date" }
    }
    
    Plotly.newPlot("plot1", [lineData], lineLayout);
  }
  // Update the plot with Beijing data
  else if (dataset === 'Beijing') {
    // Define the necessary data for Beijing and update the plot accordingly
    let g = data.date;
    let h = data.map(row => row.bjg_prcp);
  
    let barData = {
      type: "bar",
      x: g,
      y: h
    }
    let barLayout = {
      title: "Precipition",
      xaxis: { title: "Date" }
    }

    Plotly.newPlot("plot", [barData], barLayout);

    // Initialize x and y arrays
    let i = data.date;
    let j = data.map(row => row.bjg_max_temp);

    let lineData = {
      type: "line",
      x: i,
      y: j
    }
    let lineLayout = {
      title: "Maximum Temperature",
      xaxis: { title: "Date" }
    }
  
      Plotly.newPlot("plot1", [lineData], lineLayout);
  }
  /*
  // Update the plot with London data
  else if (dataset === 'London') {
    // Define the necessary data for Beijing and update the plot accordingly
    let x = data.date;
    let y = data.map(row => row.lnd_prcp);
    
    let barData = {
      type: "bar",
      x: x,
      y: y
    }
    let barLayout = {
      title: "Precipition",
      xaxis: { title: "Date" }
    }
    Plotly.newPlot("plot", [barData], barLayout);
  
    // Initialize x and y arrays
    let a = data.date;
    let b = data.map(row => row.lnd_max_temp);
  
    let lineData = {
      type: "line",
      x: a,
      y: b
    }
    let lineLayout = {
      title: "Maximum Temperature",
      xaxis: { title: "Date" }
    }
    Plotly.newPlot("plot1", [lineData], lineLayout);
  }
  // Update the plot with Tokyo data
  else if (dataset === 'Tokyo') {
    // Define the necessary data for Beijing and update the plot accordingly
    let x = data.date;
    let y = data.map(row => row.tky_prcp);
    
    let barData = {
      type: "bar",
      x: x,
      y: y
    }
    let barLayout = {
      title: "Precipition",
      xaxis: { title: "Date" }
    }
    Plotly.newPlot("plot", [barData], barLayout);
  
    // Initialize x and y arrays
    let a = data.date;
    let b = data.map(row => row.tky_max_temp);
  
    let lineData = {
      type: "line",
      x: a,
      y: b
    }
    let lineLayout = {
      title: "Maximum Temperature",
      xaxis: { title: "Date" }
    }
    Plotly.newPlot("plot1", [lineData], lineLayout);
  }
  // Update the plot with Tokyo data
  else if (dataset === 'Mexico City') {
    // Define the necessary data for Beijing and update the plot accordingly
    let x = data.date;
    let y = data.map(row => row.mxc_prcp);
    
    let barData = {
      type: "bar",
      x: x,
      y: y
    }
    let barLayout = {
      title: "Precipition",
      xaxis: { title: "Date" }
    }
    Plotly.newPlot("plot", [barData], barLayout);
  
    // Initialize x and y arrays
    let a = data.date;
    let b = data.map(row => row.mxc_max_temp);
  
    let lineData = {
      type: "line",
      x: a,
      y: b
    }
    let lineLayout = {
      title: "Maximum Temperature",
      xaxis: { title: "Date" }
    }
    Plotly.newPlot("plot1", [lineData], lineLayout);
  }
  
  else return (dataset === 'Please select a city');
};

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
