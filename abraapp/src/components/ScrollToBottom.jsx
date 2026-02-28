import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import "../index.css";

const ScrollToBottom = () => {
    const goToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight, // Scroll to the bottom
            behavior: "smooth",
        });
    };
    return (
        <>
        <div 
            className="max-w-8 self-end cursor-pointer" 
            onClick={goToBottom} // Click event for scrolling
            role="button" // Accessibility
            tabIndex={0} // Make it focusable for accessibility
            onKeyPress={(e) => { if (e.key === 'Enter') goToBottom(); }} // Handle 'Enter' key for accessibility
        >
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 95 118.75" x="0px" y="0px">
                <path d="M82.664,81.539a2.745,2.745,0,0,1-1.45,2.12L72.024,89.2a44.218,44.218,0,0,1-7.933.707c-14.785,0-30.433-7.085-43.22-19.871C5.766,54.932-1.381,
                35.836,1.706,18.884l5.543-9.19a2.741,2.741,0,0,1,2.119-1.45,1.948,1.948,0,0,1,1.692.787L25.608,27.813c.3.39.72,1.112.132,1.574l-8.024,6.3a1.891,1.891,0,
                0,0-.724,1.518c.1,6.6,5.022,15.407,13.162,23.547S47.1,73.814,53.7,73.916a1.909,1.909,0,0,0,1.519-.724l6.3-8.024c.461-.588,1.184-.17,1.573.132L81.877,79.848A1.951,
                1.951,0,0,1,82.664,81.539ZM79.27,23.8,94,38.532V9.072ZM92.38,5.336a2.727,2.727,0,0,0-1.125-.244H50.55a2.731,2.731,0,0,0-1.125.244L70.9,26.814ZM47.805,9.072v29.46L62.535,
                23.8ZM72.242,30.831a1.9,1.9,0,0,1-2.678,0L65.213,26.48,49.681,42.012a2.721,2.721,0,0,0,.869.144H91.255a2.716,2.716,0,0,0,.869-.144L76.592,26.48Z"/>
            </svg>
            </div>
        </>
    );
};
export default ScrollToBottom;