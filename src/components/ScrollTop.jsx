import { useEffect, useState } from "react";
import "../styles/scrolltop.css";

function ScrollTop() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const toggle = () => {

            if(window.scrollY > 250){

                setVisible(true);

            }else{

                setVisible(false);

            }

        };

        window.addEventListener("scroll", toggle);

        return () => window.removeEventListener("scroll", toggle);

    }, []);

    const scrollToTop = () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    return (

        visible && (

            <button

                className="scroll-top"

                onClick={scrollToTop}

            >

                ↑

            </button>

        )

    );

}

export default ScrollTop;