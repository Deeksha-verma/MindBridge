// import React from "react";
// import "./Home.css";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-400 to-gray-900">
//       <h1 className="text-white text-5xl font-extrabold tracking-wide drop-shadow-lg transform transition duration-500 hover:scale-110">
//         Welcome to MindBridge
//       </h1>
//       <div className="logo-container my-10 transform transition duration-500 hover:rotate-180">
        
//       </div>
//       <button className="get-started-btn" onClick={() => navigate("/chatbot")}>
//         DYSLEXIA
//       </button>
//       <button className="get-started-btn" onClick={() => navigate("/planner")}>
//         EXECUTIVE FUNCTION DISORDER
//       </button>
//     </div>
//   );
// }


// import React from "react";
// import "./Home.css";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-400 to-gray-900">
//       <h1 className="text-white text-5xl font-extrabold tracking-wide drop-shadow-lg transform transition duration-500 hover:scale-110">
//         Welcome to MindBridge
//       </h1>
      
//       <button
//         className="get-started-btn text-white bg-blue-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transform transition duration-300"
//         onClick={() => navigate("/chatbot")}
//       >
//         DYSLEXIA
//       </button>
//       <button
//         className="get-started-btn mt-4 text-white bg-green-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transform transition duration-300"
//         onClick={() => navigate("/planner")}
//       >
//         EXECUTIVE FUNCTION DISORDER
//       </button>
//       <button
//         className="get-started-btn mt-4 text-white bg-green-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transform transition duration-300"
//         onClick={() => navigate("/customised-paper")}
//       >
//         Adaptive question generator
//       </button>
      
//     </div>
//   );
//}

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import "./Home.css"; // Import the CSS file for animations and transitions

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar /> {/* Add Navbar to the top */}
      <div className="content">
        <h1 className="title">
          Welcome to MindBridge
        </h1>
        <div className="button-grid">
          <button
            className="custom-button dyslexia-button"
            onClick={() => navigate("/chatbot")}
          >
            Dyslexia
          </button>
          <button
            className="custom-button executive-button"
            onClick={() => navigate("/planner")}
          >
            Executive Function Disorder
          </button>
          <button
            className="custom-button executive-button"
            onClick={() => navigate("/customised-paper")}
          >
            Adaptive question paper
          </button>
          <button
            className="custom-button dyslexia-button"
            onClick={() => navigate("/chatbot2")}
          >
            Dyscalculia
          </button>
        </div>
      </div>
    </div>
  );
}
