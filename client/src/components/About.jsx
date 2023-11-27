/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { headContentAnimation } from "./motion";
import classes from "../css/CARDS.css";
import { Box, Typography,  } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
import { TiltCard } from "./NewCard";
const gg = new URL("../assets/Untitled (2).png", import.meta.url).href;
import { data } from "../constants/data";
const About = ({ show }) => {
  return (
    <motion.div
      class={
        !show
          ? "sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]"
          : ""
      }
      {...headContentAnimation}
    >
      <img src={gg} alt="new" className={show ? "img" : "img-g"} />
<Grid container spacing={2}>
  <Grid xs={8} lg={4}>
    <TiltCard {...data[0]}>xs=8</TiltCard>
  </Grid>
  <Grid xs={4} lg={4}>
    <TiltCard {...data[1]}><img src={gg}></img>xs=4</TiltCard>
  </Grid>
  <Grid xs={4} lg={2}>
    <TiltCard {...data[2]}>xs=8</TiltCard>
  </Grid>
  
</Grid>
    </motion.div>
  );
};

export default About;
