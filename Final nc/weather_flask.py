from types import prepare_class
import numpy as np
import pandas as pd
import datetime as dt
import requests
import json

import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, Date
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, render_template

from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///weather.sqlite")

# reflect an existing database into a new model
# Base.metadata.create_all(engine)
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)
print(Base.classes.keys())
# Save reference to the table
Weather = Base.classes.data
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
        f"Top 5 most polluted cities<br/>"
        f"--------------------------------------<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/NewYorkCity<br/>"
        f"--------------------------------------<br/>"
        f"/api/v1.0/Beijing<br/>"
        f"--------------------------------------<br/>"
        f"/api/v1.0/London<br/>"
        f"--------------------------------------<br/>"
        f"/api/v1.0/Tokyo<br/>"
        f"--------------------------------------<br/>"
        f"/api/v1.0/MexicoCity<br/>"
        f"--------------------------------------<br/>"
        f"--------------------------------------<br/>"
        f"Top 5 Least polluted cities<br/>"
        f"/api/v1.0/Zurich<br/>"
        f"--------------------------------------<br/>"
        f"/api/v1.0/Honolulu<br/>"
        f"--------------------------------------<br/>"
        f"/api/v1.0/Reykjavik<br/>"
        f"--------------------------------------<br/>"
        f"/api/v1.0/Hobart<br/>"
        f"--------------------------------------<br/>"
        f"/api/v1.0/Funchal<br/>"
        f"--------------------------------------<br/>"
        f"--------------------------------------<br/>"
        f"/api/v1.0/5MostPollutedCitiesData<br/>"
        f"--------------------------------------<br/>"
        f"--------------------------------------<br/>"
    )


@app.route("/api/v1.0/NewYorkCity")
def nyc():
    print('here')
    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(Weather.date, Weather.nyc_max_temp, Weather.nyc_prcp).all()
    # print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_nyc_data= []
    for date, temp, prcp in results:
        nyc_dict = {}
        nyc_dict["date"] = date
        nyc_dict["nyc_max_temp"] = temp
        nyc_dict["nyc_prcp"] = prcp
        years_nyc_data.append(nyc_dict)
    print("Years of New York City weather Data:", years_nyc_data)

    nyc_data = open('static/nycdata.json', 'w')
    nyc_data.write(json.dumps(years_nyc_data))
    nyc_data.close

    return render_template('index.html')


@app.route("/api/v1.0/Beijing")
def bjg():

    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(
        Weather.date, Weather.bjg_max_temp, Weather.bjg_prcp).all()
    print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_bjg_data = []
    for date, temp, prcp in results:
        bjg_dict = {}
        bjg_dict["date"] = date
        bjg_dict["bjg_max_temp"] = temp
        bjg_dict["bjg_prcp"] = prcp
        years_bjg_data.append(bjg_dict)
    print("Years of Beijing weather Data:", years_bjg_data)

    bjg_data = open('static/bjgdata.json', 'w')
    bjg_data.write(json.dumps(years_bjg_data))
    bjg_data.close

    return render_template('index.html')


@app.route("/api/v1.0/London")
def lnd():

    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(
        Weather.date, Weather.lnd_max_temp, Weather.lnd_prcp).all()
    print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_lnd_data = []
    for date, temp, prcp in results:
        lnd_dict = {}
        lnd_dict["date"] = date
        lnd_dict["lnd_max_temp"] = temp
        lnd_dict["lnd_prcp"] = prcp
        years_lnd_data.append(lnd_dict)
    print("Years of London weather Data:", years_lnd_data)

    lnd_data = open('static/lnddata.json', 'w')
    lnd_data.write(json.dumps(years_lnd_data))
    lnd_data.close

    return render_template('index.html')


@app.route("/api/v1.0/Tokyo")
def tky():

    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(
        Weather.date, Weather.tky_max_temp, Weather.tky_prcp).all()
    print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_tky_data = []
    for date, temp, prcp in results:
        tky_dict = {}
        tky_dict["date"] = date
        tky_dict["tky_max_temp"] = temp
        tky_dict["tky_prcp"] = prcp
        years_tky_data.append(tky_dict)
    print("Years of Tokyo weather Data:", years_tky_data)

    tky_data = open('static/tkydata.json', 'w')
    tky_data.write(json.dumps(years_tky_data))
    tky_data.close

    return render_template('index.html')


