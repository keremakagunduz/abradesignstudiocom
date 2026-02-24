import { useEffect, useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchCategories } from "../api/portfolio";

import {
  faInstagram,
  faBehanceSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function useActiveLink() {
  const { pathname } = useLocation();
  return (to) => 
    pathname === to 
    ? "border-b-2 border-black w-fit"
    :"border-b-2 border-transparent hover:border-gray-300 w-fit";
}

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Header() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const query = useQuery();
  const [open, setOpen] = useState(false);
  const activeLink = useActiveLink();

  const navLink = (to, label) => (
    <Link
      key={to}
      to={to}
      className={`block px-3 py-2 ${activeLink(to)}`}
      onClick={() => setOpen(false)}   // close menu after a click
    >
      {label}
    </Link>
  );

  const activeCatId = query.get("cat");

  useEffect(() => {
    fetchCategories().then((r) => setCategories(r.data));
  }, []);

  return (
    <header className="bg-white-800 text-black mx-2 xl:mx-12 font-montserrat-regular">
      <div className="mx-auto flex items-center sm:justify-between sm:px-4 py-3">
        {/* ---------- Logo + Title (left side) ---------- */}
        <div className="h-auto max-w-full">
        <Link to="/" className="flex items-center space-x-3">
        
          {/* Logo */}
          <img
            src=""
            alt="Abra Design Studio"
            /*className="md:m-8 md:flex xl:max-w-5xl min-w-24 mr-4"*/
            className="max-w-110 md:mt-8 md:mr-8 md:mb-8 md:flex sm:max-w-full xl:max-w-3xl 2xl:max-w-3xl"
            style={{ maxHeight: '21rem'}}
          />
          </Link>
          </div>
          <div className="pl-12 pr-6"></div>

        {/* ---------- Desktop navigation (md+) ---------- */}
        <nav className="hidden md:flex space-x-4 font-montserrat-bold" style={{ minWidth: '21rem' }}>
          {navLink("/", "Portfolio")}
          {navLink("/aboutme", "About Me")}
          {navLink("/contact", "Contact")}
        </nav>

        {/* ---------- Mobile hamburger button ---------- */}
        <button
          className="flex sm:flex md:hidden items-center focus:outline-none font-montserrat-bold"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {/* three‑line icon */}
          <svg
            className="mr-2 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>


      </div>
      
      {/* ---------- Mobile dropdown (shown when open) ---------- */}
      {open && (
        <nav className="md:hidden bg-white-800 px-4 pt-2 pb-4 space-y-1 font-montserrat-regular">
          {navLink("/", "Portfolio")}
          {navLink("/aboutme", "About Me")}
          {navLink("/contact", "Contact")}
        </nav>
      )}
    </header>
  );
}
