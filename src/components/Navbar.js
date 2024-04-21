import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { label: 'Services', dropdownItems: ['Advisory', 'Product Engineering', 'Solutions', 'Optimization', 'Cloud Services', 'Services By Role'] },
    { label: 'Clients', to: '/client' }, // Add the link to the Clients page
    { label: 'Company', to: '/home' },
    { label: 'Podcasts' },
    { label: 'Careers' },
    { label: 'Resources', dropdownItems: ['Blogs', 'News', 'Media', 'Dev Community'] },
    { icon: <FaPhoneAlt />, label: '+92345454545'},
  ];

  return (
    <div>
      <nav className="container navbar navbar-expand-lg my-3 navbar-hover">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={''} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-list me-auto mb-2 mb-lg-0">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </ul>
            <form className="d-flex" role="search">
              <button className="btn text-white" type="submit" id="contact-us">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ label, dropdownItems, icon, to }) => {
  return (
    <li className={`nav-item ${dropdownItems ? 'dropdown' : ''}`}>
      {dropdownItems ? (
        <div className="dropdown">
          <Link to={to || `/${label.toLowerCase()}`} className="nav-link dropdown-toggle active dropbtn">
            {icon && <span className="icon">{icon}</span>}
            {label}
          </Link>
          <ul className="dropdown-menu dropdown-content">
            {dropdownItems.map((dropdownItem, index) => (
              <li key={index}>
                <a className="dropdown-item" href="#">
                  {dropdownItem}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link to={to || `/${label.toLowerCase()}`} className="nav-link active">
          {icon && <span className="icon">{icon}</span>}
          {label}
        </Link>
      )}
    </li>
  );
};

export default Navbar;
