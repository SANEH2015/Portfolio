import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Aboutpage from './pages/about';
import Contact from "./pages/Contact";
import Profession from './pages/profession';



// import {useHistory} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<Aboutpage/>} />
          <Route path="Profession" element={<Profession/>} />
          <Route path="Contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App









