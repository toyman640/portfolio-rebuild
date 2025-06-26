import React, { useState } from "react";
import "./NavBar.css";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="NavBar">
      {/* Top bar with only hamburger aligned right */}
      <div className="NavHeader">
        <div className="Hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className="NavItems">
        {["Portfolio", "About", "Contact"].map((item, i) => (
          <motion.li
            key={i}
            className="NavLink"
            whileHover={{
              backgroundColor: "#36b37f",
              color: "#fff",
              padding: "12px",
              borderRadius: "4px",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <ul className="MobileNavItems">
          {["Portfolio", "About", "Contact"].map((item, i) => (
            <li key={i} className="MobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
