import React from "react";
import { Link } from "react-router-dom";
import coder from "../assets/coder.svg";
const MakeAppoint = () => {
  return (
    <section
      className=" my-36"
      style={{
        background: `url("https://t3.ftcdn.net/jpg/04/42/92/98/360_F_442929880_YS3WrEnze635pKy1BWYDVGohNOflU5B2.jpg")`,
        borderRadius: "10px",
      }}
    >
      <div className="md:flex lg:flex items-center justify-center px-10">
        <figure className="lg:w-1/2 -mt-28">
          <img src={coder} alt="" className="hidden lg:block" />
        </figure>
        <div className="w-1/2 p-10">
          <h4 className="font-bold text-orange-400 text-lg mb-3">About us</h4>
          <h2 className="text-3xl font-bold text-white">
            Learn Effectively That Will Take You Towards Your Goal
          </h2>
          <p className="my-4 text-gray-300">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
            more-or-less normal distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page
          </p>
          <div className="">
            <Link to="/courses">
              {" "}
              <button className="w-40 py-2 px-1 bg-orange-600 text-white">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoint;
