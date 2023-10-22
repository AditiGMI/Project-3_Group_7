const url = "https://127.0.0.1:5000/api/v1.0/NewYorkCity"

d3.json(url).then(function(data){
    let dates = data.map(function (row){
        return row.date
    });
    console.log("Dates:",dates);
    
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
});
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
