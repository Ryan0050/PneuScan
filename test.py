import tensorflow as tf

# Load your existing Keras model
model = tf.keras.models.load_model('api\models\pneumonia_model.keras')

# Create a TFLite converter object
converter = tf.lite.TFLiteConverter.from_keras_model(model)

# Convert the model
tflite_model = converter.convert()

# Save the new .tflite model
with open('api/models/pneumonia_model.tflite', 'wb') as f:
    f.write(tflite_model)

print("Model successfully converted to pneumonia_model.tflite!")