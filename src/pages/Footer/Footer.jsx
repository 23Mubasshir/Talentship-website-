import React from "react";
import "./Footer.css";
import logo from "./../logo.jpeg"

const Footer = () => {
  return (
    <>
    <main>
      <footer>
        <div className="content mt-5">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <img src={logo} alt="" className="logo-image" />
              <span className="logo_name">Tenantship Global Advisory Forum</span>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Get started</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <a href="/"> MARKETING & SALES</a>
              </li>
              <li>
                <a href="/">CORPORATE FINANCE</a>
              </li>
              <li>
                <a href="/">DIGITAL GROWTH</a>
              </li>
              <li>
                <a href="/">BLOG</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                <a href="/">Profile</a>
              </li>
              <li>
                <a href="/">My account</a>
              </li>
              <li>
                <a href="/">Preferences</a>
              </li>
              <li>
                <a href="/">Purchase</a>
              </li>
            </ul>
            
            <ul className="box input-box">
              <li className="link_name">Contact US</li>

              <li>
              <a href="/Contact"><input type="button" value="Contact" /></a>
                
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2023 <a href="/">Tenantship Global Advisory Forum</a>All rights reserved
            </span>
            <span className="policy_terms">
              <a href="/">Privacy policy</a>
              <a href="/">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
};

export default Footer;