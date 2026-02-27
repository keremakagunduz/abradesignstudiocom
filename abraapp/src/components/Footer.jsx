import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

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
  
    <div class="max-w-screen-xl px-4 mx-auto overflow-hidden sm:px-6 lg:px-8">


<svg className="max-w-6" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" space="preserve">
<path d="M90.752,20.132H9.248c-1.921,0-3.484,1.563-3.484,3.485v52.766c0,1.922,1.563,3.484,3.484,3.484h81.504  
c1.922,0,3.484-1.562,3.484-3.484V23.617C94.236,21.696,92.674,20.132,90.752,20.132z M50.124,55.921  
c-0.077,0.069-0.171,0.068-0.281-0.028L10.93,23.333h78.141L50.124,55.921z M37.679,49.887L8.963,74.765V25.86L37.679,49.887z   
M40.165,51.967l7.591,6.352c0.644,0.568,1.452,0.851,2.254,0.851c0.792,0,1.581-0.275,2.199-0.822l7.864-6.58l28.744,24.901H11.653  
L40.165,51.967z M62.56,49.687l28.477-23.828v48.497L62.56,49.687z"/>
</svg>

        <p className="mt-4 text-base leading-6 text-center text-gray-400">info@abradesignstudio.com</p>


        <p className="mt-4 text-base leading-6 text-center text-gray-400"><FaPhoneAlt />+90 505 251 8358</p>

        <p className="mt-1 text-base leading-6 text-center text-gray-400">
          Copyrights of all pictures published on this website are reserved by
          Abra Design Studio. No material published here can be copied, reproduced,
          posted, used in any way without my written permission.
        </p>

    </div>

  </footer>
);

export default Footer;
