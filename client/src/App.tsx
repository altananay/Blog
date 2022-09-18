import React from "react";
import {Route, Routes} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/post" element={<SinglePost></SinglePost>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
