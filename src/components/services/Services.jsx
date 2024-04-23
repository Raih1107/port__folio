import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import mySVG1 from "./react-2.svg";
import mySVG2 from "./framer-motion.svg";
import mySVG3 from "./tailwind-svgrepo-com.svg";
import mySVG4 from "./gsap-greensock.svg";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on building responsive web applications
          <br /> with a focus on high-quality animations.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> touch
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "black" }} // Hover background color for React
        >
          <img src={mySVG1} alt="React Icon" style={{ width: "150px", height: "150px" }} />
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>ReactJS</h2>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "black" }} // Hover background color for Framer Motion
        >
          <img src={mySVG2} alt="Framer Motion Icon" style={{ width: "150px", height: "150px" }} />
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>Framer Motion</h2>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "black" }} // Hover background color for TailwindCSS
        >
          <img src={mySVG3} alt="TailwindCSS Icon" style={{ width: "150px", height: "150px" }} />
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>TailwindCSS</h2>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "black" }} // Hover background color for GSAP
        >
          <img src={mySVG4} alt="GSAP Icon" style={{ width: "150px", height: "150px" }} />
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>GSAP</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
