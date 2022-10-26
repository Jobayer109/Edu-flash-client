import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Premium = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100 mx-auto mb-52 mt-12 shadow-lg">
        <FaCheckCircle className="text-6xl" />
        <h2 className="text-3xl font-semibold font-mono leading-tight tracking-wide">
          Congratulations!!
        </h2>
        <p className="flex-1 text-center dark:text-gray-400">
          Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta maiores non itaque
          aliquam sint.
        </p>
        <Link to='/courses'>
          <button className="btn btn-outline btn-success w-96">Start recycling</button>
        </Link>
      </div>
    </div>
  );
};

export default Premium;
