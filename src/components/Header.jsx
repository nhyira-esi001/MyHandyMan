import { useState } from "react";
import "../styles/header.css";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home",         section: "hero"         },
  { label: "Services",     section: "services"     },
  { label: "About",        section: "why-us"       },
  { label: "Testimonials", section: "testimonials" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      <header className="header">
        {/* Logo */}
        <div className="header__brand">
          <img src={logo} alt="ƐNIWƆK logo" className="logo-icon" />
          <span className="logo-text">ƐNIWƆK</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, section }) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, section)}
              className="nav-link"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger toggle — visible on mobile only */}
        <button
          className="header__hamburger"
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`mobile-overlay${isMenuOpen ? " mobile-overlay--visible" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile slide-down drawer */}
      <nav
        className={`mobile-drawer${isMenuOpen ? " mobile-drawer--open" : ""}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ label, section }) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleNavClick(e, section)}
            className="mobile-nav-link"
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Header;
