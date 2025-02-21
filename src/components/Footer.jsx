import React from "react";
import "../css/footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              Address: 1st Floor, Venkadachalapathy Complex, NH 7, Kooraikundu -
              626002
            </li>
            <li>Phone: +91 89258 31828</li>
            <li>Email: enquiry@getintech.in</li>
            <li>
              Website:
              <a href="https://www.getintech.in/">Getin Technologies</a>
            </li>
          </ul>
        </div>
        <div className="follow">
          <h4>Follow Us</h4>
          <ul>
            <i>
              <FaFacebook />
            </i>
            <i>
              <AiFillInstagram />
            </i>
            <i>
              <FiLinkedin />
            </i>
            <i>
              <SiGmail />
            </i>
          </ul>
        </div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Inbox</li>
            <li>Payroll</li>
            <li>Time & Absence</li>
          </ul>
        </div>
      </div>
      <p>
        © {new Date().getFullYear()} <span>Getin Technologies</span>. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
