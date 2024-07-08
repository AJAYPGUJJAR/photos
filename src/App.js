import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageAmEx from './main/ImageAmEx';

export default function App() {
  
  return (
    <div>
      <h1>Welcome To My Photos App</h1>
      <Router>
        <Routes>
          <Route path="/AmEx.PNG" element={<ImageAmEx />} />
        </Routes>
      </Router>
    </div>
  )

}
