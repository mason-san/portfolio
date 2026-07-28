import "./Navbar.css";
import { motion } from "motion/react";

type NavbarProps = {
  expanded: boolean;
};

export default function Navbar({ expanded }: NavbarProps) {

  return (

    <nav className="navbar">
      <motion.div
        className="navbar-wrapper"
        animate={{
          width: expanded ? 760 : 140,
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
      >
        <div className={`navbar-pill ${expanded ? "expanded" : "collapsed"}`}>
          <div className="logo">
            MASON
          </div>

          <motion.div
            className="links"
            initial={false}
            animate={{
              opacity: expanded ? 1 : 0,
              x: expanded ? 0 : 20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <a className="nav-link">Home</a>
            <a className="nav-link">How I Think</a>
            <a className="nav-link">Contact</a>
          </motion.div>

        </div>

      </motion.div>

    </nav>


  );
}