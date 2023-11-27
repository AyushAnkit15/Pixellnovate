/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import About from "./components/About";
{/* <Link to="/">
<img src={logo} alt="logo" className="w-28 object-contain" />
</Link>
<Link
to="/create-post"
className="example-button"  

>
Create
</Link> */}

import NavBar from "./components/NavBar";


import {GiHamburgerMenu} from 'react-icons/gi'


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

import { useState } from "react";

import { logo } from "./assets";
//import  {Subtract} from "./assets";
import { Home, CreatePost } from "./pages";
import Search from "./components/Search";
//import Foot from "./components/Footer";
import Footerm from "./components/Footer";

const jose = new URL("./assets/zz.jpg", import.meta.url).href;
const App = () => {

  const[ showNav , setShowNav] = useState(false)
  return (
    <BrowserRouter>
      <motion.header    className="header" {...slideAnimation('down') } {...transition}>
        

        <GiHamburgerMenu className="icon"  onClick = {()=> setShowNav(!showNav)}/>
      
      </motion.header>

      <NavBar show ={showNav} />

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      
        <Routes>
         
          <Route path ="/" exact={true} element={<About show ={showNav}/>}/>
          <Route path="/create-post" exact={true} Component={CreatePost} />
          <Route path ="/gallery" exact ={true} Component={Home}/>
        </Routes>
      </main>
      <Footerm/>


    </BrowserRouter>
    
  );
};

export default App;
