// import React, { useState } from "react";
// import "./NavBar.css";
// import { motion } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Portfolio", path: "#portfolio" },
//     { name: "About", path: "#about" },
//     { name: "Contact", path: "#contact" },
//   ];

//   return (
//     <div className="NavBar">
//       {/* Top bar with only hamburger aligned right */}
//       <div className="NavHeader">
//         <div className="Hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </div>
//       </div>

//       {/* Desktop Nav */}
//       <ul className="NavItems">
//         {navItems.map((item, i) => (
//           <motion.li
//             key={i}
//             className="NavLink"
//             whileHover={{
//               backgroundColor: "#36b37f",
//               color: "#fff",
//               padding: "12px",
//               borderRadius: "4px",
//               transition: { type: "spring", stiffness: 300 },
//             }}
//           >
//             <a className="MenuLink" href={item.path}>{item.name}</a>
//           </motion.li>
//         ))}
//       </ul>

//       {/* Mobile Nav */}
//       {isMobileMenuOpen && (
//         <ul className="MobileNavItems">
//           {navItems.map((item, i) => (
//             <li key={i} className="MobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
//               <a className="MenuLinkMobile" to={item.path}>{item.name}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import "./NavBar.css";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll"; // 👈 renamed import

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Portfolio", path: "portfolio" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div className="NavBar">
      {/* Top bar with only hamburger aligned right */}
      <div className="NavHeader">
        <div
          className="Hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className="NavItems">
        {navItems.map((item, i) => (
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
            <ScrollLink
              className="MenuLink"
              to={item.path}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {item.name}
            </ScrollLink>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <ul className="MobileNavItems">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="MobileNavLink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ScrollLink
                className="MenuLinkMobile"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
