import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import "../index.css";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="btm-to-top">
            {" "}
            {showTopBtn && (
                <img
            src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Abra_Icon_png.png", 400)}
            alt="Abra Design Studio"
            className="max-w-40 ml-0 mr-auto absolute pt-0 sm:pt-6"
            onClick={goToTop}
            />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;