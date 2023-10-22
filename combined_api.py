from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/merged-api')
def get_merged_data():
    # Fetch data from API 1
    api1_data = requests.get('http://127.0.0.1:5000/api/v1.0/NewYorkCity').json()

    # Fetch data from API 2
    api2_data = requests.get('http://127.0.0.1:5000/api/v1.0/Beijing').json()

    # Fetch data from API 3
    api3_data = requests.get('http://127.0.0.1:5000/api/v1.0/London').json()

    # Fetch data from API 4
    api4_data = requests.get('http://127.0.0.1:5000/api/v1.0/Tokyo').json()

    # Fetch data from API 4
    api5_data = requests.get('http://127.0.0.1:5000/api/v1.0/MexicoCity').json()




    # Merge the data as needed
    merged_data = {
        'api1_data': api1_data,
        'api2_data': api2_data,
        'api3_data': api3_data,
        'api4_data': api4_data,
        'api5_data': api5_data
    }

    return jsonify(merged_data)

if __name__ == '__main__':
    app.run(debug=True)