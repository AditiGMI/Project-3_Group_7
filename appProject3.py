import numpy as np
import datetime as dt

import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
from sqlalchemy import Column, Integer, Date
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

# Creating class
class Weather(Base):
    __tablename__ = 'weather_data'
    date = Column(Date, primary_key=True)
    nyc_max_temp = Column(Integer)
    nyc_prcp = Column(Integer)
    bjg_max_temp = Column(Integer)
    bjg_prcp = Column(Integer)
    lnd_max_temp = Column(Integer)
    lnd_prcp = Column(Integer)
    tky_max_temp = Column(Integer)
    tky_prcp = Column(Integer)
    mxc_max_temp = Column(Integer)
    mxc_prcp = Column(Integer)
    zch_max_temp = Column(Integer)
    zch_prcp = Column(Integer)
    hnl_max_temp = Column(Integer)
    hnl_prcp = Column(Integer)
    ryk_max_temp = Column(Integer)
    ryk_prcp = Column(Integer)
    hbt_max_temp = Column(Integer)
    hbt_prcp = Column(Integer)
    fcl_max_temp = Column(Integer)
    fcl_prcp = Column(Integer)


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///weather.sqlite")

# reflect an existing database into a new model
Base.metadata.create_all(engine)

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Welcome to the Climate Observations API!<br/>"
        f"--------------------------------------<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/New York City<br/>"
        f"/api/v1.0/fun<br/>"
        f"--------------------------------------<br/>"
        f"For start_date queries please format:YYYY-MM-DD<br/>"
        f"For start_date/end_date queries please format:YYYY-MM-DD,YYYY-MM-DD"
    )

@app.route("/api/v1.0/New York City")
def precipitation():

    # session (link) from Python to the DB
    session = Session(engine)
    
    results = session.query(Weather.date, Weather.nyc_max_temp, Weather.nyc_prcp).all()
    print("Results:", results) 

    session.close()

    # Creating a dictionary from the raw data
    years_nyc_data= []
    for date, temp, prcp in results:
        nyc_dict = {}
        nyc_dict["date"] = date
        nyc_dict["nyc_max_temp"] = temp
        nyc_dict["nyc_prcp"] = prcp
        years_nyc_data.append(nyc_dict)
    print("Years of  NYC weather Data:", years_nyc_data)

    return jsonify(years_nyc_data)

if __name__ == '__main__':
    app.run()


'''
@app.route("/api/v1.0/<start_date>")
def Start (start_date):

    session = Session(engine)

    # Query for Most_active station on top
    stations = session.query(Measurement.station, func.count(Measurement.station)).\
    filter(Measurement.station == Measurement.station).\
    group_by(Measurement.station).\
    order_by(func.count(Measurement.station).desc()).all()

    # Query to calculate minimum, maximum and average temperature from the start date
    results = session.query(func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)).\
    filter(Measurement.station == stations[0][0]).\
    filter(Measurement.date >= start_date).all()

    session.close()

    # Creating a dictionary from the raw data and append to a list from start date 
    start_date_t = []
    for min, avg, max in results:
        start_dict = {}
        start_dict["TMIN"] = min
        start_dict["TAVG"] = avg
        start_dict["TMAX"] = max
        start_date_t.append(start_dict)

    return jsonify(start_date_t)

@app.route("/api/v1.0/<start_date>/<end_date>")
def Start_End (start_date, end_date):

    session = Session(engine)

    # Query to get most active station
    stations = session.query(Measurement.station, func.count(Measurement.station)).\
    filter(Measurement.station == Measurement.station).\
    group_by(Measurement.station).\
    order_by(func.count(Measurement.station).desc()).all()

    # Query to calculate minimum, maximum and average temperature from the start date to end date
    results = session.query(func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)).\
    filter(Measurement.station == stations[0][0]).\
    filter((Measurement.date >= start_date), (Measurement <= end_date)).all()

    session.close()

    # Creating a dictionary from the raw data and append to a list from start date to end date
    start_end_t = []
    for min, avg, max in results:
        start_end_dict = {}
        start_end_dict["TMIN"] = min
        start_end_dict["TAVG"] = avg
        start_end_dict["TMAX"] = max
        start_end_t.append(start_end_dict)

    return jsonify(start_end_t)

if __name__ == '__main__':
    app.run(debug=True)



BaseAutomap = automap_base()
# reflect the tables
BaseAutomap.prepare(autoload_with=engine)    

# Save references to each table
Weather = BaseAutomap.classes.weather

print(BaseAutomap.classes.keys())

# Create our session (link) from Python to the DB
session = Session(engine)

'''