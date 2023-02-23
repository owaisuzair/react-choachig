import { useState } from "react";
import Home  from "./screens/Home";
import About from "./screens/About";
import Courses from "./screens/Courses";
import Why_chooses_us from "./screens/Why_chooses_us";
import Contact_us from "./screens/Contact_us";
// import Form from "./screens/form";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Routes,Route,BrowserRouter } from "react-router-dom";


import "./App.css";
function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/why_chooses_us" element={<Why_chooses_us />} />
      <Route path="/contact_us" element={<Contact_us />} />
      {/* <Route path="/form" element={<Form />} /> */}
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
