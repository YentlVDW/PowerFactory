import { React, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

export default function Navigation() {
  const [active, setActive] = useState(false);
  function ShowMenu() {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  }
  return (
    <div className="menu-container">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div
          className={active ? "ham-menu active" : "ham-menu"}
          onClick={ShowMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={active ? "off-screen-menu active" : "off-screen-menu"}>
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={ShowMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={ShowMenu}
              >
                Over ons
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="openinghours"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={ShowMenu}
              >
                Openingstijden
              </Link>
            </li>
            <div className="logo2">
              <img src={logo} alt="logo" />
            </div>
            <li className="nav-item">
              <Link
                to="subscriptions"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={ShowMenu}
              >
                Abonnementen
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={ShowMenu}
              >
                Gallerij
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={ShowMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
