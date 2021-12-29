import React from "react";
import Logo from "../icons/Logo";
import { StyledFooter } from "./Footer.styled";
import IconLocation from "../icons/IconLocation";
import IconEmail from "../icons/IconEmail";
import IconPhone from "../icons/IconPhone";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <div>
        <div className="footerItemWithIcon fiwi1">
          <IconLocation />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="footerItemWithIcon">
          <IconPhone /> <a href="tel: +1-543-123-4567">+1-543-123-4567</a>
        </div>
        <div className="footerItemWithIcon">
          <IconEmail />
          <a href="mailto:example@fylo.com">example@fylo.com</a>
        </div>
      </div>

      <ul className="footerLinks">
        <li className="footerLink">About Us</li>
        <li className="footerLink">Jobs</li>
        <li className="footerLink">Press</li>
        <li className="footerLink">Blog</li>
      </ul>
      <ul className="footerLinks">
        <li className="footerLink">Contact Us</li>
        <li className="footerLink">Terms</li>
        <li className="footerLink">Privacy</li>
      </ul>

      <section className="socialIcons">
        <span className="social-icon">
          <ImFacebook className="icon" />
        </span>
        <span className="social-icon">
          <ImTwitter className="icon" />
        </span>
        <span className="social-icon">
          <IoLogoInstagram className="icon" />
        </span>
      </section>
      <p class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">David Mainoo</a>.
      </p>
    </StyledFooter>
  );
}

export default Footer;
