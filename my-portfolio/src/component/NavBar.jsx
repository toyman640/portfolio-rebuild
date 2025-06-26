import React from "react";
import "./NavBar.css";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="NavItems">
        {/* <li className="NavLink">Portfolio</li>
        <li className="NavLink">About</li>
        <li className="NavLink">Contact</li> */}
        <motion.li
          className="NavLink"
          whileHover={{
            backgroundColor: "#36b37f",
            color: "#fff",
            padding: "12px",
            borderRadius: "4px",
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          Portfolio
        </motion.li>
        <motion.li
          className="NavLink"
          whileHover={{
            backgroundColor: "#36b37f",
            color: "#fff",
            padding: "12px",
            borderRadius: "4px",
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          About
        </motion.li>
        <motion.li
          className="NavLink"
          whileHover={{
            backgroundColor: "#36b37f",
            color: "#fff",
            padding: "12px",
            borderRadius: "4px",
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          Contact
        </motion.li>
      </ul>
    </div>
  );
};
export default NavBar;