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
            <a className="nav__link" href="#">
              What We Do
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Gallery
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* ========= Nav Phone ========= */}
      <nav id="nav-phone" className=" nav nav-phone container">
        <div>
          <a className="nav__logo" href="#">
            Infinite Loop
          </a>

          <i
            id="menu"
            onClick={toggleMenu}
            className="fas fa-bars navbar-toggler-icon"
          ></i>
        </div>
        <div className="phone-links">
          <ul id="nav__links" className="nav__links">
            <li>
              <a className="nav__link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav__link" href="#">
                What We Do
              </a>
            </li>
            <li>
              <a className="nav__link" href="#">
                Testimonials
              </a>
            </li>
            <li>
              <a className="nav__link" href="#">
                Gallery
              </a>
            </li>
            <li>
              <a className="nav__link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const nav = document.querySelectorAll(".nav");
const logo = document.querySelectorAll(".nav__logo");
const links = document.querySelectorAll(".nav__link");
const menuIcon = document.getElementById("menu");

window.onscroll = () => {
  if (window.scrollY >= 200) {
    nav.forEach((e) => {
      e.classList.add("nav-scroll");
    });

    logo.forEach((logo) => {
      logo.classList.add("logo-srcoll");
    });

    links.forEach((link) => {
      link.classList.add("link-srcoll");
    });

    menuIcon.classList.add("menuIcon-scroll");
  } else {
    nav.forEach((e) => {
      e.classList.remove("nav-scroll");
    });

    logo.forEach((logo) => {
      logo.classList.remove("logo-srcoll");
    });

    links.forEach((link) => {
      link.classList.remove("link-srcoll");
    });

    menuIcon.classList.remove("menuIcon-scroll");
  }
};
const menu = document.querySelector(".phone-links");
const toggleMenu = () => {
  if (menu.style.height === "324px") {
    menu.style.height = "0px";
    links.forEach((link) => {
      link.style.display = "none";
    });
  } else {
    menu.style.height = "324px";
    links.forEach((link) => {
      link.style.display = "block";
    });
  }
};

export default Nav;
