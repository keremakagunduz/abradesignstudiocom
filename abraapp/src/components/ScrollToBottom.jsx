import React, { useState, useEffect } from "react";
import { FaAngleUp,FaPhoneAlt,FaInstagram } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

import "../index.css";

const ScrollToBottom = () => {
    const goToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };
    return (
        <>
        <div className="flex pb-2">
            <a href="https://www.instagram.com/abradesignstudio/" target="_blank" rel="noreferrer" className="flex justify-center text-gray-500 hover:text-gray-600 mr-6">
                <FaInstagram className="max-w-8 self-end cursor-pointer" />
            </a>
            <BsEnvelope onClick={goToBottom} className="max-w-8 self-end cursor-pointer mr-6 ml-6 [fill:gray]" />
            <FaPhoneAlt onClick={goToBottom} className="max-w-8 self-end cursor-pointer ml-6 [stroke:#6b7280] [stroke-width:25] fill-transparent" />
        </div>
        </>
    );
};
export default ScrollToBottom;