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
        <a href="https://www.instagram.com/abradesignstudio/" target="_blank" className="flex justify-center text-gray-400 hover:text-gray-500">
            <FaInstagram className="max-w-8 self-end cursor-pointer" />
        </a>

        <BsEnvelope onClick={goToBottom} className="max-w-8 self-end cursor-pointer" />
        <FaPhoneAlt onClick={goToBottom} className="max-w-8 self-end cursor-pointer" />

        </>
    );
};
export default ScrollToBottom;