@app.route("/api/v1.0/MexicoCity")
def mxc():

    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(
        Weather.date, Weather.mxc_max_temp, Weather.mxc_prcp).all()
    print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_mxc_data = []
    for date, temp, prcp in results:
        mxc_dict = {}
        mxc_dict["date"] = date
        mxc_dict["mxc_max_temp"] = temp
        mxc_dict["mxc_prcp"] = prcp
        years_mxc_data.append(mxc_dict)
    print("Years of Mexico weather Data:", years_mxc_data)

    mxc_data = open('static/mxcdata.json', 'w')
    mxc_data.write(json.dumps(years_mxc_data))
    mxc_data.close

    return render_template('index.html')


@app.route("/api/v1.0/Zurich")
def zch():

    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(
        Weather.date, Weather.zch_max_temp, Weather.zch_prcp).all()
    print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_zch_data = []
    for date, temp, prcp in results:
        zch_dict = {}
        zch_dict["date"] = date
        zch_dict["zch_max_temp"] = temp
        zch_dict["zch_prcp"] = prcp
        years_zch_data.append(zch_dict)
    print("Years of Zurich weather Data:", years_zch_data)

    zch_data = open('static/zchdata.json', 'w')
    zch_data.write(json.dumps(years_zch_data))
    zch_data.close

    return render_template('index.html')


@app.route("/api/v1.0/Honolulu")
def hnl():

    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(
        Weather.date, Weather.hnl_max_temp, Weather.hnl_prcp).all()
    print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_hnl_data = []
    for date, temp, prcp in results:
        hnl_dict = {}
        hnl_dict["date"] = date
        hnl_dict["hnl_max_temp"] = temp
        hnl_dict["hnl_prcp"] = prcp
        years_hnl_data.append(hnl_dict)
    print("Years of Honolulu weather Data:", years_hnl_data)

    hnl_data = open('static/hnldata.json', 'w')
    hnl_data.write(json.dumps(years_hnl_data))
    hnl_data.close

    return render_template('index.html')


@app.route("/api/v1.0/Reykjavik")
def ryk():

    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(
        Weather.date, Weather.ryk_max_temp, Weather.ryk_prcp).all()
    print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_ryk_data = []
    for date, temp, prcp in results:
        ryk_dict = {}
        ryk_dict["date"] = date
        ryk_dict["ryk_max_temp"] = temp
        ryk_dict["ryk_prcp"] = prcp
        years_ryk_data.append(ryk_dict)
    print("Years of Reykjavik weather Data:", years_ryk_data)

    ryk_data = open('static/rykdata.json', 'w')
    ryk_data.write(json.dumps(years_ryk_data))
    ryk_data.close

    return render_template('index.html')


@app.route("/api/v1.0/Hobart")
def hbt():

    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(
        Weather.date, Weather.hbt_max_temp, Weather.hbt_prcp).all()
    print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_hbt_data = []
    for date, temp, prcp in results:
        hbt_dict = {}
        hbt_dict["date"] = date
        hbt_dict["hbt_max_temp"] = temp
        hbt_dict["hbt_prcp"] = prcp
        years_hbt_data.append(hbt_dict)
    print("Years of Hobart weather Data:", years_hbt_data)

    hbt_data = open('static/hbtdata.json', 'w')
    hbt_data.write(json.dumps(years_hbt_data))
    hbt_data.close

    return render_template('index.html')


@app.route("/api/v1.0/Funchal")
def fcl():

    # session (link) from Python to the DB
    session = Session(engine)

    results = session.query(
        Weather.date, Weather.fcl_max_temp, Weather.fcl_prcp).all()
    print("Results:", results)

    session.close()

    # Creating a dictionary from the raw data
    years_fcl_data = []
    for date, temp, prcp in results:
        fcl_dict = {}
        fcl_dict["date"] = date
        fcl_dict["fcl_max_temp"] = temp
        fcl_dict["fcl_prcp"] = prcp
        years_fcl_data.append(fcl_dict)
    print("Years of Funchal weather Data:", years_fcl_data)

    fcl_data = open('static/zchdata.json', 'w')
    fcl_data.write(json.dumps(years_fcl_data))
    fcl_data.close

    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
