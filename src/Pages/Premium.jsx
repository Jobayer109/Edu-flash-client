import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Premium = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md sm:py-8 sm:px-12   mx-auto mb-52 mt-12 shadow-lg bg-slate-300">
        <FaCheckCircle className="text-6xl" />
        <h2 className="text-3xl font-semibold font-mono leading-tight tracking-wide">
          Congratulations!!
        </h2>
        <p className="flex-1 text-center ">
          Hello learner, We are very much glad to getting you here. Stay with us to hit your desired
          goal by taking simple and so much easy steps everyday. Be patient and become successful.
        </p>
        <Link to="/courses">
          <button className="btn btn-outline w-60">Start moving</button>
        </Link>
      </div>
    </div>
  );
};

export default Premium;
