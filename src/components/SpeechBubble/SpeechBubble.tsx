import "./SpeechBubble.css"
import {motion} from "motion/react"

type SpeechBubbleProps = {
    visible: boolean; 
}

export default function SpeechBubble({ visible } : SpeechBubbleProps){
    return(
        <motion.div
            animate={{
                opacity: visible ? 1 : 0,
                y: visible ? 0 : -15,
            }}
            transition={{
                duration: 0.2,
            }} 
            
            className="speech-bubble"
        >
            Hey! 👋
        </motion.div>
    )
}