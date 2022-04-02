import React from "react";
import "./Header.css";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <article className="header__article">
        <h1 className="header__article--headding">Infinite Loop</h1>
        <p className="header__article--para">
          Bootstrap 4.0 Parallax Theme <br /> Free HTML Template by TOOPLATE
        </p>
      </article>
      <i className="fas fa-2x fa-arrow-down tm-down-arrow"></i>
    </header>
  );
};

export default Header;
