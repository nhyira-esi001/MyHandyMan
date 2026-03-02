import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="header__brand">
        <img src={logo} alt="ƐNIWƆK logo" className="logo-icon" />
        <span className="logo-text">ƐNIWƆK</span>
      </div>

      {/* Navigation */}
      <nav className="header__nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <a href="#testimonials" onClick={(e) => handleNavClick(e, "testimonials")} className="nav-link">
          Testimonials
        </a>
        <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="nav-link">
          Services
        </a>
        <a href="#why-us" onClick={(e) => handleNavClick(e, "why-us")} className="nav-link">
          About
        </a>
      </nav>

      {/* Actions */}
      <div className="header__actions">
        {/* <NavLink to="/login" className="login-link">
          Login
        </NavLink>
        <NavLink to="/signup" className="signup-btn">
          Get Started
        </NavLink> */}
      </div>
    </header>
  );
};

export default Header;
