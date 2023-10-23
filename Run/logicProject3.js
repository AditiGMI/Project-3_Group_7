
// Define the URLs to your JSON data for each city
const cityData = {
  NewYorkCity: {
    url: 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/nycdata.json',
    prcpKey: 'nyc_prcp',
    tempKey: 'nyc_max_temp',
  },
  Beijing: {
    url: 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/bjgdata.json',
    prcpKey: 'bjg_prcp',
    tempKey: 'bjg_max_temp',
  },
  London: {
    url: 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/lnddata.json',
    prcpKey: 'lnd_prcp',
    tempKey: 'lnd_max_temp',
  },
  Tokyo: {
    url: 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/tkydata.json',
    prcpKey: 'tky_prcp',
    tempKey: 'tky_max_temp',
  },
  MexicoCity: {
    url: 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/mxcdata.json',
    prcpKey: 'mxc_prcp',
    tempKey: 'mxc_max_temp',
  },
};

// Function to fetch JSON data and create charts
async function fetchDataAndCreateCharts(selectedCity) {
  try {
    // Fetch the JSON data for the selected city
    const cityInfo = cityData[selectedCity];
    const response = await fetch(cityInfo.url);
    const data = await response.json();

    // Create the bar chart for precipitation
    const dates = data.map(item => item.date);
    const precipitation = data.map(item => parseFloat(item[cityInfo.prcpKey]));
    const barData = {
      type: "bar",
      x: dates,
      y: precipitation,
    };
    const barLayout = {
      title: "Precipitation",
      xaxis: { title: "Date" },
      yaxis: { title: "Precipitation (mm)" },
    };
    Plotly.newPlot("barChart", [barData], barLayout);

    // Create the line chart for maximum temperature
    const maxTemperatures = data.map(item => parseFloat(item[cityInfo.tempKey]));
    const lineData = {
      type: "line",
      x: dates,
      y: maxTemperatures,
    };
    const lineLayout = {
      title: "Maximum Temperature",
      xaxis: { title: "Date" },
      yaxis: { title: "Temperature (°C)" },
    };
    Plotly.newPlot("lineChart", [lineData], lineLayout);

    // Display metadata
    displayMetadata(data.metadata);
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

// Function to handle dropdown change
function onCityChange() {
  const selectedCity = document.getElementById("cityDropdown").value;
  fetchDataAndCreateCharts(selectedCity);
}

// Event listener for dropdown change
document.getElementById("cityDropdown").addEventListener("change", onCityChange);

// Initialize the dashboard with the first city (e.g., New York City)
onCityChange();



/*
// Define the URLs to your JSON data
const nycdata = 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/nycdata.json';
const beijingdata = 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/bjgdata.json';
const londondata = 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/lnddata.json';
const tokyodata = 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/tkydata.json';
const mexicocitydata = 'https://raw.githubusercontent.com/AditiGMI/Project-3_Group_7/main/jsondata/mxcdata.json';

// Define a mapping of city names to data URLs
const dataUrls = {
  NewYorkCity: nycdata,
  Beijing: beijingdata,
  London: londondata,
  Tokyo: tokyodata,
  MexicoCity: mexicocitydata
};

// Function to fetch JSON data and create charts
async function fetchDataAndCreateCharts(selectedCity) {
  try {
    // Fetch the JSON data for the selected city
    const response = await fetch(dataUrls[selectedCity]);
    const data = await response.json();

    // Create the bar chart for precipitation
    const dates = data.map(item => item.date);
    const precipitation = data.map(item => parseFloat(item.nyc_prcp));
    const barData = {
      type: "bar",
      x: dates,
      y: precipitation,
    };
    const barLayout = {
      title: "Precipitation",
      xaxis: { title: "Date" },
      yaxis: { title: "Precipitation (mm)" },
    };
    Plotly.newPlot("barChart", [barData], barLayout);

    // Create the line chart for maximum temperature
    const maxTemperatures = data.map(item => parseFloat(item.nyc_max_temp));
    const lineData = {
      type: "line",
      x: dates,
      y: maxTemperatures,
    };
    const lineLayout = {
      title: "Maximum Temperature",
      xaxis: { title: "Date" },
      yaxis: { title: "Temperature (°C)" },
    };
    Plotly.newPlot("lineChart", [lineData], lineLayout);

    // Display metadata
    displayMetadata(data.metadata);
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

// Function to handle dropdown change
function onCityChange() {
  const selectedCity = document.getElementById("cityDropdown").value;
  fetchDataAndCreateCharts(selectedCity);
}

// Event listener for dropdown change
document.getElementById("cityDropdown").addEventListener("change", onCityChange);

// Initialize the dashboard with the first city (e.g., New York City)
onCityChange();




/*
let nycdata = 'https://github.com/AditiGMI/Project-3_Group_7/blob/main/jsondata/nycdata.json';
let beijingdata = ' https://github.com/AditiGMI/Project-3_Group_7/blob/main/jsondata/bjgdata.json';
let londondata = 'https://github.com/AditiGMI/Project-3_Group_7/blob/main/jsondata/lnddata.json';
let tokyodata = 'https://github.com/AditiGMI/Project-3_Group_7/blob/main/jsondata/tkydata.json';
let mexicocitydata = 'https://github.com/AditiGMI/Project-3_Group_7/blob/main/jsondata/mxcdata.json';

// Your JSON data
const cityData = {
  NewYorkCity: [nycdata],
  Beijing: [beijingdata],
  London: [londondata],
  Tokyo: [tokyodata],
  MexicoCity: [mexicocitydata]
};

// Function to create a bar chart for precipitation
function createPrecipitationBarChart(data) {
  const dates = data.map(item => item.date);
  const precipitation = data.map(item => parseFloat(item.nyc_prcp));

  const barData = {
      type: "bar",
      x: dates,
      y: precipitation,
  };

  const barLayout = {
      title: "Precipitation",
      xaxis: { title: "Date" },
      yaxis: { title: "Precipitation (mm)" },
  };

  Plotly.newPlot("barChart", [barData], barLayout);
}

// Function to create a line chart for maximum temperature
function createTemperatureLineChart(data) {
  const dates = data.map(item => item.date);
  const maxTemperatures = data.map(item => parseFloat(item.nyc_max_temp));

  const lineData = {
      type: "line",
      x: dates,
      y: maxTemperatures,
  };

  const lineLayout = {
      title: "Maximum Temperature",
      xaxis: { title: "Date" },
      yaxis: { title: "Temperature (°C)" },
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
  const selectedCityData = cityData[selectedCity];

  createPrecipitationBarChart(selectedCityData);
  createTemperatureLineChart(selectedCityData);
  displayMetadata({ city: selectedCity }); // Display city metadata (you can add more metadata here)
}

// Event listener for dropdown change
document.getElementById("cityDropdown").addEventListener("change", onCityChange);

// Initialize the dashboard with the first city (e.g., New York City)
onCityChange();




/*
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
