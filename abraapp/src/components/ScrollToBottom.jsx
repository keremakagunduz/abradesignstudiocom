import React, { useState, useEffect } from "react";
import { FaAngleUp,FaPhoneAlt,FaInstagram } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { PiEnvelopeThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";

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
            <a href="https://www.instagram.com/abradesignstudio/" target="_blank" className="flex justify-center text-gray-400 hover:text-gray-500 mr-4">
                <FaInstagram className="max-w-8 self-end cursor-pointer" />
            </a>
            <PiEnvelopeThin onClick={goToBottom} className="max-w-8 self-end cursor-pointer mr-4 ml-4" />
            <IoCallOutline onClick={goToBottom} className="max-w-8 self-end cursor-pointer ml-4" />
        </div>
        </>
    );
};
export default ScrollToBottom;