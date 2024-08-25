import React, { useState } from 'react';

function CustomisedPaper() {
    const [averageMarks, setAverageMarks] = useState('');
    const [syllabus, setSyllabus] = useState('');
    const [questions, setQuestions] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/generate-question-paper', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ average_marks: averageMarks, syllabus }),
        });
        const data = await response.json();
        setQuestions(data.questions);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Generate Question Paper</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-2">
                    <label className="block text-sm font-medium">Average Marks</label>
                    <input
                        type="number"
                        value={averageMarks}
                        onChange={(e) => setAverageMarks(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium">Syllabus</label>
                    <textarea
                        value={syllabus}
                        onChange={(e) => setSyllabus(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="mt-3 bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Generate
                </button>
            </form>

            {questions.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold mb-4">Generated Questions</h2>
                    <ul>
                        {questions.map((question, index) => (
                            <li key={index} className="mb-2">{question}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CustomisedPaper;
