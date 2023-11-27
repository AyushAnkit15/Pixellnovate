/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

import { download } from '../assets';
import { downloadImage } from '../utils';
import classes from '../css/CARDS.css'
const Card = ({ _id, name, prompt, photo }) => (
  < motion.div   whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}className="rounded-xl group relative shadow-card hover:shadow-cardhover card">


    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
          <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >{name}</motion.span>
         
        </div>
       

        <button onClick={() => downloadImage(_id, photo)} className="relative bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        
        <img src={download} alt="download" className="w-14 h-6 object-contain invert" />

        TAKE HOME
        
        
      </button>
      </div>
    </div>
  </motion.div>
);

export default Card;