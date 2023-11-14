
const cityData = {
  NewYorkCity: {
    url: "http://127.0.0.1:5000/api/v1.0/NewYorkCity",
    prcpKey: 'nyc_prcp',
    tempKey: 'nyc_max_temp',
    color: 'rgba(139, 0, 0, 0.6)',
  },
  Beijing: {
    url: "http://127.0.0.1:5000/api/v1.0/Beijing",
    prcpKey: 'bjg_prcp',
    tempKey: 'bjg_max_temp',
    color: 'rgba(0, 0, 139, 0.6)',
  },
  London: {
    url: "http://127.0.0.1:5000/api/v1.0/London",
    prcpKey: 'lnd_prcp',
    tempKey: 'lnd_max_temp',
    color: 'rgba(0, 100, 0, 0.6)',
  },
  Tokyo: {
    url: "http://127.0.0.1:5000/api/v1.0/Tokyo",
    prcpKey: 'tky_prcp',
    tempKey: 'tky_max_temp',
    color: 'rgba(184, 134, 11, 0.6)',
  },
  MexicoCity: {
    url: "http://127.0.0.1:5000/api/v1.0/MexicoCity",
    prcpKey: 'mxc_prcp',
    tempKey: 'mxc_max_temp',
    color: 'rgba(72, 61, 139, 0.6)',
  },
  Zurich: {
    url: "http://127.0.0.1:5000/api/v1.0/Zurich",
    prcpKey: 'zch_prcp',
    tempKey: 'zch_max_temp',
    color: 'rgba(0, 139, 139, 0.6)',
  },
  Honolulu: {
    url: "http://127.0.0.1:5000/api/v1.0/Honolulu",
    prcpKey: 'hnl_prcp',
    tempKey: 'hnl_max_temp',
    color: 'rgba(255, 140, 0, 0.6)',
  },
  Reykjavik: {
    url: "http://127.0.0.1:5000/api/v1.0/Reykjavik",
    prcpKey: 'ryk_prcp',
    tempKey: 'ryk_max_temp',
    color: 'rgba(139, 0, 139, 0.6)',
  },
  Hobart: {
    url: "http://127.0.0.1:5000/api/v1.0/Hobart",
    prcpKey: 'hbt_prcp',
    tempKey: 'hbt_max_temp',
    color: 'rgba(139, 69, 19, 0.6)',
  },
  Funchal: {
    url: "http://127.0.0.1:5000/api/v1.0/Funchal",
    prcpKey: 'fcl_prcp',
    tempKey: 'fcl_max_temp',
    color: 'rgba(0, 206, 209, 0.6)',
  },
};


// Function to fetch JSON data and create charts
async function fetchDataAndCreateCharts(selectedCity) {
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
    marker: { color: cityInfo.color },
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
    marker: { color: cityInfo.color },
  };
  const lineLayout = {
    title: "Maximum Temperature",
    xaxis: { title: "Date" },
    yaxis: { title: "Temperature (°C)" },
  };
  Plotly.newPlot("lineChart", [lineData], lineLayout);
}

function dropdownmenu() {
  // Use D3 to select the dropdown menu
  let dropdownmenu = d3.select("#cityDropdown");
  let city_names = ["NewYorkCity", "Beijing", "London", "Tokyo", "MexicoCity", "Zurich", "Honolulu", "Reykjavik", "Hobart", "Funchal"]

  city_names.forEach((sample) => {
    dropdownmenu
      .append("option")
      .text(sample)
      .property("value", sample);
  });
}
dropdownmenu()

function optionChanged(sample) {
  fetchDataAndCreateCharts(sample);
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


// Create a map object.
let myMap = L.map("map", {
  center: [40.4168, 3.7038],
  zoom: 3
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each city's name, location, and population
let cities = [{
  location: [40.7128, -74.0059],
  name: "New York City",
  population: "8.468 million",
  co_emission: "128.68",
  uv_index: "1.49"
},
{
  location: [39.9042, 116.4074],
  name: "Beijing",
  population: "21.54 million",
  co_emission: "1424.39",
  uv_index: "0.91"
},
{
  location: [51.5072, 0.1276],
  name: "London",
  population: "8.982 million",
  co_emission: "186.73",
  uv_index: "0.63"
},
{
  location: [35.6764, 139.6500],
  name: "Tokyo",
  population: "13.96 million",
  co_emission: "299.54",
  uv_index: "1.10"
},
{
  location: [19.4326, -99.1332],
  name: "Mexico City",
  population: "8.855 million",
  co_emission: "329.42",
  uv_index: "1.63"
},
{
  location: [47.3769, 8.5417],
  name: "Zurich",
  population: "402,762",
  co_emission: "192.88",
  uv_index: "0.82"
},
{
  location: [21.3099, -157.8581],
  name: "Honolulu",
  population: "345,510",
  co_emission: "96.19",
  uv_index: "1.93"
},
{
  location: [64.1470, -21.9408],
  name: "Reykjavik",
  population: "122,853",
  co_emission: "142.37",
  uv_index: "0.37"
},
{
  location: [-42.8826, 147.3257],
  name: "Hobart",
  population: "206,097",
  co_emission: "74.16",
  uv_index: "0.89"
},
{
  location: [32.6506, -16.9082],
  name: "Funchal",
  population: "105,795",
  co_emission: "120.78",
  uv_index: "1.50"
}
];

// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (let i = 0; i < cities.length; i++) {
  let city = cities[i];
  L.marker(city.location)
    .bindPopup(`<h1>${city.name}</h1> <hr> <h2>Population ${city.population.toLocaleString()}</h2> <hr> <h3>CO (daily avg.) ${city.co_emission.toLocaleString()}</h3> <hr> <h4>UV (daily avg.) ${city.uv_index.toLocaleString()}</h4>`)
    .addTo(myMap);
}