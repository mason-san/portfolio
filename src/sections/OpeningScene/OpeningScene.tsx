import Mason from "../../components/Mason/Mason"
import SpeechBubble from "../../components/SpeechBubble/SpeechBubble"
import Navbar from "../../components/Navbar/Navbar"
import "./OpeningScene.css"

export default function OpeningScene(){
    return(
        <section className="opening-scene">
            <Navbar />
            <div className="mason-container">
                <SpeechBubble />
                <Mason />
            </div>
        </section>
    )
}