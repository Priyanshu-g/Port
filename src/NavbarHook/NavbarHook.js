import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    return (
      <ul className={listClassName}>
        <li>
          <NavLink 
            to="/" 
            className={linkClassName} 
            onClick={closeMobileMenu}
          >
            About Me (Home)
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Game"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Game Development
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Web"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Web Development
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Product"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Product Design
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Priyanshu Ghosh
        </NavLink>

        {isMobile && (
          <div className={`nav__toggle  ${isMenuOpen ? "no_show" : "show-menu"}`} id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : "no_show"}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;
