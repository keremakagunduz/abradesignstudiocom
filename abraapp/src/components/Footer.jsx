import React from "react";

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

        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
          <path d="M448,64H64C28.656,64,0,92.656,0,128v256c0,35.344,28.656,64,64,64h384c35.344,0,64-28.656,64-64V128
            C512,92.656,483.344,64,448,64z M342.656,234.781l135.469-116.094c0.938,3,1.875,6,1.875,9.313v256
            c0,2.219-0.844,4.188-1.281,6.281L342.656,234.781z M448,96c2.125,0,4,0.813,6,1.219L256,266.938L58,97.219
            C60,96.813,61.875,96,64,96H448z M33.266,390.25C32.828,388.156,32,386.219,32,384V128c0-3.313,0.953-6.313,1.891-9.313
            L169.313,234.75L33.266,390.25z M64,416c-3.234,0-6.172-0.938-9.125-1.844l138.75-158.563l51.969,44.531
            C248.578,302.719,252.297,304,256,304s7.422-1.281,10.406-3.875l51.969-44.531l138.75,158.563C454.188,415.062,451.25,416,448,416
            H64z"/>
        </g>
        </svg>

        <p className="mt-4 text-base leading-6 text-center text-gray-400">info@abradesignstudio.com</p>

        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-phone" width="24" height="24" viewBox="0 0 24 24">
        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
        </svg>
        <p className="mt-4 text-base leading-6 text-center text-gray-400">+90 505 251 8358</p>
        <p className="mt-1 text-base leading-6 text-center text-gray-400">
          Copyrights of all pictures published on this website are reserved by
          Abra Design Studio. No material published here can be copied, reproduced,
          posted, used in any way without my written permission.
        </p>

    </div>

  </footer>
);

export default Footer;
