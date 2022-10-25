import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";


const Home = () => {
  return (
    <div className="lg:flex items-center justify-between lg:px-24 h-screen">
      <div>
        <p className="font-mono ml-1">Hello Beginners,</p>
        <h3 className="text-5xl font-mono font-bold">
          Start coding in <br /> seconds
        </h3>
        <p className="mt-2 mb-6 font-thin">
          Go ahead, give it a try. Our hands-on <br /> learning environment means you'll be writing
          real code <br /> from your very first lesson.
        </p>
        <div>
          <Link to='/courses'>
            <button className="btn btn-outline motion-safe:hover:scale-110">
              Continue lesson <FaArrowRight className="ml-3 text-lg" />{" "}
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img className="h-96" src={banner} alt="" />
          </div>
    </div>
  );
};

export default Home;
