/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./components/About";

//import classes from './css/bt.css'
//import './App.css'
//"w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]  "

import {
  slideAnimation,
  headContainerAnimation,
  fadeAnimation,
  headTextAnimation,
  headContentAnimation,
  transition,
} from "./components/motion";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
//import  {Subtract} from "./assets";
import { Home, CreatePost } from "./pages";

const jose = new URL("./assets/zz.jpg", import.meta.url).href;
const App = () => {
  return (
    <BrowserRouter>
      <motion.header   style={{ backgroundImage: `url(${jose})`  }} className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]  " {...slideAnimation('down') } {...transition}>
        {" "}
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="example-button"  
        
        >
          Create
        </Link>
      </motion.header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
