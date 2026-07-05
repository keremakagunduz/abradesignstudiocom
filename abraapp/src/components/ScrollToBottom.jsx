import React, { useState, useEffect } from "react";
import { FaAngleUp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

import "../index.css";

const ScrollToBottom = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const goToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
        
        // Show overlay
        setShowOverlay(true);
        
        // Hide overlay after 2 seconds
        setTimeout(() => {
            setShowOverlay(false);
        }, 2000);
    };

    return (
        <>
            {/* Black overlay */}
            {showOverlay && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-40 pointer-events-none transition-opacity duration-300"></div>
            )}

            <div className="flex pb-2">
                <a 
                    href="https://www.instagram.com/abradesignstudio/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex justify-center text-white hover:text-white mt-4 mr-5"
                >
                    <FaInstagram className="max-w-8 self-end cursor-pointer" />
                </a>
                <BsEnvelope 
                    onClick={goToBottom} 
                    className="max-w-8 self-end cursor-pointer mt-4 mr-5 ml-5 [fill:white]" 
                />
                <FaPhoneAlt 
                    onClick={goToBottom} 
                    className="max-w-8 self-end cursor-pointer mt-4 ml-5 [stroke:white] [stroke-width:35] fill-transparent" 
                />
            </div>
        </>
    );
};

export default ScrollToBottom;
