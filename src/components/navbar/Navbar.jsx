import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* SideBar */}
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ahmad Shawish
        </motion.span>
        <div className="social">
          <a href="https://github.com/Ahmad-Shawish" target="_blank">
            <img
              src="./githublogo.png"
              alt=""
              style={{ backgroundColor: "white" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-shawish-129014278"
            target="_blank"
          >
            <img src="./linkedin.png" alt="" />
          </a>
          <a href="https://vsco.co/ahmadshawish/gallery" target="_blank">
            <img
              src="./vsco.png"
              alt=""
              style={{ objectFit: "contain", backgroundColor: "white" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
