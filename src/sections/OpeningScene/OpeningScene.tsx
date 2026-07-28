import Mason from "../../components/Mason/Mason"
import SpeechBubble from "../../components/SpeechBubble/SpeechBubble"
import Navbar from "../../components/Navbar/Navbar"
import useScrollTrigger from "../../hooks/useScrollTrigger"
import "./OpeningScene.css"

export default function OpeningScene(){
    const hasScrolled = useScrollTrigger();
    return(
        <section className="opening-scene">
            <Navbar expanded={hasScrolled} />
            <div className="mason-container">
                <SpeechBubble visible={!hasScrolled} />
                <Mason visible={!hasScrolled} />
            </div>
        </section>
    )
}