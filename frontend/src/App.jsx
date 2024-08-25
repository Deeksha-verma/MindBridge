

// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Chatbot from './Chatbot'
// import Home from './Home';
// import Login from './Login';
// import Planner from './Planner';
// import Signup from './Signup';

// const AppContent = () => {
//   const location = useLocation();
  
//   if (
//     location.pathname === "/login" ||
//     location.pathname === "/signup" ||
//     location.pathname === "/display-paper"
//   )
   
//   return (
//     <>
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/chatbot"
//           element={
            
//                 <Chatbot />
             
//           }
//         />
//         <Route
//           path="/planner"
//           element={
            
//                 <Planner/>
              
//           }
//         />
//         {/* <Route
//           path="/display-paper"
//           element={
//             <ProtectedRoute>
//               <ProtectPaper>
//                 <DisplayPaper />
//               </ProtectPaper>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/upcoming-exams"
//           element={
//             <ProtectedRoute>
//               <UpcomingExams />
//             </ProtectedRoute>
//           }
//         /> */}
//       </Routes>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <AppContent />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;




// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Chatbot from './Chatbot'
// import Home from './Home';
// import Login from './Login';
// import Planner from './Planner';
// import Signup from './Signup';

// const AppContent = () => {
//   const location = useLocation();
  
//   if (
//     location.pathname === "/login" ||
//     location.pathname === "/signup" ||
//     location.pathname === "/display-paper"
//   )
   
//   return (
//     <>
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/chatbot"
//           element={
            
//                 <Chatbot />
             
//           }
//         />
//         <Route
//           path="/planner"
//           element={
            
//                 <Planner/>
              
//           }
//         />
//         {/* <Route
//           path="/display-paper"
//           element={
//             <ProtectedRoute>
//               <ProtectPaper>
//                 <DisplayPaper />
//               </ProtectPaper>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/upcoming-exams"
//           element={
//             <ProtectedRoute>
//               <UpcomingExams />
//             </ProtectedRoute>
//           }
//         /> */}
//       </Routes>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <AppContent />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


// import Chatbot from './Chatbot'
// import Home from './Home'
// import Planner from './Planner'

// function App() {
  
//   return (
//     <>
//       <Home/>
//       <Chatbot/>
//       <Planner/>
//     </>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatbot from "./Chatbot";
import Home from "./Home";

import Planner from "./Planner";

import CustomisedPaper from "./CustomisedPaper";
import Chatbot2 from "./Chatbot2";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/chatbot2" element={<Chatbot2 />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/customised-paper" element={<CustomisedPaper />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
