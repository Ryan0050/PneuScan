from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import cv2
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the pre-trained model
model = load_model('api/models/pneumonia_model.keras')
labels = ['PNEUMONIA', 'NORMAL']
img_size = 200  # Input size for the model

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No files uploaded'}), 400

    images = request.files.getlist('image')
    predictions = []

    try:
        for img_file in images:
            img_arr = cv2.imdecode(np.frombuffer(img_file.read(), np.uint8), cv2.IMREAD_GRAYSCALE)
            resized_arr = cv2.resize(img_arr, (img_size, img_size)).reshape(1, img_size, img_size, 1)

            normalized_img = resized_arr / 255.0

            prediction = model.predict(normalized_img)
            print(prediction)
            confidence = float(prediction[0][0])

            if confidence > 0.80:
                label = 'NORMAL'
            else:
                label = 'PNEUMONIA'

            predictions.append({
                'result': label
            })

        return jsonify(predictions)

    except Exception as e:
        return jsonify({'error': str(e)}), 500
