from flask import Flask, request, jsonify
import tflite_runtime.interpreter as tflite
import cv2
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the TFLite model and allocate tensors
interpreter = tflite.Interpreter(model_path='models/pneumonia_model.tflite')
interpreter.allocate_tensors()

# Get input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

labels = ['PNEUMONIA', 'NORMAL']
img_size = 200

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No files uploaded'}), 400

    images = request.files.getlist('image')
    predictions = []

    try:
        for img_file in images:
            img_arr = cv2.imdecode(np.frombuffer(img_file.read(), np.uint8), cv2.IMREAD_GRAYSCALE)
            
            # Ensure the image is resized to match the model's expected input shape
            resized_arr = cv2.resize(img_arr, (img_size, img_size))
            
            # Add batch and channel dimensions, and ensure dtype is float32
            input_data = resized_arr.reshape(1, img_size, img_size, 1).astype(np.float32)
            normalized_img = input_data / 255.0

            # Set the tensor, invoke the interpreter, and get the result
            interpreter.set_tensor(input_details[0]['index'], normalized_img)
            interpreter.invoke()
            prediction = interpreter.get_tensor(output_details[0]['index'])
            
            confidence = float(prediction[0][0])

            if confidence > 0.80:
                label = 'NORMAL'
            else:
                label = 'PNEUMONIA'

            predictions.append({'result': label})

        return jsonify(predictions)

    except Exception as e:
        return jsonify({'error': str(e)}), 500