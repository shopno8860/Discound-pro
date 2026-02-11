import React from "react";
import { Facebook, Twitter, Github, Linkedin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-auto">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link  link-hover">Home</Link>
        <Link to="/brands" className="link  link-hover">Brands</Link>
        <Link to="/my-profile" className="link  link-hover">My Profile</Link>
        <Link to="/about-dev" className="link  link-hover">About Developer</Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="#" className="hover:text-primary transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://github.com/shopno8860" className="hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rakesh-al-yadin" className="hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <div>
        <p className="flex items-center gap-1">
          Copyright © 2024 - Made with{" "}
          <Heart size={16} className="text-error fill-current" /> by
          <a
            href="https://github.com/shopnil"
            className="font-bold hover:underline"
          >
            {" "}
            Shopno
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
