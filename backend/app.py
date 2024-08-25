from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai


app = Flask(__name__)
CORS(app)  

def calculate_difficulty_level(average_marks):
    if average_marks >= 90:
        return "hard"
    elif 70 <= average_marks < 90:
        return "medium"
    else:
        return "easy"


def generate_questions(syllabus, difficulty):
    # Mock question database or generation logic
    questions_db = {
        "easy": [
            "What is 2 + 2?",
            "What is the capital of France?",
        ],
        "medium": [
            "Solve for x: 2x + 3 = 7",
            "Explain the theory of relativity.",
        ],
        "hard": [
            "Prove Fermat's Last Theorem.",
            "Describe the quantum entanglement phenomenon.",
        ],
    }

    # Generate questions based on difficulty level
    return questions_db.get(difficulty, ["No questions available for this difficulty level."])

@app.route('/api/process-speech', methods=['POST'])
def process_speech():

    apiKey = "AIzaSyDLzDcz_h9JAOFmJmOufB0YGVLYCQW27ZM"
    genai.configure(api_key=apiKey)
    model = genai.GenerativeModel('gemini-1.5-flash')

    data = request.get_json()
    user_text = data.get('text', '')
    flag = data.get('flag', '')
    print(f"Received text: {user_text}")  
    if(flag):
        prompt = "solve this math problem and give a detailed explanation , using only plain text and avoiding any special characters, symbols, or punctuation (only full stops & commas are allowed) :\n"+user_text
    else:
        prompt = "Provide a concise and informative response to the following query, using only plain text and avoiding any special characters, symbols, or punctuation (only full stops & commas are allowed) :\n"+user_text


    response = model.generate_content(prompt)
    print(response.text)

    return jsonify({"message": "Text received successfully!","response":response.text})



@app.route('/api/solve-problem', methods=["OPTIONS",'POST'])
def solve_problem():
    print("in")
    apiKey = "AIzaSyDLzDcz_h9JAOFmJmOufB0YGVLYCQW27ZM"
    genai.configure(api_key=apiKey)
    model = genai.GenerativeModel('gemini-1.5-flash')
    print("ai")
    data = request.get_json()
    user_text = data.get('text', '')
    print(f"Received text: {user_text}")  

    prompt = "solve this math problem and give a detailed explanation , using only plain text and avoiding any special characters, symbols, or punctuation (only full stops & commas are allowed) :\n"+user_text


    response = model.generate_content(prompt)
    print(response.text)

    return jsonify({"message": "Text received successfully!","response":response.text})

@app.route('/generate-question-paper', methods=['POST'])
def generate_question_paper():
    data = request.json
    average_marks = data.get('average_marks')
    syllabus = data.get('syllabus')
    
    # Validate inputs
    if not average_marks or not syllabus:
        return jsonify({"error": "Average marks and syllabus are required."}), 400
    
    try:
        average_marks = float(average_marks)
    except ValueError:
        return jsonify({"error": "Invalid average marks."}), 400
    
    difficulty = calculate_difficulty_level(average_marks)
    questions = generate_questions(syllabus, difficulty)

    return jsonify({"questions": questions})




if __name__ == '__main__':
    app.run(debug=True, port=5000)
