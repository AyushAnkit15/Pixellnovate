import { useSpring  ,useScroll, motion , useTransform } from "framer-motion";

const ScrollAnimations = () => {
    const { scrollYProgress } = useScroll();
  
    const scaleX = useSpring(scrollYProgress);
  
    const background = useTransform(
      scrollYProgress,
      [0, 1],
      ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
    );
  
    return (
      <div>
        <motion.div
          style={{
            // scaleX: scrollYProgress,
            scaleX,
            transformOrigin: "left",
            // background: "blue",
            background,
            position: "sticky",
            top: 0,
            width: "100%",
            height: "20px",
          }}
        />
  
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            padding: "1.2rem",
          }}
        ></div>
        </div>
      );
    };

    export default ScrollAnimations;