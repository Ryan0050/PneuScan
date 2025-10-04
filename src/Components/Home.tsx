import React, { useState, useRef } from 'react';
import Images from "../asset/images.png";
import axios from "axios";
import '../App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
    const [images, setImages] = useState<File[]>([]);
    const [predictions, setPredictions] = useState<{ result: string; }[]>([]);
    const [hasUploaded, setHasUploaded] = useState(false);
    const inputScanRef = useRef<HTMLDivElement | null>(null);

    // This variable will get the deployed API URL from Railway's environment variables.
    // For local development, it will default to your local Flask server.
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

    const handleScrollToInputScan = () => {
        inputScanRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const selectedImages = Array.from(files);
            setImages(selectedImages);
            setHasUploaded(true);

            const formData = new FormData();
            selectedImages.forEach((image) => formData.append("image", image));

            try {
                // Send images to the backend for prediction
                const response = await axios.post(
                    // Use the API_URL variable to build the request URL
                    `${API_URL}/predict`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                // Set the predictions from the response
                setPredictions(response.data);
            } catch (error) {
                console.error("Error predicting images:", error);
                alert("An error occurred during prediction. Check the console.");
            }
        }
    };

    return (
        <div className="App">
            <Header />
            <div className="home">
                <h1>PneuScan</h1>
                <div className="text">Diagnose your lung right now</div>
                <div className="diagnoseButton" onClick={handleScrollToInputScan}>Try it now</div>
            </div>
            <div className="inputScan" ref={inputScanRef}>
                <h1>AI-Powered Pneumonia Detector</h1>

                {!hasUploaded && (
                    <label htmlFor="fileInput" className="customButton">
                        <div className='insideCustom'>
                            <img src={Images} className="picCustom" alt='' />
                            <div className='boxCustom'>Upload Image Here</div>
                            <div>Get result immediately</div>
                        </div>
                    </label>
                )}
                <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hiddenInput"
                />

                {/* Display selected images and predictions */}
                {images.length > 0 && (
                    <div className="imagePlace">
                        {images.map((image, index) => (
                            <div key={index} className="imageCont">
                                <div className="images">
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`CT scan ${index}`}
                                        className="imagePreview"
                                    />
                                </div>
                                <div className="details">
                                    {predictions[index] ? (
                                        <p>{predictions[index].result}</p>
                                    ) : (
                                        "Loading prediction..."
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {images.length > 0 && (
                    <label htmlFor="fileInput" className="afterUpload">
                        <div>Upload More</div>
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            className="hiddenInput"
                        />
                    </label>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Home;