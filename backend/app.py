from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
import pandas as pd

from datetime import datetime

app = Flask(__name__)
CORS(app)

df = pd.read_csv('crime_data.csv')
df['timestamp'] = pd.to_datetime(df['timestamp'])

@app.route('/api/crime', methods=['GET'])
def get_crime_data():
    city = request.args.get('city', '').lower()
    start_time = request.args.get('start_time', None)
    end_time = request.args.get('end_time', None)
    date_filter = request.args.get('date', None)

    if not city:
        return jsonify({"error": "City is required"}), 400

    filtered = df[df['city'].str.lower() == city]

    if date_filter:
        try:
            date_obj = pd.to_datetime(date_filter).date()
            filtered = filtered[filtered['timestamp'].dt.date == date_obj]
        except ValueError:
            return jsonify({"error": "Invalid date format. Use YYYY-MM-DD"}), 400

    if start_time and end_time:
        try:
            start = datetime.strptime(start_time, "%H:%M").time()
            end = datetime.strptime(end_time, "%H:%M").time()

            filtered = filtered[
                (filtered['timestamp'].dt.time >= start) &
                (filtered['timestamp'].dt.time <= end)
            ]
        except ValueError:
            return jsonify({"error": "Invalid time format. Use HH:MM"}), 400

    result = filtered.to_dict(orient='records')
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
