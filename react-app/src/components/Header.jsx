import { useState } from 'react';
import './Header.css';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="header">
      <a href="https://studioonbrunswick.com.au/" className="logo-link">
        <img
          src="/Studio-On-Brunswick-name_WHITE.png"
          alt="Studio on Brunswick"
          className="logo"
        />
      </a>
      <nav className="nav">
        {/* INNER CIRCLE Dropdown */}
        <div
          className="nav-item-dropdown"
          onMouseEnter={() => setOpenDropdown('inner-circle')}
          onMouseLeave={closeDropdown}
        >
          <span className="nav-link">INNER CIRCLE</span>
          {openDropdown === 'inner-circle' && (
            <div className="dropdown-menu">
              <a href="https://studioonbrunswick.com.au/inner-circle" className="dropdown-link">Become a member</a>
              <a href="https://studioonbrunswick.com.au/navigate-the-circle-1" className="dropdown-link">Navigate the circle</a>
            </div>
          )}
        </div>

        {/* WHAT'S ON Dropdown */}
        <div
          className="nav-item-dropdown"
          onMouseEnter={() => setOpenDropdown('whats-on')}
          onMouseLeave={closeDropdown}
        >
          <span className="nav-link">WHAT'S ON</span>
          {openDropdown === 'whats-on' && (
            <div className="dropdown-menu">
              <a href="https://studioonbrunswick.com.au/in-gallery" className="dropdown-link">In Gallery</a>
              <a href="https://studioonbrunswick.com.au/courses-classes-connect-events" className="dropdown-link">Workshops & Creative Events</a>
              <a href="https://studioonbrunswick.com.au/members-only" className="dropdown-link">Members Only</a>
            </div>
          )}
        </div>

        {/* TEAM Dropdown */}
        <div
          className="nav-item-dropdown"
          onMouseEnter={() => setOpenDropdown('team')}
          onMouseLeave={closeDropdown}
        >
          <span className="nav-link">TEAM</span>
          {openDropdown === 'team' && (
            <div className="dropdown-menu dropdown-menu-wide">
              <a href="https://studioonbrunswick.com.au/the-team" className="dropdown-link">Team Bruns - At a Glance</a>
              <a href="https://studioonbrunswick.com.au/amyruthstudioonbrunswickaffiliate" className="dropdown-link">Amy Ruth</a>
              <a href="https://studioonbrunswick.com.au/robstanleyartist" className="dropdown-link">Rob Stanley</a>
              <a href="https://studioonbrunswick.com.au/liz-christiansenaffiliateartiststudioonbrunswick" className="dropdown-link">Liz Christiansen</a>
              <a href="https://studioonbrunswick.com.au/jo-kaiseraffiliatartiststudioonbrunswick" className="dropdown-link">Jo Kaiser</a>
              <a href="https://studioonbrunswick.com.au/michelle-graham-affiliateartiststudioonbrunswick" className="dropdown-link">Michelle Graham</a>
              <a href="https://studioonbrunswick.com.au/wendy-hallj-ordan-affiliateartiststudioonbrunswick" className="dropdown-link">Wendy Hall-Jordan</a>
              <a href="https://studioonbrunswick.com.au/lynetiltstudioonbrunswick" className="dropdown-link">Lyne Tilt</a>
              <a href="https://studioonbrunswick.com.au/celia-kingaffiliateartiststudioonbrunswick" className="dropdown-link">Celia King</a>
              <a href="https://studioonbrunswick.com.au/tara-stower" className="dropdown-link">Tara Lorel Stower</a>
            </div>
          )}
        </div>

        {/* SERVICES Dropdown */}
        <div
          className="nav-item-dropdown"
          onMouseEnter={() => setOpenDropdown('services')}
          onMouseLeave={closeDropdown}
        >
          <span className="nav-link">SERVICES</span>
          {openDropdown === 'services' && (
            <div className="dropdown-menu">
              <a href="https://studioonbrunswick.com.au/blogs-free-resources" className="dropdown-link">Blogs & Free Resources</a>
              <a href="https://studioonbrunswick.com.au/coach" className="dropdown-link">Coaching</a>
              <a href="https://studioonbrunswick.com.au/space-hire" className="dropdown-link">Space Hire</a>
            </div>
          )}
        </div>

        {/* ABOUT Dropdown */}
        <div
          className="nav-item-dropdown"
          onMouseEnter={() => setOpenDropdown('about')}
          onMouseLeave={closeDropdown}
        >
          <span className="nav-link">ABOUT</span>
          {openDropdown === 'about' && (
            <div className="dropdown-menu">
              <a href="https://studioonbrunswick.com.au/ourstory" className="dropdown-link">Our Story</a>
              <a href="https://studioonbrunswick.com.au/our-founder" className="dropdown-link">Our Founder</a>
              <a href="https://studioonbrunswick.com.au/our-affiliates" className="dropdown-link">Our Affiliates</a>
            </div>
          )}
        </div>

        {/* FAQ Link */}
        <a href="https://studioonbrunswick.com.au/faqandprivacypolicy" className="nav-link">FAQ</a>

        {/* Contact Link */}
        <a href="https://studioonbrunswick.com.au/contact-1" className="nav-link">CONTACT</a>

        {/* Login Link */}
        <a href="https://studioonbrunswick.com.au/contact-1#" className="nav-link">LOGIN</a>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.instagram.com/studio_on_brunswick/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/studioonbrunswick/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://www.google.com/search?q=studio%20on%20brunswick%20fortitude%20valley"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Google"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
