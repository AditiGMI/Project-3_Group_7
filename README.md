# Project-3_Group_7
# Climate Analysis Project

Welcome to our Climate Analysis project! In this project, we have conducted an analysis of climate data for five of the most polluted cities and five of the least polluted cities. The cities we focused on are New York City (NYC), Beijing, London, Tokyo, Mexico City, Zurich, Honolulu, Reykjavik, Hobart, and Funchal.

## Data Sources

We collected climate data from multiple sources to conduct our analysis. The data spans from January 1, 2010, to December 31, 2019, and includes the following parameters:

1. **Temperature:** Historical temperature data.
2. **Precipitation:** Historical precipitation data.
3. **CO Emission:** Carbon monoxide emissions for the past 12 months.
4. **UV Index:** UV index data for the past 12 months.

We obtained the 10yrs of historical temperature and precipitation data from Open-meteo.com, while past 12 months of CO emission and UV index data were collected from open-meteo.com.

## Data Processing

We used the Pandas library in Jupyter Notebook to process and clean the data, resulting in a set of clean and readable CSV files. These CSV files are the basis of our analysis and visualization.

## Database Creation

To facilitate data management, we created an SQL database named `weather_db` to house our processed climate data. This database is used to efficiently store and retrieve data for our project.

## Data Transformation

Using terminal commands, we converted our clean CSV data into a SQLite database file named `weather.sqlite`. This allows for easy integration with various applications and platforms.

## Flask Web Application

We built a Flask web application that connects to our `weather.sqlite` database. This application serves as the backend for our project, providing data to our front-end interface.

## Interactive Web Page

Our interactive web page is designed to provide users with an engaging and informative experience. It is built using HTML, JavaScript, and various JavaScript libraries, including Plotly, D3, and gif.js. Users can explore climate data through interactive charts, maps, and visualizations.

## How to Use

To access the web interface and explore climate data for the selected cities, follow these steps:

1. Clone this repository to your local machine.
2. Ensure you have Python and Flask installed.
3. Run the Flask application using the provided Python script.
5. Esure all flies and fold path are setup appropriately.
4. Open your web browser and navigate to the local server address provided by the Flask app.
5. Explore the interactive climate data, including temperature, precipitation, CO emissions, and UV index for the specified cities.

Feel free to customize and enhance this project as needed for your own purposes or for further analysis. We hope you find the climate data analysis and visualization useful and informative!

## Contributors

•	Neha Changela 
•	Aditi Garg 
•	Brendan Smith
•	Ruqayyah Shariah
•	Ali Shanaa
•	Rafael Martinez 

Thank you for checking out our Climate Analysis project!

