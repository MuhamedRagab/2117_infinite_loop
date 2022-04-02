import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <nav id="nav" className="nav ">
        <a id="logo" className="nav__logo" href="#">
          Infinite Loop
        </a>

        <ul className="nav__links">
          <li>
            <a className="nav__link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav__link" href="#what-we-do">
              What We Do
            </a>
          </li>
          <li>
            <a className="nav__link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="nav__link" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
