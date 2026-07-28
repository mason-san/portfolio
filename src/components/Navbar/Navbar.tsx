import "./Navbar.css"
import { motion } from "motion/react"

type NavbarProps = {
    expanded: boolean; 
}

export default function Navbar({ expanded } : NavbarProps){
    console.log("FROM NAVBAR: " + expanded);

    return(

        <nav className="navbar">
            <motion.div className="navbar-pill"
                animate={{
                    width: expanded ? 860: 120,
                }} 
                transition={{
                    duration: 0.35
                }}
            >
                <div className="left">
                    <div className="logo">
                        MASON
                    </div>
                </div>

                <motion.div 
                    className="links"
                    animate={{
                        opacity: expanded ? 1 : 0,
                        x: expanded ? 0 : 20,
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.25,
                    }}
                >
                    <a>Home</a>
                    <a>How I Think</a>
                    <a>Contact</a>
                </motion.div>

            </motion.div>
        </nav>
    )
}