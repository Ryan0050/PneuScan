# PneuScan AI Full-Stack Application

This project is a full-stack web application featuring a Python backend powered by Flask and TensorFlow for AI predictions, and a React frontend for the user interface.

---

## 🤖 AI Model

The deep learning model used for pneumonia detection in this project is based on or sourced from the following repository.

* **Model Source GitHub:** **[Name of the AI Model Repository]**([https://github.com/Ryan0050/AI-Scan-Paru-Paru])

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your system:
* **Python 3.8+** ([Download](https://www.python.org/downloads/))
* **Node.js v16+ and npm** ([Download](https://nodejs.org/))
* **Git** ([Download](https://git-scm.com/))

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

First, clone the project from your Git repository to your local machine.

```bash
git clone https://github.com/Ryan0050/PneuScan.git
cd PneuScan
```

### 2. Set Up the Python Backend (Flask)

All backend setup commands should be run from inside the `flask-ai-backend` directory.

**a. Navigate into the backend folder:**

```bash
cd flask-ai-backend
```

**b. Create and activate a virtual environment:**

* **On Windows (PowerShell):**
    ```powershell
    python -m venv venv
    .\venv\Scripts\activate
    ```
* **On macOS/Linux:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```
    Your terminal prompt should now be prefixed with `(venv)`.

**c. Install Python dependencies:**

```bash
pip install -r requirements.txt
```

### 3. Set Up the React Frontend

The frontend dependencies are managed by npm. Run this command from the **project's root directory** (`PneuScan`). If you are still in the `flask-ai-backend` folder from the previous step, navigate back out first.

```bash
# Navigate back to the root if needed
cd .. 

# Install dependencies
npm install
```
This will read `package.json` and create a `node_modules` folder.

---

## ▶️ Running the Application

To run the full application, you need to start both the backend and frontend servers **in two separate terminals**.

### Terminal 1: Start the Flask Backend 🧠

1.  Navigate into the backend folder.
    ```bash
    cd flask-ai-backend
    ```
2.  Activate the virtual environment if it's not already active.
    ```powershell
    # On Windows
    .\venv\Scripts\activate
    ```
3.  Run the Flask server.
    ```bash
    flask run
    ```
    ✅ The backend API is now running, typically at `http://127.0.0.1:5000`.

### Terminal 2: Start the React Frontend 🎨

1.  Open a **new** terminal window.
2.  Make sure you are in the project's **root directory** (`PneuScan`).
3.  Run the React development server.
    ```bash
    npm start
    ```
    ✅ The frontend is now running and will open in your browser, typically at `http://localhost:3000`.

---

### 📂 Project Structure

* `/flask-ai-backend/`: Contains all Python backend logic, including `app.py`, `venv`, and `requirements.txt`.
* `/src/`: Contains the React frontend application source code.
* `/public/`: Contains static assets for the frontend like `index.html`.
* `package.json`: Lists all JavaScript dependencies for the frontend (located in the root).