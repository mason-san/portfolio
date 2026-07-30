import heroWave from "../../assets/mason/mazin_wave_1.png"
import "./Mason.css"
import {motion} from "motion/react"

type MasonProps = {
    visible: boolean; 
}

export default function Mason( {visible} : MasonProps  ) {
    return(
        <motion.div
            animate={{
                opacity: visible ? 1 : 0,
                scale: visible ? 1: 0.85,
            }}
            transition={{
                duration: 0.25,
            }}
            className="mason"
        >
            <img
                src={heroWave}
                alt="Mason"
                className="mason"
            />
        </motion.div>
    );
}
