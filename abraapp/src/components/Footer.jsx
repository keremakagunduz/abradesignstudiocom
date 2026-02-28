import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#f8f9fa",
      color: "#212529",
      padding: "1rem 1rem",
      textAlign: "center",
      fontSize: "0.9rem",
      lineHeight: "1.5",
    }}
  >
  
    <div class="max-w-screen-xl px-4 mx-auto overflow-hidden sm:px-6 lg:px-8 place-items-center">

        <div className="w-fit flex">
        <BsEnvelope className="self-center" />
        <p className="ml-4text-base leading-6 text-center text-gray-400">info@abradesignstudio.com</p>
        </div>

        <div className="w-fit flex">
        <FaPhoneAlt className="self-center"/>
        <p className="ml-4 text-base leading-6 text-center text-gray-400">+90 505 251 8358</p>
        </div>

        <p className="pt-6 mt-1 text-base leading-6 text-center text-gray-400">
          Copyrights of all pictures published on this website are reserved by
          Abra Design Studio. No material published here can be copied, reproduced,
          posted, used in any way without my written permission.
        </p>

    </div>

  </footer>
);

export default Footer;
