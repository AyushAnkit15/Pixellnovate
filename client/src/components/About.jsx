/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

const gg =  new URL('../assets/gg.jpg', import.meta.url).href;

const About = () => {
  return (
    <motion.div  style={{backgroundImage: `url(${gg})`}} > 
        <h1>this is basic text<br></br>
        
        ewww</h1>
    </motion.div>
  )
}

export default About