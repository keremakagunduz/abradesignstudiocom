import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import "../index.css";

const imageLoader = (src, width, quality) => {
  return `${src}?format=auto${quality ? `&quality=${quality}` : ''}&width=${width}`;
};


const ScrollToTop = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="btm-to-top">
            {" "}
            {
                <img
            src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Abra_Icon_png.png", 400)}
            alt="Abra Design Studio"
            className="hidden sm:max-w-40 sm:ml-0 sm:mr-auto sm:absolute sm:pt-0 sm:pt-6"
            onClick={goToTop}
            />
            }{" "}
        </div>
    );
};
export default ScrollToTop;