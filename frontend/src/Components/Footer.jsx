import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Divine Care Hospital is a healthcare facility dedicated to providing
            high-quality medical services to patients. It offers a wide range of
            treatments, including emergency care, specialized consultations, and
            advanced medical procedures.
          </p>
        </div>
        {/* middle section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flec flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flec flex-col gap-2 text-gray-600">
            <li>1800-600-600-123</li>
            <li>divinecare@gmail.com</li>
            <li>devendra94kumawat@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* copy right text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright&copy; 2025 || Divine Care - All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
