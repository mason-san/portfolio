import {useEffect, useState} from "react"; 

export default function useScrollTrigger(){
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 5){
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return (() => {
            window.addEventListener("scroll", handleScroll);
        })
    }, []); 

    return hasScrolled; 

}