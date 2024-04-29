import "./about.scss";
import { motion } from "framer-motion";

const leftvariants = {
  initial: {
    x: "-50%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      //   delay: 0.5,
    },
  },
};
const rightvariants = {
  initial: {
    // x: "+50%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      //   delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <motion.div className="about">
      <motion.div
        className="left"
        variants={leftvariants}
        initial="initial"
        // animate="animate"
        whileInView="animate"
      >
        <p>
          A fresh Computer Science graduate from{" "}
          <a href="https://psut.edu.jo/" target="_blank">
            PSUT
          </a>
          , participated in ACM student chapter and co-opened a photography club
        </p>
        <span>
          I code, game, take pictures from time to time, and may have 4k songs
          in my playlist :)
        </span>
      </motion.div>
      <motion.div
        className="right"
        variants={rightvariants}
        initial="initial"
        // animate="animate"
        whileInView="animate"
      >
        <h1>Skills</h1>
        <motion.ul variants={rightvariants}>
          <motion.span variants={rightvariants}>
            Langueages
            {/* <hr /> */}
          </motion.span>
          <motion.li variants={rightvariants}>HTML/CSS/SCSS</motion.li>
          <motion.li variants={rightvariants}>Javascript/NodeJS</motion.li>
          <motion.li variants={rightvariants}>React/React Native</motion.li>
          <motion.li variants={rightvariants}>C++</motion.li>
          <motion.li variants={rightvariants}>SQL</motion.li>
          <motion.span variants={rightvariants}>
            Tools
            {/* <hr /> */}
          </motion.span>
          <motion.li variants={rightvariants}>Git/GitHub</motion.li>
          <motion.li variants={rightvariants}>Docker</motion.li>
          <motion.span variants={rightvariants}>
            Some soft skills
            {/* <hr /> */}
          </motion.span>
          <motion.li variants={rightvariants}>Fast Learner</motion.li>
          <motion.li variants={rightvariants}>Teamwork</motion.li>
          <motion.li variants={rightvariants}>Adaptable</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
