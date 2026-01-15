import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header__brand">
        <span className="logo-icon">⬛</span>
        <span className="logo-text">Renova</span>
      </div>

      {/* Navigation */}
      <nav className="header__nav">
        <NavLink to="/services" className="nav-link">
          Service
        </NavLink>
        <NavLink to="/why-us" className="nav-link">
          Why Us
        </NavLink>
        <NavLink to="/testimonials" className="nav-link">
          Testimonial
        </NavLink>
        <NavLink to="/faq" className="nav-link">
          FAQ
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </nav>

      {/* Actions */}
      <div className="header__actions">
        <NavLink to="/signup" className="signup-btn">
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
