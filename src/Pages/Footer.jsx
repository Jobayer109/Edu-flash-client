import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="px-10 divide-y  dark:bg-gray-800 dark:text-gray-300 bg-gray-100">
      <div className="flex justify-between py-10  mx-auto  flex-row space-y-6">
        <div className="w-1/3 flex items-center">
          <Link
            rel="noopener noreferrer"
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-24 h-24 rounded-full ">
              <img src={Logo} alt="" />
            </div>
            <span className="self-center text-3xl font-extrabold">Edu Flash</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-50 font-bold">Services</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/courses">
                  Integrations
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/courses">
                  Pricing
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-50 font-bold">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Privacy
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50 font-bold">About us</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Location
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Ratings
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-50 font-bold">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link to="/">
                <FaFacebook />
              </Link>
              <Link to="/">
                <FaTwitter />
              </Link>
              <Link to="/">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © Copyright 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
