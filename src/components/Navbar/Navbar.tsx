import "./Navbar.css";
import { motion } from "motion/react";
import mason from "../../assets/mason/mazin_sit_laptop.png";

type NavbarProps = {
  expanded: boolean;
};

export default function Navbar({ expanded }: NavbarProps) {

  return (

    <nav className="navbar">
      <motion.div
        className="navbar-wrapper"
        animate={{
          width: expanded ? 720 : 140,
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
      >
        <div className={`navbar-pill ${expanded ? "expanded" : "collapsed"}`}>
          <a className="logo-group" href="#about" aria-label="Mazin Moosa — home">
            {expanded && <img src={mason} alt="" className="navbar-mason" />}
            <div className="logo">
              MASON
            </div>
          </a>

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
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
          </motion.div>

        </div>

      </motion.div>

    </nav>


  );
}
