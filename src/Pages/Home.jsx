import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../assets/banner.svg";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <section className="px-24 lg:px-24">
      <div className="lg:flex lg:items-center lg:justify-between ">
        <div>
          <p className="font-mono ml-1">Hello Beginners,</p>
          <h3 className="text-5xl font-mono font-bold">
            Start coding in <br /> seconds
          </h3>
          <p className="mt-2 mb-6 font-thin">
            Go ahead, give it a try. Our hands-on <br /> learning environment means you'll be
            writing real code <br /> from your very first lesson.
          </p>
          <div>
            <Link to="/courses">
              <div className="flex items-center justify-evenly w-40 py-2 px-1 bg-orange-600  text-white rounded-sm  ">
                <p>
                  <button className="font-semibold">Continue lesson </button>
                </p>
                <p>
                  <FaArrowRight className="ml-3 text-md" />
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <img className="h-[500px] object-contain" src={banner} alt="" />
        </div>
      </div>

      <About />
      <Contact />
    </section>
  );
};

export default Home;
