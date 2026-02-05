# AI-Powered Recommendation Engine 

A Content-Based Recommendation System built with **Python**, **Flask**, and **Scikit-Learn**. It suggests movies based on similarity in genres and descriptions using **TF-IDF Vectorization** and **Cosine Similarity**.

## 🛠️ Tech Stack
- **Python** (Language)
- **Flask** (API Framework)
- **Pandas** (Data Manipulation)
- **Scikit-Learn** (Machine Learning)

## ⚙️ Features
1. **Data Loading:** Parses CSV dataset using Pandas.
2. **Vectorization:** Converts text data (Genre + Description) into numerical vectors.
3. **Similarity Calculation:** Uses Cosine Similarity to find related items.
4. **REST API:** Exposes a `/recommend` endpoint for real-time suggestions.

## 🚀 How to Run Locally

1. **Navigate to the Folder:**
   ```bash
   cd CodTech-Internship/Task4-RecommendationEngine

2. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt

 3. **Start the Server:**
    ```bash
    python app.py

## 🧪 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/` | Health Check |
| GET | `/recommend?title=Toy Story` | Get recommendations for a specific movie |
