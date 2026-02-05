from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

try:
    df = pd.read_csv('movies.csv')
    print("✅ Dataset loaded successfully")
except:
    print("❌ Error: movies.csv not found")

df['combined_features'] = df['genre'] + " " + df['description']

vectorizer = TfidfVectorizer(stop_words='english')
feature_vectors = vectorizer.fit_transform(df['combined_features'])

similarity = cosine_similarity(feature_vectors)

@app.route('/', methods=['GET'])
def home():
    return "AI Recommendation Engine is Running! Use /recommend endpoint."

@app.route('/recommend', methods=['GET'])
def recommend():
    movie_name = request.args.get('title')
    
    if not movie_name:
        return jsonify({"error": "Please provide a 'title' parameter"}), 400

    try:
        list_of_all_titles = df['title'].tolist()
        
        find_close_match = [title for title in list_of_all_titles if movie_name.lower() in title.lower()]
        
        if not find_close_match:
            return jsonify({"error": "Movie not found in database"}), 404
            
        close_match = find_close_match[0]
        index_of_the_movie = df[df.title == close_match].index[0]

        similarity_score = list(enumerate(similarity[index_of_the_movie]))

        sorted_similar_movies = sorted(similarity_score, key=lambda x: x[1], reverse=True)

        recommendations = []
        for i in range(1, 4): 
            index = sorted_similar_movies[i][0]
            title_from_index = df[df.index == index]['title'].values[0]
            genre_from_index = df[df.index == index]['genre'].values[0]
            recommendations.append({"title": title_from_index, "genre": genre_from_index})

        return jsonify({
            "searched_movie": close_match,
            "recommendations": recommendations
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)